<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>🎬 DÉMO</h2>
	<h3>Phishing en action</h3>
	<p>Plankton piège Bob avec un faux email et un faux site</p>
	<SpeakerNotes>
		On va voir ça concrètement. Je vais d'abord vous montrer le faux email que Plankton a envoyé à
		Bob. (Démo live : affichage du faux email avec le lien piégé. Clic sur le lien. Arrivée sur
		krabsvau1t.com. Saisie du mot de passe. Récupération du mot de passe côté Plankton. Connexion
		réussie de Plankton au vrai site avec le mot de passe volé.) Vous voyez le problème : Bob n'a
		rien remarqué, et Plankton a maintenant accès à la recette.
	</SpeakerNotes>
</Slide>
