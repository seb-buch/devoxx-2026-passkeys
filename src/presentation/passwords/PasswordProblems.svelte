<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Les problèmes des mots de passe</h2>
	<ul>
		<li>🧠 Mots de passe faibles ou réutilisés — l'humain est le maillon faible</li>
		<li>💾 Fuite de bases de données — le serveur stocke les secrets</li>
		<li>🎣 Phishing — le mot de passe peut être volé en trompant l'utilisateur</li>
		<li>🔑 Secret partagé = surface d'attaque double (côté client <strong>ET</strong> serveur)</li>
	</ul>
	<SpeakerNotes>
		Les mots de passe, on connaît les problèmes. Premièrement, les utilisateurs choisissent des
		mots de passe faibles ou les réutilisent partout. Deuxièmement, côté serveur, les bases peuvent
		fuiter — et même avec du hashing, c'est un risque. Troisièmement — et c'est celui qui nous
		intéresse le plus aujourd'hui — le phishing. Le mot de passe est un secret que l'utilisateur
		connaît, donc on peut le lui soutirer en le trompant. Le problème fondamental, c'est que le mot
		de passe est un secret partagé : il existe des deux côtés, et il peut être intercepté pendant
		le transit.
	</SpeakerNotes>
</Slide>
