<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import VerticalSpacer from '$lib/VerticalSpacer.svelte';
</script>

<Slide backgroundImage="/devoxx/bg-image11.jpg" backgroundSize="cover">
  <div class="thanks-overlay">
    <h1>Merci !</h1>
    <VerticalSpacer height="1em" />
    <h3>Questions ?</h3>
    <VerticalSpacer height="1em" />
    <p>Sébastien Buchoux</p>
    <p><em>[GitHub · LinkedIn · X/Twitter]</em></p>
    <p><em>[QR code vers le repo KrabsVault]</em></p>
  </div>
  <SpeakerNotes>
    Et voilà, c'est terminé ! Merci beaucoup pour votre attention. Si vous avez des questions, c'est
    le moment. N'hésitez pas à venir me voir après la session aussi, et à jeter un œil au repo pour
    expérimenter avec les passkeys par vous-mêmes. Merci !
  </SpeakerNotes>
</Slide>

<style>
  .thanks-overlay {
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
