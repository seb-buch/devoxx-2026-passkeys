<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-auth-verify-naive.ts?raw';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <h3>Sans librairie&nbsp;: vérifier l'authentification</h3>
  <Todo message="Changer le code" />

  <Code language="typescript" fontSize="0.42em" lineNumbers={true}>
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Ici, pas de CBOR à décoder — l'<code>authenticatorData</code> arrive directement en binaire. Le
      parsing reste le même principe qu'à l'enregistrement : rpIdHash, flags, signCount.
    </p>
    <p>
      Mais la nouveauté c'est la <strong>vérification cryptographique</strong>. Les données signées
      par l'authenticator sont <code>authenticatorData || SHA-256(clientDataJSON)</code>. Il faut
      vérifier cette signature ECDSA avec la clé publique stockée en base.
    </p>
    <p>
      Problème : Node.js crypto n'accepte pas une clé EC en format non-compressé directement. Il
      faut l'encoder manuellement en DER/SPKI — soit ~30 lignes d'assemblage ASN.1 que j'ai
      condensées dans <code>buildEcP256SpkiKey()</code>. Et ensuite on vérifie le compteur pour
      détecter un éventuel clonage de passkey.
    </p>
    <p>
      À ce stade, on a bien plus que "quelques lignes de code". Et on n'a toujours géré qu'ES256.
    </p>
  </SpeakerNotes>
</Slide>
