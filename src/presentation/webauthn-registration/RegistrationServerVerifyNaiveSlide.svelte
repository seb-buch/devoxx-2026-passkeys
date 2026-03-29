<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-register-verify-naive.ts?raw';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <h3>Sans librairie&nbsp;: vérifier l'enregistrement côté serveur</h3>
  <Todo message="Changer code" />

  <Code language="typescript" fontSize="0.42em" lineNumbers={true}>
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Et voilà le vrai problème. La réponse de l'authenticator contient un
      <code>attestationObject</code> encodé en <strong>CBOR</strong> — pas en JSON. Il faut une dépendance
      tierce juste pour le décoder.
    </p>
    <p>
      L'<code>authData</code> est une structure binaire qu'on parse byte par byte : rpIdHash sur 32 octets,
      flags sur 1 octet, signCount sur 4 octets big-endian, AAGUID sur 16 octets, credentialId de longueur
      variable...
    </p>
    <p>
      Ensuite la clé publique est encodée en <strong>COSE</strong> — CBOR encore — avec une map de
      paramètres cryptographiques. Et on n'a géré ici que le format ES256. Les autres formats
      d'attestation (<code>packed</code>, <code>tpm</code>, <code>android-key</code>,
      <code>apple</code>...) ont chacun leur propre logique de vérification.
    </p>
    <p>
      C'est la spec WebAuthn — correcte, mais dense. Et c'est exactement pour ça qu'une lib côté
      serveur a beaucoup plus de valeur que côté client.
    </p>
  </SpeakerNotes>
</Slide>
