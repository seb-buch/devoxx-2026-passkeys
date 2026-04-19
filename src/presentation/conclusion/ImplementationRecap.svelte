<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
</script>

<Slide>
  <h3>Implémenter WebAuthn</h3>
  <VerticalSpacer height="3em"/>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>🌐 Navigateur</th>
        <th>🖥️ Serveur</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="label">API</td>
        <td><code>navigator.credentials</code></td>
        <td>Aucune spécification</td>
      </tr>
      <tr>
        <td class="label">Enregistrement</td>
        <td><code>credentials.create()</code></td>
        <td>Options + vérifier l'attestation</td>
      </tr>
      <tr>
        <td class="label">Authentification</td>
        <td><code>credentials.get()</code></td>
        <td>Challenge + vérifier l'assertion</td>
      </tr>
      <tr>
        <td class="label">Outillage</td>
        <td>Natif — rien à installer</td>
        <td>Bibliothèque indispensable</td>
      </tr>
    </tbody>
  </table>
  <SpeakerNotes>
    En résumé, côté navigateur, tout repose sur l'API Web Authentication — deux méthodes :
    navigator.credentials.create pour l'enregistrement et navigator.credentials.get pour
    l'authentification. C'est standardisé par le W3C, donc natif dans tous les navigateurs modernes.
    Côté serveur en revanche, WebAuthn ne définit rien. C'est à vous de gérer la génération des
    options, la vérification des attestations et des assertions. Et c'est là que les bibliothèques
    comme SimpleWebAuthn ou java-webauthn-server sont précieuses — elles gèrent toute la complexité
    cryptographique pour vous. En quelques appels de fonction, vous avez un flow fonctionnel, comme
    on l'a vu dans KrabsVault.
  </SpeakerNotes>
</Slide>

<style>
  table {
    box-shadow: none;
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
</style>
