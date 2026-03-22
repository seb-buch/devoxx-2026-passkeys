// POST /api/passkey/register-options
import { generateRegistrationOptions } from '@simplewebauthn/server';

const existingPasskeys = db.getPasskeysByUserId(user.id);

const options = await generateRegistrationOptions({
  rpName: 'KrabsVault',
  rpID: 'krabsvault.com',
  userName: user.username,
  userID: new Uint8Array([user.id]),
  attestationType: 'none',
  excludeCredentials: existingPasskeys.map((p) => ({
    id: p.id,
    transports: p.transports
  })),
  authenticatorSelection: {
    residentKey: 'discouraged',
    userVerification: 'preferred'
  },
  supportedAlgorithmIDs: [-7, -257]
});

session.pendingChallenge = options.challenge;

return json(options);
