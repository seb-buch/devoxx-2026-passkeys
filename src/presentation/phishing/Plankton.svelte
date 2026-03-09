<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Plankton entre en scène</h2>
	<p>Plankton veut la recette du Pâté de Crabe.</p>
	<p>
		<strong>Sa stratégie : se faire passer pour KrabsVault et voler le mot de passe de Bob.</strong>
	</p>
	<p>
		krabsvau<strong>l</strong>t.com → krabsvau<strong>1</strong>t.com
	</p>
	<SpeakerNotes>
		Dans notre histoire, il y a un méchant : Plankton. Plankton veut la recette secrète du Pâté de
		Crabe, et il a un plan. Il va créer un faux site qui ressemble parfaitement à KrabsVault, mais
		avec une URL subtilement différente : krabsvau1t.com au lieu de krabsvault.com. Le "l" est
		remplacé par le chiffre "1". Difficile à voir, non ? C'est exactement ce que font les vrais
		attaquants.
	</SpeakerNotes>
</Slide>
