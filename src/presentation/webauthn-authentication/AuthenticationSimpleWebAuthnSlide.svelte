<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/webauthn-get-simplewebauthn.js?raw';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <h3>Avec <code>@simplewebauthn/browser</code></h3>
  <Todo message="Changer le code" />

  <Code language="javascript" fontSize="0.6em" lineNumbers={true}>
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Même résultat qu'à l'enregistrement : SimpleWebAuthn économise quelques lignes côté client,
      mais l'écart avec le natif Level 3 est faible. <code>startAuthentication()</code> encapsule
      les trois étapes — parsing des options, appel <code>credentials.get()</code>, sérialisation —
      mais le navigateur ferait la même chose nativement.
    </p>
    <p>La vraie valeur ajoutée de la lib, c'est toujours côté serveur. Passons-y.</p>
  </SpeakerNotes>
</Slide>
