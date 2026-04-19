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
  <img src={robot} alt="Robot malade" class="robot" />
  <SpeakerNotes>
    Les mots de passe, c'est très pratique et on en utilise partout, mais ce n'est pas parfait!<br
    />
    Tout d'abord, beaucoup de gens utilise un mot de passe très simple à cracker... Quand il n'utilise
    pas le même mot de passe partout!<br />
    Ensuite, un mot de passe cela reste un secret que l'on partage typiquement avec un serveur en passant
    par internet. Et, partager un secret c'est toujours s'exposer à ce qu'il soit intercepter par quelqu'un
    de malveillant.<br />
    Enfin, un mot de passe ne propose aucune sécurité permettant d'authentifier le service avec qui on
    le partage, ce qui ouvre la porte au phishing.
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
