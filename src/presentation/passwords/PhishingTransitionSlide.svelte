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
      A priori, rien de suspect dans cet email... Enfin, c'est ce que se dit Bob.<br />
      Parce que si on regarde, il y a des choses un peu suspectes quand même.<br />
      Mais bon, c'est Bob. Il fait confiance, il clique, il tombe sur un site qui ressemble trait pour
      trait à KrabsVault, et il entre son mot de passe.<br />
      Et voilà, Plankton a maintenant le mot de passe de Bob. C'est aussi simple que ça.<br />
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
