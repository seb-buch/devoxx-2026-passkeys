<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
	import robot from '../assets/images/bot-sick.png';
</script>

<Slide>
  <h3>Authentification par mots de passe&nbsp;: les faiblesses</h3>
  <VerticalSpacer height="5em" />
  <ul>
    <li class="fragment">Mots de passe faibles ou réutilisés</li>
    <li class="fragment">Secret partagé &equals; surface d'attaque double</li>
    <li class="fragment">Vulnérabilité au phishing</li>
  </ul>
  <img src={robot} alt="Robot malade" class="robot"/>
  <SpeakerNotes>
    Les mots de passe, on connaît les problèmes. Premièrement, les utilisateurs choisissent des mots
    de passe faibles ou les réutilisent partout. Deuxièmement, côté serveur, les bases peuvent
    fuiter — et même avec du hashing, c'est un risque. Troisièmement — et c'est celui qui nous
    intéresse le plus aujourd'hui — le phishing. Le mot de passe est un secret que l'utilisateur
    connaît, donc on peut le lui soutirer en le trompant. Le problème fondamental, c'est que le mot
    de passe est un secret partagé : il existe des deux côtés, et il peut être intercepté pendant le
    transit.
  </SpeakerNotes>
</Slide>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    font-size: 1.2em;
  }

  ul li::before,
  ul li::marker {
    display: none;
    content: none;
  }
  .robot {
    width: 100%;
    max-width: 300px;
    margin: 2em auto 0;
    display: block;
  }
</style>
