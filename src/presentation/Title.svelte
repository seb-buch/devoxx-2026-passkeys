<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide backgroundImage="/devoxx/bg-image7.jpg" backgroundSize="cover">
  <div class="devoxx-title-slide">
    <div class="title-content">
      <p class="theme-label">Passkeys</p>
      <h1 class="title-heading">ADIEU LES MOTS DE PASSE, BONJOUR LA SÉCURITÉ SANS FRICTION !</h1>
      <p class="speaker">Sébastien Buchoux</p>
      <p class="event">DEVOXX FRANCE 2026</p>
    </div>
  </div>
  <SpeakerNotes>
    Bonjour à toutes et tous ! Merci pour l'introduction. Effectivement, on va passer la prochaine
    demi-heure à parler d'une méthode d'authentification que vous avez sans doute déjà vu apparaître
    sur certains des sites que vous fréquentez. Il s'agit de l'authentification WebAuthn ou, pour
    simplifier, des passkeys. On va voir ensemble quelles sont les différences avec
    l'authentification par mot de passe, les détails techniques, mais aussi comment on peut mettre
    en place ce type d'authentification avec une application qui nous servira d'exemple tout au long
    de cette session.
  </SpeakerNotes>
</Slide>

<style>
  .devoxx-title-slide {
    display: flex;
    flex-direction: column;
    height: 1000px;
    justify-content: flex-end;
    background: linear-gradient(
      to top,
      rgba(48, 73, 54 ,0.9) 0%,
      rgba(48, 73, 54, 0.70) 50%,
      rgba(48, 73, 54, 0.30) 100%
    );
  }



  .title-content {
    padding: 0 2em 2.5em;
    text-align: left;
  }

  .theme-label {
    font-family: 'Conthrax', sans-serif;
    font-size: 2em;
    color: #ffffff;
    margin: 0 0 0.2em;
    letter-spacing: 0.05em;
  }

  .devoxx-title-slide .title-heading {
    font-family: 'Pirulen', sans-serif;
    font-size: 1.6em;
    color: #e7b127;
    text-transform: uppercase;
    line-height: 1.3;
    margin: 0 0 3em;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  .devoxx-title-slide .title-heading::after {
    display: none;
  }

  .speaker {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1em;
    color: #ffffff;
    margin: 0 0 0.2em;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-align: right;
  }

  .event {
    font-family: 'Conthrax', sans-serif;
    font-size: 0.8em;
    color: #ea7e14;
    margin: 0;
    letter-spacing: 0.08em;
    text-align: right;
  }
</style>
