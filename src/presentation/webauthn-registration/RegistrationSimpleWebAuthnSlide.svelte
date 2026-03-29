<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/webauthn-create-simplewebauthn.js?raw';
</script>

<Slide>
  <h3>Avec <code>@simplewebauthn/browser</code></h3>

  <Code language="javascript" fontSize="0.65em" lineNumbers="1,10|3,4|3-10|6-17">
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Avec SimpleWebAuthn/browser, on gagne quelques lignes — mais l'écart avec le natif Level 3 est
      faible. La valeur ajoutée côté client est réelle mais modeste : abstraction des appels fetch,
      gestion des erreurs, compatibilité avec les navigateurs qui n'ont pas encore Level 3.
    </p>
    <p>
      Le vrai argument pour les librairies WebAuthn, c'est côté <strong>serveur</strong>. Là,
      contrairement au navigateur, il n'y a aucune API native : c'est au développeur d'implémenter
      la spec. Et la spec côté serveur, c'est une autre histoire — CBOR, COSE, vérification
      cryptographique, formats d'attestation multiples... Voyons ce que ça représente.
    </p>
  </SpeakerNotes>
</Slide>
