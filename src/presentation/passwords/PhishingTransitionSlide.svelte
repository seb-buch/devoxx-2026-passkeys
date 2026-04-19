<script lang="ts">
  import backgroundImage from '../assets/images/spongebob-time-card-background.jpeg';
  import Slide from '$lib/Slide.svelte';
  import Email from '../common/Email.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide {backgroundImage}>
  <div>
    <Email from="Clairement Mr Kbrabs (Pas Plankton)" to="Bob">
      <p>Salut Bob,</p>
      <p>
        Je suis en train de faire des tests sur <a href="https://krabsvau1t.com" target="phishing"
          >https://krabsvault.com</a
        > pour éviter que Plankton, qui est quand même très intelligent, ne s'empare de la recette.
      </p>
      <p>Connectes-toi dès maintenant pour vérifier que tout va bien.</p>
      <p>Mr Krabs (et certainement pas Plankton)</p>
    </Email>
  </div>
  <SpeakerNotes>
    <p>
      Pour illustrer cette sensibilité au phishing, voici un exemple de courriel de phishing qui
      pourrait être reçu par Bob. Et qui ressemble probablement à des mails que vous avez peut-être
      reçu dans le passé. Bob reçoit ce mail de Mr Krabs, même si on peut en douter en le lisant,
      mais bon c'est Bob! Donc il se sent obliger d'obéir et se rend sur le site du vault en
      cliquant sur le lien.
    </p>
  </SpeakerNotes>
</Slide>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1080px;
  }
</style>
