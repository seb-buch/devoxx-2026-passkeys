import { startRegistration } from '@simplewebauthn/browser';

// 1. Récupérer les options depuis le serveur RP
const serverOptions = await fetch('/api/passkey/register-options').then((r) => r.json());

// 2. Conversion réponse JSON -> options de création passkey
// 3. Affiche l'UI de l'authenticator (Touch ID, Windows Hello, clé FIDO2...) pour créer la passkey
// 4. Conversion de la passkey -> JSON pour transmettre au serveur
/** @type {import('@simplewebauthn/browser').RegistrationResponseJSON} */
const credential = await startRegistration({ optionsJSON: serverOptions });

// 5. Envoi de la passkey au serveur
await fetch('/api/passkey/register-verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(credential)
});
