import { startAuthentication } from '@simplewebauthn/browser';

// 1. Récupérer les options depuis le serveur RP
const serverOptions = await fetch(
  `/api/passkey/auth-options?username=${encodeURIComponent(username)}`
).then((r) => r.json());

// 2. Affiche l'UI de l'authenticator (Touch ID, Windows Hello, clé FIDO2...)
// 3. Conversion de l'assertion -> JSON pour transmettre au serveur
/** @type {import('@simplewebauthn/browser').AuthenticationResponseJSON} */
const assertion = await startAuthentication({ optionsJSON: serverOptions.options });

// 4. Envoi de l'assertion au serveur
await fetch('/api/passkey/auth-verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, response: assertion })
});
