// 1. Récupérer les options depuis le serveur RP
const serverOptions = await fetch('/api/passkey/register-options').then((r) => r.json());

// 2. Conversion réponse JSON -> options de création passkey
/** @type {PublicKeyCredentialCreationOptions} */
const creationOptions = PublicKeyCredential.parseCreationOptionsFromJSON(serverOptions); // Baseline 2025

// 3. Affiche l'UI de l'authenticator (Touch ID, Windows Hello, clé FIDO2...) pour créer la passkey
/** @type {Credential|null} */
const credential = await navigator.credentials.create({ publicKey: creationOptions });

// 4. Conversion de la passkey -> JSON pour transmettre au serveur
if (!credential) throw new Error('Création annulée');
if (!(credential instanceof PublicKeyCredential)) throw new Error('Type de credential invalide');
/** @type {PublicKeyCredentialJSON} */
const passkey = credential.toJSON(); // Baseline 2025

// 5. Envoi de la passkey au serveur
await fetch('/api/passkey/register-verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(passkey)
});
