<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import Code from '$lib/Code.svelte';
</script>

<Slide>
	<h2>Code — Authentification côté serveur</h2>
	<Code language="typescript" fontSize="0.55em">
		{`// POST /api/auth/login/options — générer le challenge
const options = await generateAuthenticationOptions({
  rpID: 'krabsvault.com',
  allowCredentials: userCredentials.map(c => ({ id: c.credentialID })),
});
session.challenge = options.challenge;

// POST /api/auth/login/verify — vérifier la réponse signée
const verification = await verifyAuthenticationResponse({
  response: body,
  expectedChallenge: session.challenge,
  expectedOrigin: 'https://krabsvault.com',
  expectedRPID: 'krabsvault.com',
  credential: {
    id: credential.credentialID,
    publicKey: credential.credentialPublicKey,
    counter: credential.counter,
  },
});`}
	</Code>
	<SpeakerNotes>
		Pour l'authentification, le principe est symétrique. Côté serveur, on génère un nouveau
		challenge avec generateAuthenticationOptions, en précisant les credentials autorisés pour
		l'utilisateur. Quand le navigateur renvoie la réponse signée, on appelle
		verifyAuthenticationResponse qui vérifie la signature avec la clé publique stockée, valide le
		challenge et l'origin, et vérifie que le compteur a bien progressé.
	</SpeakerNotes>
</Slide>
