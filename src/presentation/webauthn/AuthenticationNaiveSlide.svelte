<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/webauthn-get-naive.js?raw';
</script>

<Slide>
  <h3>Avec API WebAuthn&nbsp;: <code>navigator.credentials.get()</code></h3>

  <Code language="javascript" fontSize="0.55em" lineNumbers="9-11|1,2|1,2,4-7|4-11|9-17|13-24">
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Côté client, l'authentification est symétrique à l'enregistrement.
      <code>parseRequestOptionsFromJSON()</code> gère les conversions base64url → BufferSource pour
      le challenge et les <code>allowCredentials</code>. <code>toJSON()</code> fait l'inverse au
      retour.
    </p>
    <p>
      Même constat qu'à l'enregistrement : l'API native Level 3 est propre et suffisante. La valeur
      d'une lib côté client reste modeste. Voyons ce que ça donne avec SimpleWebAuthn.
    </p>
  </SpeakerNotes>
</Slide>
