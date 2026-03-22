// 1. Récupérer les options depuis le serveur RP
const serverOptions = await fetch(
  `/api/passkey/auth-options?username=${encodeURIComponent(username)}`
).then((r) => r.json());

// 2. Conversion réponse JSON -> options d'authentification
// PublicKeyCredential.parseRequestOptionsFromJSON() => Baseline 2025
/** @type {PublicKeyCredentialRequestOptions} */
const requestOptions = PublicKeyCredential.parseRequestOptionsFromJSON(serverOptions.options);

// 3. Affiche l'UI de l'authenticator (Touch ID, Windows Hello, clé FIDO2...)
/** @type {Credential|null} */
const credential = await navigator.credentials.get({ publicKey: requestOptions });

// 4. Conversion de l'assertion -> JSON pour transmettre au serveur
// PublicKeyCredentialJSON.toJSON() => Baseline 2025
if (!credential) throw new Error('Authentification annulée');
if (!(credential instanceof PublicKeyCredential)) throw new Error('Type de credential invalide');
/** @type {PublicKeyCredentialJSON} */
const assertion = credential.toJSON();

// 5. Envoi de l'assertion au serveur
await fetch('/api/passkey/auth-verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, response: assertion })
});
