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
  <h2>Authentification avec une passkey</h2>

  <FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 40 }} />

  <SpeakerNotes>TODO</SpeakerNotes>
</Slide>
