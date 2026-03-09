<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import Code from '$lib/Code.svelte';
</script>

<Slide>
	<h2>Code — Vérification de l'enregistrement côté serveur</h2>
	<Code language="typescript" fontSize="0.55em">
		{`// POST /api/auth/register/verify
const verification = await verifyRegistrationResponse({
  response: body,
  expectedChallenge: session.challenge,
  expectedOrigin: 'https://krabsvault.com',
  expectedRPID: 'krabsvault.com',
});

if (verification.verified) {
  const { credentialPublicKey, credentialID, counter } =
    verification.registrationInfo!;

  // Stocker en base de données
  await db.credential.create({
    data: { credentialPublicKey, credentialID, counter, userId: user.id }
  });
}`}
	</Code>
	<SpeakerNotes>
		De retour côté serveur, on vérifie la réponse d'enregistrement. SimpleWebAuthn vérifie
		automatiquement que le challenge correspond, que l'origin est la bonne, et que l'attestation est
		valide. Si tout est bon, on extrait la clé publique, l'identifiant du credential et le compteur,
		et on les stocke en base de données. Le compteur est un mécanisme anti-clonage : il s'incrémente
		à chaque utilisation, et le serveur peut détecter une anomalie si le compteur recule.
	</SpeakerNotes>
</Slide>
