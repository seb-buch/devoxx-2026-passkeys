<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-auth-verify-simplewebauthn.ts?raw';
</script>

<Slide>
  <h3>Avec <code>@simplewebauthn/server</code>&nbsp;: vérifier l'authentification</h3>

  <Code language="typescript" fontSize="0.6em" lineNumbers="1,2|9-20|22-24|26-29|31">
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Avec SimpleWebAuthn, <code>verifyAuthenticationResponse()</code> prend en charge tout :
      validation du clientDataJSON, parsing de l'authenticatorData, vérification ECDSA, gestion du
      compteur. On lui passe la réponse du client et la passkey stockée en base — la lib fait le reste.
    </p>
    <p>
      Le bilan est sans appel : quelques dizaines de lignes complexes remplacées par un seul appel
      de fonction. Contrairement au client où l'API native suffit, côté serveur la lib n'est pas un
      luxe — c'est ce qui vous évite d'implémenter la spec WebAuthn à la main.
    </p>
  </SpeakerNotes>
</Slide>
