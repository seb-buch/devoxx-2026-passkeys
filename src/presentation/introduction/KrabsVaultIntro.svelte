<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import logo from '../assets/images/krabsvault-logo.png';
</script>

<Slide>
	<h2>KrabsVault</h2>
	<figure>
		<img src={logo} alt="KrabsVault logo" />
	</figure>
	<p>Application <b>Coffre-fort</b> pour sécuriser la recette du Pâté de Crabe :</p>
	<ul>
		<li>Accès sécurisé par <b>HTTPS</b></li>
		<li>Authentification par <b>mot de passe</b></li>
		<li>Stockage sécurisé des mots de passe (<i>hashage + salage</i>)</li>
	</ul>
	<SpeakerNotes>
		Pour sécuriser la recette du pâté de crabe, Mr Krabs a développé une application de type "coffre-fort" : KrabsVault!<br/>
		Évidemment, Mr Krabs a bien sécurisé son application avec HTTPS et un mot de passe.<br/>
		Et, le stockage des mots de passe est sécurisé grâce à un <i>hashage</i> et à un <i>salage</i>.
	</SpeakerNotes>
</Slide>
