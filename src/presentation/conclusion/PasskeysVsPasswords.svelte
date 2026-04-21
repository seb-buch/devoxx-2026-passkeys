<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
</script>

<Slide>
  <h3>Passkeys vs Mots de passe</h3>
  <VerticalSpacer height="2em" />
  <table>
    <thead>
      <tr>
        <th></th>
        <th>🔑 Passkeys</th>
        <th>🔤 Mots de passe</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="label">Phishing</td>
        <td class="pro">Résistant par conception</td>
        <td class="con">Vulnérable</td>
      </tr>
      <tr>
        <td class="label">Secret partagé</td>
        <td class="pro">Non — clé privée locale</td>
        <td class="con">Oui — stocké sur le serveur</td>
      </tr>
      <tr>
        <td class="label">Réutilisation</td>
        <td class="pro">Impossible — unique par site</td>
        <td class="con">Fréquente en pratique</td>
      </tr>
      <tr>
        <td class="label">Portabilité</td>
        <td class="con">Liée à un écosystème</td>
        <td class="pro">Universelle</td>
      </tr>
      <tr>
        <td class="label">Récupération</td>
        <td class="con">Complexe (perte d'appareils)</td>
        <td class="pro">Email / SMS / support</td>
      </tr>
    </tbody>
  </table>
  <p class="conclusion fragment">
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
  table {
    box-shadow: none;
    text-align: center;
  }

  th {
    background: transparent;
    color: var(--r-heading-color);
    border-bottom: 2px solid var(--dvx-orange);
  }

  td {
    background: transparent !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  tr:hover td {
    background: transparent !important;
  }

  .label {
    font-weight: 700;
    color: var(--ocean-deep);
  }

  .pro {
    color: var(--sea-green);
  }

  .con {
    color: var(--danger-red);
  }

  .conclusion {
    margin-top: 2em;
    font-size: 1.2em;
  }
</style>
