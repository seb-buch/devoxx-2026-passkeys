// GET /api/passkey/auth-options?username=...
import { randomBytes } from 'node:crypto';

// Récupérer les passkeys de l'utilisateur
const user = db.getUserByUsername(username);
if (!user) return json({ hasPasskey: false });

const passkeys = db.getPasskeysByUserId(user.id);
if (passkeys.length === 0) return json({ hasPasskey: false });

// Générer un challenge aléatoire (≥ 16 bytes selon la spec)
const challenge = randomBytes(32).toString('base64url');

// Stocker le challenge côté serveur pour la vérification ultérieure
session.pendingChallenge = challenge;

// Construire les options manuellement selon la spec WebAuthn
return json({
  hasPasskey: true,
  options: {
    challenge,
    rpId: 'krabsvault.com',
    userVerification: 'preferred',
    allowCredentials: passkeys.map((p) => ({
      type: 'public-key',
      id: p.id,
      transports: p.transports
    })),
    timeout: 60000
  }
});
