<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import Email from '../common/Email.svelte';
</script>

<Slide>
	<h2>Le phishing&nbsp;: exemple</h2>
	<Email from="Mr Kbrabs" to="Bob">
		<p>Salut Bob,</p>
		<p>
			Je suis en train de faire des tests sur <a
				href="https://krabsvau1t.com"
				target="phishing-login">https://krabsvault.com</a
			>.
		</p>
		<p>Connectes-toi dès maintenant pour vérifier que tout va bien.</p>
		<p>Mr Krabs</p>
	</Email>
	<SpeakerNotes>TODO: Ecrire notes</SpeakerNotes>
</Slide>
