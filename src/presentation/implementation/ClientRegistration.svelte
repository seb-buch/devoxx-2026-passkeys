<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import Code from '$lib/Code.svelte';
</script>

<Slide>
	<h2>Code — Enregistrement côté client</h2>
	<Code language="typescript" fontSize="0.55em">
		{`// 1. Récupérer les options depuis le serveur
const optionsJSON = await fetch('/api/auth/register/options')
  .then(r => r.json());

// 2. Déclencher le prompt biométrique
//    (appelle navigator.credentials.create() sous le capot)
const response = await startRegistration({ optionsJSON });

// 3. Envoyer la réponse au serveur pour vérification
await fetch('/api/auth/register/verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(response),
});`}
	</Code>
	<SpeakerNotes>
		Côté client, c'est encore plus simple. On récupère les options d'enregistrement depuis le
		serveur, puis on appelle startRegistration de SimpleWebAuthn. Sous le capot, cette fonction
		appelle navigator.credentials.create(), ce qui déclenche le prompt biométrique du navigateur.
		Une fois que l'utilisateur a validé, on récupère la réponse et on l'envoie au serveur pour
		vérification et stockage de la clé publique.
	</SpeakerNotes>
</Slide>
