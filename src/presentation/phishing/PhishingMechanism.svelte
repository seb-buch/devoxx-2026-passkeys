<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import Todo from '../Todo.svelte';
</script>

<Slide>
  <Todo message="Changer narratif" />
  <h2>L'attaque phishing — le mécanisme</h2>
  <ol>
    <li>Plankton envoie un faux email à Bob avec un lien vers <code>krabsvau1t.com</code></li>
    <li>Bob clique et arrive sur le faux site (visuellement identique)</li>
    <li>Bob saisit son mot de passe sur le faux site</li>
    <li>Plankton récupère le mot de passe et se connecte au vrai KrabsVault</li>
  </ol>
  <p>
    <em
      >Le mot de passe est phishable car il est saisi par l'utilisateur, pas validé par le
      navigateur.</em
    >
  </p>
  <SpeakerNotes>
    Voici le mécanisme : Plankton envoie un email à Bob qui ressemble à un email officiel de
    KrabsVault, avec un lien vers le faux site. Bob clique, il arrive sur une page qui ressemble en
    tout point au vrai site, il saisit son mot de passe… et Plankton le récupère. À ce stade,
    Plankton peut se connecter au vrai KrabsVault avec les identifiants de Bob. Le cœur du problème
    : le mot de passe est saisi par l'utilisateur. Le navigateur, lui, n'a aucun moyen de savoir que
    le site est faux — il transmet docilement ce que l'utilisateur tape.
  </SpeakerNotes>
</Slide>
