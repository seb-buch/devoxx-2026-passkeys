<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Mr. Krabs dit "Plus jamais ça !"</h2>
	<p>Mr. Krabs décide de sécuriser KrabsVault avec des passkeys.</p>
	<p>
		<strong>Un mécanisme d'authentification résistant au phishing par conception.</strong>
	</p>
	<p>~~mot de passe~~ → 🔑 passkey</p>
	<SpeakerNotes>
		Quand Mr. Krabs apprend ce qui s'est passé, il voit rouge. Pas question que quelqu'un accède à
		sa précieuse recette de cette façon. Comme c'est lui qui développe l'application — il ne fait
		confiance à personne d'autre pour sécuriser sa recette — il décide d'ajouter un nouveau mode
		d'authentification : les passkeys. Un mécanisme qui est résistant au phishing non pas parce
		qu'on fait confiance à l'utilisateur pour vérifier l'URL, mais parce que le navigateur lui-même
		empêche l'attaque. Voyons comment ça fonctionne.
	</SpeakerNotes>
</Slide>
