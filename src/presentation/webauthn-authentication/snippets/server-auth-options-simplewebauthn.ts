// GET /api/passkey/auth-options?username=...
import { generateAuthenticationOptions } from '@simplewebauthn/server';

const user = db.getUserByUsername(username);
if (!user) return json({ hasPasskey: false });

const passkeys = db.getPasskeysByUserId(user.id);
if (passkeys.length === 0) return json({ hasPasskey: false });

const options = await generateAuthenticationOptions({
  rpID: 'krabsvault.com',
  userVerification: 'preferred',
  allowCredentials: passkeys.map((p) => ({
    id: p.id,
    transports: p.transports
  }))
});

session.pendingChallenge = options.challenge;

return json({ hasPasskey: true, options });
