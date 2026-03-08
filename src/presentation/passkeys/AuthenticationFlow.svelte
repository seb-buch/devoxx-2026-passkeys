<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Authentification par passkey — le flux</h2>
	<ol>
		<li>Le serveur génère un nouveau <strong>challenge</strong></li>
		<li>Le client appelle <code>navigator.credentials.get()</code></li>
		<li>L'authenticator vérifie l'utilisateur localement (biométrie / PIN)</li>
		<li>L'authenticator <strong>signe</strong> le challenge avec la clé privée</li>
		<li>Le serveur <strong>vérifie</strong> la signature avec la clé publique → authentification réussie</li>
	</ol>
	<p><strong>Aucun secret ne transite sur le réseau. Seule une signature (preuve cryptographique) est envoyée.</strong></p>
	<SpeakerNotes>
		Pour l'authentification, c'est le même principe. Le serveur envoie un nouveau challenge. Le
		navigateur sollicite l'authenticator, Bob valide avec sa biométrie, et l'authenticator signe le
		challenge avec la clé privée. Le serveur reçoit cette signature et la vérifie avec la clé
		publique qu'il avait stockée à l'enregistrement. Si la signature est valide, Bob est
		authentifié. Le point crucial : aucun secret ne transite sur le réseau. On n'envoie qu'une
		signature, c'est-à-dire une preuve cryptographique. Même si quelqu'un intercepte cette
		signature, elle ne sert à rien : le challenge est à usage unique, donc la signature ne peut pas
		être rejouée.
	</SpeakerNotes>
</Slide>
