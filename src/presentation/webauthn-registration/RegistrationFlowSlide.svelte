<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import browserIcon from '../assets/images/browser.png';
  import authenticator from '../assets/images/authenticator.png';
  import serverIcon from '../assets/images/server.png';
  import FlowDiagram from '../common/FlowDiagram.svelte';
  import VerticalSpacer from '$lib/VerticalSpacer.svelte';

  const streamLines = [
    {
      iconPath: authenticator,
      name: 'Authenticator'
    },
    {
      iconPath: browserIcon,
      name: 'RP Client'
    },
    {
      iconPath: serverIcon,
      name: 'RP Server'
    }
  ];

  const steps = [
    { from: 2, to: 1, label: 'Challenge + Info user + Info RP' },
    { location: 1, label: 'navigator.credentials.create()' },
    { from: 1, to: 0, label: 'Info user + Info RP + Info client' },
    { location: 0, label: 'Vérification + Clés + Signature' },
    { from: 0, to: 1, label: 'Challenge signé + Clé publique' },
    { from: 1, to: 2, label: 'Challenge signé + Clé publique' },
    { location: 2, label: 'Vérification + stockage' }
  ];

  const flowDiagram = {
    id: 'registration-flow',
    title: "Diagramme d'enregistrement d'une passkey",
    streamLines: streamLines,
    steps: steps
  };
</script>

<Slide>
  <h2>Cérémonie d'enregistrement</h2>

  <VerticalSpacer height="1em" />

  <FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 50 }} />

  <SpeakerNotes>
    <p>
      ClientDataHash = Hash du JSON de <a
        href="https://w3c.github.io/webauthn/#dictdef-collectedclientdata"
        target="_blank">CollectedClientData</a
      >/
    </p>
  </SpeakerNotes>
</Slide>
