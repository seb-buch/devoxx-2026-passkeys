// POST /api/passkey/auth-verify
import { verifyAuthenticationResponse } from '@simplewebauthn/server';

const expectedChallenge = session.pendingChallenge;
if (!expectedChallenge) throw new Error('Pas de challenge en attente');

const passkey = db.getPasskeyById(body.response.id);
if (!passkey) throw new Error('Passkey inconnue');

const verification = await verifyAuthenticationResponse({
  response: body.response,
  expectedChallenge,
  expectedOrigin: 'https://krabsvault.com',
  expectedRPID: 'krabsvault.com',
  credential: {
    id: passkey.id,
    publicKey: passkey.publicKey,
    counter: passkey.counter,
    transports: passkey.transports
  },
  requireUserVerification: false
});

if (!verification.verified) {
  return json({ verified: false });
}

const { newCounter } = verification.authenticationInfo;

db.updatePasskeyCounter(passkey.id, newCounter);
sessionManager.createSession(passkey.userId, cookies);

return json({ verified: true });
