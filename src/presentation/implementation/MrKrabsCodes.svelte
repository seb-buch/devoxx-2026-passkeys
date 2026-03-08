<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Mr. Krabs implémente les passkeys dans KrabsVault</h2>
	<ul>
		<li><strong>SvelteKit</strong> (TypeScript) — fullstack</li>
		<li><strong>Bun</strong> — runtime</li>
		<li><strong>SimpleWebAuthn</strong> — bibliothèque côté client ET serveur</li>
	</ul>
	<SpeakerNotes>
		Mr. Krabs retrousse ses manches et se met au code. L'application KrabsVault est développée en
		TypeScript avec SvelteKit pour le fullstack, servie par Bun en runtime. Pour l'implémentation
		WebAuthn, il utilise SimpleWebAuthn, une bibliothèque qui fournit des helpers côté serveur et
		côté client pour simplifier les appels WebAuthn. Voyons à quoi ressemble le code.
	</SpeakerNotes>
</Slide>
