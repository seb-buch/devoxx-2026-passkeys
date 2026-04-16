<script lang="ts">
	import backgroundImage from '../assets/images/spongebob-time-card-background.jpeg';
	import Slide from '$lib/Slide.svelte';
	import Email from '../common/Email.svelte';
</script>

<Slide backgroundImage={backgroundImage}>
  <div>
  <Email from="Clairement Mr Kbrabs (Pas Plankton)" to="Bob">
    <p>Salut Bob,</p>
    <p>
      Je suis en train de faire des tests sur <a
      href="https://krabsvau1t.com"
      target="phishing">https://krabsvault.com</a
    > pour éviter que Plankton, qui est quand même très intelligent, ne s'empare de la recette.
    </p>
    <p>Connectes-toi dès maintenant pour vérifier que tout va bien.</p>
    <p>Mr Krabs (et certainement pas Plankton)</p>
  </Email>
  </div>
</Slide>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1080px;
  }
</style>
