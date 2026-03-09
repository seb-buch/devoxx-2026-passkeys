<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import bob from '../assets/images/spongebob.png';
	import krustyKrab from '../assets/images/krusty-krab.png';
	import krabbyPatty from '../assets/images/Krabby_Patty.webp';

	import './bob.css';
	import Todo from '../Todo.svelte';
</script>

<Slide>
	<Todo/>
	<div class="narrative-intro-container">
		<div>
			<img class="bob" src={bob} alt="Bob" />
			<img class="krusty-krab" src={krustyKrab} alt="Krusty Krab" />
		</div>
		<img class="krabby-patty" src={krabbyPatty} alt="Krabby Patty" />
	</div>
<!--	<h2>Bob a un secret à protéger</h2>-->
<!--	<p>Bob est cuisinier au Crabe Croustillant, à Bikini Bottom.</p>-->
<!--	<p><strong>Sa spécialité : le Pâté de Crabe. La recette est un SECRET.</strong></p>-->
<!--	<p>🦀 <em>KrabsVault</em> — le coffre-fort numérique de Mr. Krabs</p>-->

	<SpeakerNotes>
		Voici Bob!<br/>
		Bob est cuisinier dans un restaurant, le "crabe croustillant", dirigé par Mr Krabs.<br/>
		Et la spécialité de ce restaurant est le Pâté de Crabe.<br/>
		La recette de ce pâté de crabe est ultra-secrète, et pour la protéger, Mr. Krabs a développé une application web: KrabsVault.<br/>C'est plus moderne et plus sécurisé qu'une feuille de papier planquée dans un
		coffre.<br/>
	</SpeakerNotes>
</Slide>
