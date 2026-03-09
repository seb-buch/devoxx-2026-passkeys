<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>C'est quoi une passkey ?</h2>
	<p>
		Une passkey est un credential FIDO2 basé sur la cryptographie asymétrique, géré par le
		navigateur et l'OS, qui remplace le mot de passe.
	</p>
	<ul>
		<li>🔐 Pas de secret partagé — rien à voler côté serveur</li>
		<li>🌐 Liée à l'origine (domaine) — impossible à phisher</li>
		<li>👆 Validation biométrique ou PIN local — simple pour l'utilisateur</li>
	</ul>
	<SpeakerNotes>
		Alors, c'est quoi une passkey ? En termes simples, c'est un moyen de se connecter qui repose sur
		la cryptographie asymétrique au lieu d'un secret partagé. Le serveur ne stocke jamais votre
		secret. La passkey est liée au domaine du site, donc le navigateur refuse de l'utiliser sur un
		faux domaine. Et pour l'utilisateur, c'est plus simple : pas de mot de passe à retenir, juste
		une empreinte digitale, un scan facial ou un code PIN local. Mais pour comprendre comment ça
		marche en détail, il faut d'abord parler un peu de cryptographie.
	</SpeakerNotes>
</Slide>
