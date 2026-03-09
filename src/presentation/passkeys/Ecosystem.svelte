<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>L'écosystème — FIDO2, WebAuthn, CTAP</h2>
	<ul>
		<li>
			<strong>FIDO2</strong> — la norme globale (FIDO Alliance)
			<ul>
				<li><strong>WebAuthn</strong> (W3C) — API JavaScript côté navigateur</li>
				<li><strong>CTAP</strong> — communication navigateur ↔ authenticator</li>
			</ul>
		</li>
	</ul>
	<p><em>Aujourd'hui : focus sur WebAuthn, la partie que vous implémenterez dans vos apps.</em></p>
	<SpeakerNotes>
		Avant de plonger dans le code, situons les différents termes que vous allez rencontrer. FIDO2,
		c'est la norme chapeau, portée par la FIDO Alliance — un consortium industriel. FIDO2 se
		décompose en deux parties. WebAuthn, c'est le standard W3C qui définit l'API JavaScript que
		votre application web va appeler. CTAP, c'est le protocole qui gère la communication entre le
		navigateur et l'authenticator — que ce soit le lecteur d'empreinte de votre laptop, Face ID sur
		votre téléphone, ou une clé de sécurité USB. Aujourd'hui, on va se concentrer sur la partie
		WebAuthn, celle qui vous concerne en tant que développeurs d'applications.
	</SpeakerNotes>
</Slide>
