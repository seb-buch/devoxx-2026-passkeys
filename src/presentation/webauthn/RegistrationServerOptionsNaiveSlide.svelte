<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-register-options-naive.ts?raw';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <h3>Sans librairie&nbsp;: générer les options côté serveur</h3>
  <Todo message="Changer code" />

  <Code language="typescript" fontSize="0.65em" lineNumbers="8,9|11|14-37">
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Côté serveur, pas d'API native. On doit tout construire à la main. La partie options est
      encore gérable : on génère un challenge aléatoire avec <code>crypto.randomBytes</code>, on le
      stocke en session, et on construit la réponse JSON selon la spec WebAuthn.
    </p>
    <p>
      Rien de catastrophique ici — mais c'est déjà du boilerplate. Le vrai problème arrive à l'étape
      suivante : la vérification.
    </p>
  </SpeakerNotes>
</Slide>
