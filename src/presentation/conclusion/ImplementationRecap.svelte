<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
  <h2>Implémenter WebAuthn</h2>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Côté navigateur</th>
        <th>Côté serveur</th>
      </tr>
    </thead>
    <tbody>
      <tr class="fragment">
        <td><strong>API</strong></td>
        <td>Web Authentication API<br /><code>navigator.credentials</code></td>
        <td>Aucune spécification</td>
      </tr>
      <tr class="fragment">
        <td><strong>Enregistrement</strong></td>
        <td><code>navigator.credentials.create()</code></td>
        <td>Générer les options + vérifier l'attestation</td>
      </tr>
      <tr class="fragment">
        <td><strong>Authentification</strong></td>
        <td><code>navigator.credentials.get()</code></td>
        <td>Générer le challenge + vérifier l'assertion</td>
      </tr>
      <tr class="fragment">
        <td><strong>Outillage</strong></td>
        <td>Natif (navigateur)</td>
        <td>Bibliothèque indispensable<br />(ex. SimpleWebAuthn, java-webauthn-server…)</td>
      </tr>
    </tbody>
  </table>
  <SpeakerNotes>
    En résumé, côté navigateur, tout repose sur l'API Web Authentication — deux méthodes :
    navigator.credentials.create pour l'enregistrement et navigator.credentials.get pour
    l'authentification. C'est standardisé par le W3C, donc natif dans tous les navigateurs modernes.
    Côté serveur en revanche, WebAuthn ne définit rien. C'est à vous de gérer la génération des
    options, la vérification des attestations et des assertions. Et c'est là que les bibliothèques
    comme SimpleWebAuthn ou java-webauthn-server sont précieuses — elles gèrent toute la
    complexité cryptographique pour vous. En quelques appels de fonction, vous avez un flow
    fonctionnel, comme on l'a vu dans KrabsVault.
  </SpeakerNotes>
</Slide>
