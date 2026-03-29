// POST /api/passkey/register-verify
import { createHash } from 'node:crypto';
import { decode as cborDecode } from 'cbor'; // dépendance tierce

const { response } = body;

// --- 1. Décoder et valider le clientDataJSON ---
const clientDataJSON = JSON.parse(
  Buffer.from(response.clientDataJSON, 'base64url').toString('utf8')
);
if (clientDataJSON.type !== 'webauthn.create') throw new Error('Type invalide');
if (clientDataJSON.challenge !== session.pendingChallenge) throw new Error('Challenge invalide');
if (clientDataJSON.origin !== 'https://krabsvault.com') throw new Error('Origin invalide');

// --- 2. Décoder l'attestationObject (CBOR) ---
const attestationObject = cborDecode(Buffer.from(response.attestationObject, 'base64url'));

// --- 3. Parser l'authData (format binaire selon la spec) ---
const authData: Buffer = attestationObject.authData;
let offset = 0;

// rpIdHash : SHA-256 du rpId (32 bytes)
const rpIdHash = authData.subarray(offset, (offset += 32));
const expectedRpIdHash = createHash('sha256').update('krabsvault.com').digest();
if (!rpIdHash.equals(expectedRpIdHash)) throw new Error('rpIdHash invalide');

// Flags (1 byte) : bit 0 = UP, bit 2 = UV, bit 6 = AT (attested credential data)
const flags = authData[offset++];
if (!(flags & 0x01)) throw new Error('User presence absent (UP=0)');
if (!(flags & 0x40)) throw new Error('Pas de données de credential (AT=0)');

// signCount (4 bytes big-endian)
const signCount = authData.readUInt32BE(offset);
offset += 4;

// AAGUID (16 bytes) — identifie le modèle d'authenticator
const aaguid = authData.subarray(offset, (offset += 16));

// credentialIdLength (2 bytes big-endian)
const credentialIdLength = authData.readUInt16BE(offset);
offset += 2;

// credentialId
const credentialId = authData.subarray(offset, (offset += credentialIdLength));

// --- 4. Décoder la clé publique COSE (CBOR encore) ---
const coseKey: Map<number, unknown> = cborDecode(authData.subarray(offset));
// COSE EC2 key map : { 1: kty=2, 3: alg=-7, -1: crv=1, -2: x, -3: y }
const kty = coseKey.get(1);
const alg = coseKey.get(3);
if (kty !== 2 || alg !== -7) throw new Error('Seul ES256 (ECDSA P-256) est supporté');
const x = coseKey.get(-2) as Buffer;
const y = coseKey.get(-3) as Buffer;
// Clé publique en format non-compressé (0x04 || x || y)
const publicKey = Buffer.concat([Buffer.from([0x04]), x, y]);

// --- 5. Vérifier le format d'attestation ---
if (attestationObject.fmt !== 'none') {
  // Chaque format a sa propre logique de vérification :
  // 'packed', 'fido-u2f', 'android-safetynet', 'tpm', 'android-key', 'apple'...
  throw new Error(`Format d'attestation non géré : ${attestationObject.fmt}`);
}

// --- 6. Stocker la passkey ---
db.savePasskey({
  id: credentialId.toString('base64url'),
  userId: user.id,
  publicKey,
  counter: signCount
});
