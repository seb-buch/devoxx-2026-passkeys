<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import backgroundImage from '../assets/images/The_Krusty_Krab_background.webp';
  import bob from '../assets/images/spongebob_cook.webp';
  import patty from '../assets/images/Krabby_Patty.webp';
  import krabs from '../assets/images/mr-krabs.webp';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide {backgroundImage} backgroundSize="contain" backgroundColor="#55bbff">
  <div class="intro-blur">
    <img src={bob} alt="Bob" class="fragment" />
    <img src={patty} alt="Patty" class="fragment patty" />
    <img src={krabs} alt="Krabs" class="fragment" />
  </div>
  <SpeakerNotes>
    <p>
      Pour ceux qui ne connaissent pas Bikini Bottom, on y trouve un restaurant très populaire:
      c'est le Crabe Croustillant.<br />
      C'est Bob le cuisinier, et la spécialité, c'est le pâté de crabe dont la recette est un secret jalousement
      gardé.<br />
      D'ailleurs M. Krabs, le patron, est tellement paranoïaque qu'il a développé une application sécurisée
      pour stocker cette recette.<br />
      Et, évidemment, pour y accéder, chaque employé doit se connecter avec un mot de passe.<br />
    </p>
  </SpeakerNotes>
</Slide>

<style>
  div.intro-blur {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 1080px;

    img {
      display: inline-flex;
      width: 500px;
      height: fit-content;

      &.patty {
        width: 400px;
      }
    }
  }
</style>
