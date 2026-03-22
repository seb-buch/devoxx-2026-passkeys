<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-auth-options-simplewebauthn.ts?raw';
</script>

<Slide>
  <h3>Avec <code>@simplewebauthn/server</code>&nbsp;: générer les options</h3>

  <Code language="typescript" fontSize="0.6em" lineNumbers="1,2|9-16|18,20">
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Avec SimpleWebAuthn, <code>generateAuthenticationOptions()</code> gère le challenge et la
      sérialisation. Le code est plus lisible, l'écart reste limité. Mais comme pour l'enregistrement, le
      bénéfice devient écrasant à l'étape suivante.
    </p>
  </SpeakerNotes>
</Slide>
