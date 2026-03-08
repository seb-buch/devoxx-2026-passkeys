<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Authentification par mot de passe — comment ça marche</h2>
	<ol>
		<li>L'utilisateur saisit identifiant + mot de passe</li>
		<li>Le client envoie les credentials au serveur (<code>POST /login</code>)</li>
		<li>Le serveur compare le hash du mot de passe avec le hash stocké en base</li>
		<li>Si match → session créée (cookie / token JWT)</li>
	</ol>
	<p><em>Navigateur → Serveur → Base de données</em></p>
	<p><strong>Le secret (mot de passe) est partagé entre l'utilisateur et le serveur.</strong></p>
	<SpeakerNotes>
		Quand Bob se connecte, voici ce qui se passe : le navigateur envoie son identifiant et son mot
		de passe au serveur. Le serveur, lui, a stocké un hash de ce mot de passe. Il compare les deux,
		et si ça correspond, il crée une session. C'est le modèle qu'on utilise depuis des décennies.
		Le point fondamental ici, c'est que le secret — le mot de passe — est un secret partagé. Le
		serveur en a une copie, l'utilisateur en a une copie dans sa tête. Et c'est précisément là que
		les problèmes commencent.
	</SpeakerNotes>
</Slide>
