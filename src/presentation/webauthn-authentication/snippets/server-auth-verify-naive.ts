// POST /api/passkey/auth-verify
import { createHash, createVerify } from 'node:crypto';

const { response } = body;

// --- 1. Récupérer la passkey depuis la base de données ---
const passkey = db.getPasskeyById(response.id);
if (!passkey) throw new Error('Passkey inconnue');

// --- 2. Décoder et valider le clientDataJSON ---
const clientDataJSON = JSON.parse(
  Buffer.from(response.clientDataJSON, 'base64url').toString('utf8')
);
if (clientDataJSON.type !== 'webauthn.get') throw new Error('Type invalide');
if (clientDataJSON.challenge !== session.pendingChallenge) throw new Error('Challenge invalide');
if (clientDataJSON.origin !== 'https://krabsvault.com') throw new Error('Origin invalide');

// --- 3. Parser l'authenticatorData (format binaire selon la spec) ---
const authData = Buffer.from(response.authenticatorData, 'base64url');
let offset = 0;

// rpIdHash : SHA-256 du rpId (32 bytes)
const rpIdHash = authData.subarray(offset, (offset += 32));
const expectedRpIdHash = createHash('sha256').update('krabsvault.com').digest();
if (!rpIdHash.equals(expectedRpIdHash)) throw new Error('rpIdHash invalide');

// Flags (1 byte) : bit 0 = UP, bit 2 = UV
const flags = authData[offset++];
if (!(flags & 0x01)) throw new Error('User presence absent (UP=0)');

// signCount (4 bytes big-endian)
const newCounter = authData.readUInt32BE(offset);

// --- 4. Vérifier la signature ECDSA ---
// Données signées par l'authenticator = authenticatorData || SHA-256(clientDataJSON)
const clientDataHash = createHash('sha256')
  .update(Buffer.from(response.clientDataJSON, 'base64url'))
  .digest();
const signedData = Buffer.concat([authData, clientDataHash]);

// La clé publique est stockée en format non-compressé (0x04 || x[32] || y[32])
// Node.js crypto nécessite un encodage DER/SPKI manuel (ASN.1 : OID EC + OID P-256 + BitString)
const x = passkey.publicKey.subarray(1, 33);
const y = passkey.publicKey.subarray(33, 65);
const spkiKey = buildEcP256SpkiKey(x, y); // ~30 lignes d'assemblage ASN.1 DER...

const verifier = createVerify('SHA256');
verifier.update(signedData);
if (
  !verifier.verify(
    { key: spkiKey, format: 'der', type: 'spki' },
    Buffer.from(response.signature, 'base64url')
  )
) {
  throw new Error('Signature invalide');
}

// --- 5. Vérifier et mettre à jour le compteur (protection anti-clonage) ---
if (newCounter > 0 && newCounter <= passkey.counter) {
  throw new Error('Counter invalide — possible clonage de passkey détecté !');
}
db.updatePasskeyCounter(passkey.id, newCounter);

sessionManager.createSession(passkey.userId, cookies);
