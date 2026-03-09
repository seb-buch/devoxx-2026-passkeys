<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Enregistrement d'une passkey — le flux</h2>
	<ol>
		<li>Le serveur génère un <strong>challenge</strong> + options (rpId, userId, algorithmes…)</li>
		<li>Le client appelle <code>navigator.credentials.create()</code></li>
		<li>L'authenticator demande une vérification locale (biométrie / PIN)</li>
		<li>L'authenticator génère une <strong>paire de clés</strong> et signe le challenge</li>
		<li>Le serveur reçoit la <strong>clé publique</strong>, vérifie la signature, et la stocke</li>
	</ol>
	<p>
		<strong
			>La clé privée ne quitte JAMAIS l'authenticator. Le serveur ne stocke que la clé publique.</strong
		>
	</p>
	<SpeakerNotes>
		Voyons le flux d'enregistrement, c'est-à-dire le moment où Bob crée sa passkey pour KrabsVault.
		Le serveur génère d'abord un challenge — une valeur aléatoire à usage unique — et l'envoie au
		navigateur avec des options comme l'identifiant du site et les algorithmes cryptographiques
		acceptés. Le navigateur appelle l'API WebAuthn, l'authenticator demande à Bob de poser son doigt
		ou de scanner son visage, puis il génère une paire de clés. La clé privée reste sur l'appareil
		de Bob, elle ne part jamais. La clé publique et le challenge signé sont renvoyés au serveur. Le
		serveur vérifie la signature, et s'il est convaincu, il stocke la clé publique. C'est tout. Le
		serveur n'a jamais vu la clé privée.
	</SpeakerNotes>
</Slide>
