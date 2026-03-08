<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import Code from '$lib/Code.svelte';
</script>

<Slide>
	<h2>Code — Authentification côté client</h2>
	<Code language="typescript" fontSize="0.55em">
		{`// 1. Récupérer les options depuis le serveur
const optionsJSON = await fetch('/api/auth/login/options')
  .then(r => r.json());

// 2. Déclencher le prompt biométrique
//    (appelle navigator.credentials.get() sous le capot)
const response = await startAuthentication({ optionsJSON });

// 3. Envoyer la réponse signée au serveur
await fetch('/api/auth/login/verify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(response),
});`}
	</Code>
	<SpeakerNotes>
		Côté client, même pattern que pour l'enregistrement. On récupère les options, on appelle
		startAuthentication — qui déclenche navigator.credentials.get() sous le capot — l'utilisateur
		valide avec sa biométrie, et on envoie la réponse signée au serveur. Trois étapes, quelques
		lignes de code. SimpleWebAuthn abstrait toute la complexité de la sérialisation et du
		formatting WebAuthn.
	</SpeakerNotes>
</Slide>
