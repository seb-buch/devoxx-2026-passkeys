<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-register-verify-simplewebauthn.ts?raw';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <h3>Avec <code>@simplewebauthn/server</code>&nbsp;: vérifier l'enregistrement</h3>
  <Todo message="Changer code" />

  <Code language="typescript" fontSize="0.6em" lineNumbers="1,2|6-13|15-18|20-28|30">
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Avec SimpleWebAuthn, la vérification tient en une fonction :
      <code>verifyRegistrationResponse()</code>. On lui passe la réponse du client, le challenge
      attendu, l'origine et le rpId — et la lib s'occupe de tout : décodage CBOR, parsing de
      l'authData, décodage COSE, vérification des flags, et de tous les formats d'attestation.
    </p>
    <p>
      Si tout est valide, on extrait les informations du credential et on les stocke. Le compteur (<code
        >counter</code
      >) sera incrémenté à chaque authentification — c'est le mécanisme anti-clonage de la spec.
    </p>
    <p>
      C'est là que SimpleWebAuthn justifie vraiment son existence. Côté serveur, la lib n'est pas un
      confort — c'est une nécessité sauf si vous voulez implémenter vous-même la spec WebAuthn dans
      ses moindres détails.
    </p>
  </SpeakerNotes>
</Slide>
