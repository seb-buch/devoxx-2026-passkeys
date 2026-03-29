// POST /api/passkey/register-options
import { randomBytes } from 'node:crypto';

// Récupérer les passkeys existantes pour les exclure
const existingPasskeys = db.getPasskeysByUserId(user.id);

// Générer un challenge aléatoire (≥ 16 bytes selon la spec)
const challenge = randomBytes(32).toString('base64url');

// Stocker le challenge côté serveur pour la vérification ultérieure
session.pendingChallenge = challenge;

// Construire les options manuellement selon la spec WebAuthn
return json({
  challenge,
  rp: { id: 'krabsvault.com', name: 'KrabsVault' },
  user: {
    id: Buffer.from([user.id]).toString('base64url'),
    name: user.username,
    displayName: user.username
  },
  pubKeyCredParams: [
    { type: 'public-key', alg: -7 }, // ES256 (ECDSA P-256)
    { type: 'public-key', alg: -257 } // RS256 (RSASSA-PKCS1-v1_5)
  ],
  authenticatorSelection: {
    residentKey: 'discouraged',
    userVerification: 'preferred'
  },
  excludeCredentials: existingPasskeys.map((p) => ({
    type: 'public-key',
    id: p.id,
    transports: p.transports
  })),
  attestation: 'none',
  timeout: 60000
});
