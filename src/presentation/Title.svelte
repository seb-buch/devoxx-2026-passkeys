<script>
  import Slide from '$lib/Slide.svelte';
  import VerticalSpacer from '$lib/VerticalSpacer.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide backgroundImage="/devoxx/bg-image7.jpg" backgroundSize="cover">
  <div class="title-overlay">
    <h1>Passkeys : Adieu les mots de passe, bonjour la sécurité sans friction !</h1>
    <VerticalSpacer height="1em" />
    <h3>Sébastien Buchoux</h3>
    <p>Devoxx France 2026</p>
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
  .title-overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.3) 60%,
      transparent 100%
    );
    padding: 2em 1.5em 1.5em;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
  }
</style>
