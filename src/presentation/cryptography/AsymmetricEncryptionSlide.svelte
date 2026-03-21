<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h3>Cryptograhie assymétrique &ndash; Chiffrement</h3>
	<SpeakerNotes>
		Disons que Patrick veut envoyer un message à Patrick.
		Mais il veut que personne d'autre que Bob ne puisse le lire.
	  Dans ce cas il va utiliser la clé publique de Bob pour chiffrer le message.
		Comme, il n'y a que la clé privée de Bob qui peut déchiffrer le message,
		le message est sécurisé et personne ne peut le lire (même pas Patrick lui-même !).
		En revanche, Bob peut utiliser sa propre clé privée pour déchiffrer le message.
	</SpeakerNotes>
</Slide>
