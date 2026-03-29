<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Code from '$lib/Code.svelte';
  import codeContent from './snippets/server-auth-options-naive.ts?raw';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <h3>Sans librairie&nbsp;: générer les options d'authentification</h3>
  <Todo message="Changer le code" />

  <Code language="typescript" fontSize="0.55em" lineNumbers={true}>
    {codeContent}
  </Code>

  <SpeakerNotes>
    <p>
      Côté serveur, même pattern qu'à l'enregistrement : générer un challenge aléatoire, le stocker
      en session, et construire les options à la main. La nouveauté ici, c'est la liste
      <code>allowCredentials</code> qui indique à l'authenticator quelles passkeys sont acceptées pour
      cet utilisateur.
    </p>
    <p>C'est encore gérable. La vérification, elle, va être une autre histoire.</p>
  </SpeakerNotes>
</Slide>
