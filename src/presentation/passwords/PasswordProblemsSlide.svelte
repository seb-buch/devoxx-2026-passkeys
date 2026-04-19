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
    <li class="fragment">Vulnérabilité au phishing</li>
    <li class="fragment">Mots de passe faibles ou réutilisés</li>
    <li class="fragment">Secret partagé &equals; surface d'attaque double</li>
  </ul>
  <img src={robot} alt="Robot malade" class="robot" />
  <SpeakerNotes>
    <p>
      La sensibilité au phishing, c'est une faiblesse bien connue de l'authentification par mot de
      passe. On vient de le voir : rien dans le mécanisme du mot de passe ne permet de vérifier
      qu'on parle bien au bon serveur. Bob n'avait aucun moyen de savoir qu'il n'était pas sur le
      vrai KrabsVault.<br />
      Mais ce n'est pas la seule faiblesse des mots de passe...<br />
      Beaucoup de gens utilisent un mot de passe simple à deviner, quand ils ne réutilisent pas le même
      partout. Et là, une seule fuite suffit pour compromettre tous les comptes.<br />
      Enfin, un mot de passe reste un secret partagé : il transite sur le réseau et il est stocké côté
      serveur. Ça double la surface d'attaque — on peut le voler en chemin ou directement dans la base
      de données.<br />
      Face à tout ça, on peut se poser la question : est-ce qu'on peut s'authentifier autrement, sans
      mot de passe ?
    </p>
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
