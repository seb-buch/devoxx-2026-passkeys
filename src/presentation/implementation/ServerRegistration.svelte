<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import Code from '$lib/Code.svelte';
</script>

<Slide>
	<h2>Code — Enregistrement côté serveur</h2>
	<Code language="typescript" fontSize="0.55em">
		{`// POST /api/auth/register/options
const options = await generateRegistrationOptions({
  rpName: 'KrabsVault',
  rpID: 'krabsvault.com',
  userID: isoUint8Array.fromUTF8String(user.id),
  userName: user.email,
  authenticatorSelection: {
    residentKey: 'preferred',
    userVerification: 'preferred',
  },
});

// Stocker le challenge en session pour vérification ultérieure
session.challenge = options.challenge;

return json(options);`}
	</Code>
	<SpeakerNotes>
		Côté serveur, la première étape de l'enregistrement consiste à générer les options. Avec
		SimpleWebAuthn, on appelle generateRegistrationOptions. On lui passe le nom et l'identifiant du
		Relying Party — c'est votre domaine — les informations sur l'utilisateur, et les préférences
		pour l'authenticator. Le challenge est généré automatiquement par la bibliothèque. On stocke ce
		challenge en session pour pouvoir le vérifier ensuite. Je vous montre ça en direct.
	</SpeakerNotes>
</Slide>
