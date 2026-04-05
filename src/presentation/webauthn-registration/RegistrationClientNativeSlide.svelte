<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/webauthn-create-naive.js?raw';
  import VerticalSpacer from '$lib/VerticalSpacer.svelte';
</script>

<Slide>
  <h3>Comment créer une <em>Passkey</em> avec l'API native</h3>

  <VerticalSpacer height="1em" />

  <Code language="javascript" fontSize="0.65em" lineNumbers="8-10|1,2|1,2,4-6|4-10|8-16|11-23">
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Voici l'API WebAuthn native telle qu'elle existe aujourd'hui en Level 3. C'est propre : deux
      appels fetch, une ligne pour créer la passkey.
    </p>
    <p>
      <code>parseCreationOptionsFromJSON()</code> gère automatiquement les conversions base64url →
      BufferSource pour le challenge et user.id. <code>toJSON()</code> fait l'inverse au retour. Ces deux
      méthodes sont Baseline 2025 — disponibles nativement depuis mars 2025 seulement.
    </p>
    <p>
      Côté client donc, le navigateur fournit une API de plus en plus complète. L'intérêt d'une
      librairie comme SimpleWebAuthn/browser existe, mais reste limité. Voyons ce que ça donne.
    </p>
  </SpeakerNotes>
</Slide>
