<script lang="ts">
	import Slide from '$lib/Slide.svelte';
	import backgroundImage from './assets/images/The_Krusty_Krab_background.webp';
	import bob from './assets/images/spongebob_cook.webp';
	import patty from './assets/images/Krabby_Patty.webp';
	import krabs from './assets/images/mr-krabs.png';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide {backgroundImage}>
  <figure class="intro-blur">
    <img src={bob} alt="Bob" class="fragment"/>
    <img src={patty} alt="Patty" class="fragment"/>
    <img src={krabs} alt="Krabs" class="fragment"/>
  </figure>
  <SpeakerNotes>
    <p>
      Pour ceux qui ne connaissent pas Bikini Bottom, le restaurant le plus populaire du coin,
      c'est le Crabe Croustillant.<br />
      C'est Bob le cuisinier, et la spécialité, c'est le pâté de crabe dont la recette est un secret
      jalousement gardé.<br />
      D'ailleurs M. Krabs, le patron, est tellement paranoïaque qu'il a développé une application sécurisée
      pour stocker cette recette.<br />
      Et, évidemment, pour y accéder, chaque employé doit se connecter avec un mot de passe.
    </p>
  </SpeakerNotes>
</Slide>

<style>
 figure {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
   height: 1000px;


   img {
     display: inline-flex;
     width: 600px;
     height: fit-content;
   }


 }
</style>
