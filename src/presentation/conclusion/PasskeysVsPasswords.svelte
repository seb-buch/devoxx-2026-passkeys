<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
  <h2>Passkeys vs Mots de passe</h2>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>🔑 Passkeys</th>
        <th>🔤 Mots de passe</th>
      </tr>
    </thead>
    <tbody>
      <tr class="fragment">
        <td>Phishing</td>
        <td class="pro">Résistant par conception</td>
        <td class="con">Vulnérable</td>
      </tr>
      <tr class="fragment">
        <td>Secret partagé</td>
        <td class="pro">Non — clé privée locale</td>
        <td class="con">Oui — stocké sur le serveur</td>
      </tr>
      <tr class="fragment">
        <td>Réutilisation</td>
        <td class="pro">Impossible — unique par site</td>
        <td class="con">Fréquente en pratique</td>
      </tr>
      <tr class="fragment">
        <td>Portabilité</td>
        <td class="con">Liée à un écosystème</td>
        <td class="pro">Universelle</td>
      </tr>
      <tr class="fragment">
        <td>Récupération</td>
        <td class="con">Complexe (perte d'appareils)</td>
        <td class="pro">Email / SMS / support</td>
      </tr>
    </tbody>
  </table>
  <p class="fragment conclusion">
    <strong>Les passkeys ne remplacent pas les mots de passe — elles les complètent.</strong>
  </p>
  <SpeakerNotes>
    Ce tableau résume bien la situation. Les passkeys règlent les vrais problèmes de sécurité : pas
    de phishing possible puisque le navigateur vérifie l'origin, pas de secret partagé à voler côté
    serveur, et pas de réutilisation entre sites. Mais les mots de passe gardent des avantages
    concrets : ils fonctionnent partout, la récupération de compte est simple, et surtout, pour
    enregistrer une passkey, il faut d'abord être connecté — souvent avec un mot de passe. C'est le
    problème de l'œuf et la poule. Donc ma conclusion est pragmatique : proposez les passkeys comme
    méthode d'authentification principale pour la sécurité et le confort, mais gardez le mot de
    passe comme méthode de repli. C'est exactement ce que fait KrabsVault, et c'est ce que je vous
    encourage à faire dans vos applications.
  </SpeakerNotes>
</Slide>

<style>
  .pro {
    color: var(--sea-green, #007a6a);
  }

  .con {
    color: var(--danger-red, #c0392b);
  }

  .conclusion {
    margin-top: 0.8em;
    font-size: 0.95em;
  }
</style>
