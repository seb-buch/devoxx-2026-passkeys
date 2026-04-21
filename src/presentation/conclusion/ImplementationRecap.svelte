<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
</script>

<Slide>
  <h3>Implémenter WebAuthn</h3>
  <VerticalSpacer height="3em" />
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
        <td>Aucune API standard</td>
      </tr>
      <tr>
        <td class="label">Enregistrement</td>
        <td><code>credentials.create()</code></td>
        <td>Options + enregistrement passkey</td>
      </tr>
      <tr>
        <td class="label">Authentification</td>
        <td><code>credentials.get()</code></td>
        <td>Challenge + vérification signature</td>
      </tr>
      <tr>
        <td class="label">Outillage</td>
        <td>Natif</td>
        <td>Bibliothèque recommandée</td>
      </tr>
    </tbody>
  </table>
  <SpeakerNotes>
    En résumé, côté navigateur, tout repose sur l'API Web Authentication — deux méthodes :
    <code>navigator.credentials.create</code> pour l'enregistrement et
    <code>navigator.credentials.get</code> pour l'authentification. C'est standardisé par le W3C,
    donc natif dans tous les navigateurs modernes.<br />
    Côté serveur en revanche, WebAuthn définit le <em>protocole</em> — les formats d'échange et
    les algorithmes de vérification — mais <em>pas d'API</em>. À vous de générer les options,
    vérifier la réponse selon les sections 7.1 et 7.2 de la spec, et stocker la passkey. Et c'est
    précisément là que les bibliothèques comme SimpleWebAuthn ou java-webauthn-server sont
    précieuses : elles encapsulent toute la complexité cryptographique et les vérifications
    imposées par la spec. En quelques appels de fonction, vous avez un flow conforme, comme on l'a
    vu dans KrabsVault.
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
