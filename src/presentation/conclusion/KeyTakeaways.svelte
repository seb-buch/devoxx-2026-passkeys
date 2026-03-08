<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Ce qu'il faut retenir</h2>
	<ol>
		<li>Une passkey = une paire de clés asymétriques. Pas de secret partagé.</li>
		<li>Le navigateur vérifie l'origin → résistance au phishing par conception.</li>
		<li>L'implémentation est accessible avec des bibliothèques comme SimpleWebAuthn.</li>
		<li>Proposez les passkeys en complément, pas (encore) en remplacement total des mots de passe.</li>
	</ol>
	<SpeakerNotes>
		Si vous ne devez retenir que quatre choses de cette présentation, les voici. Une passkey, c'est
		de la crypto asymétrique — pas de secret partagé, donc rien à voler côté serveur. Le navigateur
		vérifie le domaine, ce qui rend le phishing impossible par conception. Avec des bibliothèques
		comme SimpleWebAuthn, l'implémentation est accessible — on l'a vu, ce n'est pas des milliers de
		lignes de code. Et enfin, les passkeys complètent les mots de passe, elles ne les remplacent
		pas — en tout cas pas encore.
	</SpeakerNotes>
</Slide>
