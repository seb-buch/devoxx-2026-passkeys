<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-register-options-simplewebauthn.ts?raw';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <h3>Avec <code>@simplewebauthn/server</code>&nbsp;: générer les options</h3>
  <Todo message="Changer code" />

  <Code language="typescript" fontSize="0.65em" lineNumbers={true}>
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Avec SimpleWebAuthn, on appelle <code>generateRegistrationOptions()</code>. La lib gère le
      challenge, le format, et les valeurs par défaut conformes à la spec. On stocke juste le
      challenge généré et on retourne les options.
    </p>
    <p>
      Le code est plus lisible, mais l'écart n'est pas encore dramatique. C'est sur la vérification
      que tout change.
    </p>
  </SpeakerNotes>
</Slide>
