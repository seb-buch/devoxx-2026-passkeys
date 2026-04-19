<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import browserIcon from '../assets/images/browser.png';
  import authenticator from '../assets/images/authenticator.png';
  import serverIcon from '../assets/images/server.png';
  import FlowDiagram from '../common/FlowDiagram.svelte';

  const streamLines = [
    {
      iconPath: authenticator,
      name: 'Authenticator'
    },
    {
      iconPath: browserIcon,
      name: 'Client'
    },
    {
      iconPath: serverIcon,
      name: 'Relying Party'
    }
  ];

  const steps = [
    { from: 1, to: 2, label: "Options d'authentification ?" },
    { from: 2, to: 1, label: 'Challenge + Options' },
    { location: 1, label: 'navigator.credentials.get()' },
    { from: 1, to: 0, label: 'Info RP + Info Client' },
    { location: 0, label: 'Vérif. User + Création Assertion' },
    { from: 0, to: 1, label: 'Données Authenticator + Signature' },
    { from: 1, to: 2, label: 'Données Authenticator + Signature' },
    { location: 2, label: 'Validation signature' },
    { from: 2, to: 1, label: '✔ Authentification réussie' }
  ];

  const flowDiagram = {
    id: 'authentication-flow',
    title: "Diagramme d'authentification avec une passkey",
    streamLines: streamLines,
    steps: steps
  };
</script>

<Slide>
  <h3>Cérémonie d'authentification</h3>

  <FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 42 }} />

  <SpeakerNotes>
    <p>
      Vous allez voir que la cérémonie d'authentification ressemble beaucoup à celle
      d'enregistrement. Les mêmes acteurs, le même type d'échanges.<br />
      Ça commence pareil : le client demande des options au serveur, et le serveur renvoie un challenge.
      Par contre, cette fois-ci, pas besoin d'envoyer les infos utilisateur — on ne crée pas de credential,
      on en utilise un existant.<br />
      Le navigateur appelle navigator.credentials.get() — c'est le pendant de credentials.create() pour
      l'enregistrement.<br />
      L'authenticator reçoit la demande. Il vérifie d'abord l'identité de l'utilisateur — empreinte, Face
      ID, PIN — puis il crée une assertion. L'assertion, c'est la preuve cryptographique : l'authenticator
      signe le challenge avec la clé privée qu'il a stockée lors de l'enregistrement.<br />
      Et c'est là qu'est la grande différence avec l'enregistrement : on ne génère pas de nouvelle paire
      de clés, on réutilise celle qui existe déjà. La clé privée ne quitte toujours pas l'authenticator
      — il renvoie juste la signature.<br />
      Le serveur reçoit cette signature et la vérifie avec la clé publique qu'il avait stockée à l'enregistrement.
      Il vérifie aussi le challenge, l'origin et le rp_id, comme pour l'enregistrement. Si tout est bon,
      l'utilisateur est authentifié.
    </p>
  </SpeakerNotes>
</Slide>
