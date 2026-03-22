// POST /api/passkey/register-verify
import { verifyRegistrationResponse } from '@simplewebauthn/server';

const expectedChallenge = session.pendingChallenge;
if (!expectedChallenge) throw new Error('Pas de challenge en attente');

const verification = await verifyRegistrationResponse({
  response: body.response,
  expectedChallenge,
  expectedOrigin: 'https://krabsvault.com',
  expectedRPID: 'krabsvault.com',
  requireUserVerification: false
});

if (!verification.verified || !verification.registrationInfo) {
  return json({ verified: false });
}

const { credential, userVerified, credentialDeviceType, credentialBackedUp } =
  verification.registrationInfo;

db.savePasskey({
  id: credential.id,
  userId: user.id,
  publicKey: credential.publicKey,
  counter: credential.counter,
  transports: credential.transports
});

return json({ verified: true });
