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
		{from: 1, to: 2, label: "Options d'enregistrement?"},
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

  <FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 42 }} />

  <SpeakerNotes>
    <p>
      Voyons les étapes de la cérémonie d'enregistrement d'une passkey. C'est un échange
      à trois acteurs : le serveur, le navigateur, et l'authenticator.<br />
      Tout commence côté client : le navigateur demande au serveur les options
      d'enregistrement. Ces options, c'est tout ce dont l'authenticator va avoir besoin
      pour créer le credential : qui est l'utilisateur, quelle Relying Party, quel type
      de clé on attend.<br />
      Et surtout, le serveur génère un challenge — une valeur aléatoire à usage unique.
      Le but du challenge, c'est de s'assurer que la réponse qu'on va recevoir correspond
      bien à cette demande précise, et pas à un rejeu d'une demande précédente.
      Il renvoie tout ça au navigateur.<br />
      Le navigateur appelle alors navigator.credentials.create() — c'est l'API WebAuthn.
      Cette API transmet la demande à l'authenticator avec les infos nécessaires, y compris
      les données du client comme l'origine du site.<br />
      L'authenticator prend le relais : il vérifie les données, génère une paire de clés
      asymétriques — une clé privée qu'il garde, une clé publique qu'il renvoie — et signe
      le challenge avec la clé privée.<br />
      En pratique, tout ça est encapsulé dans un attestationObject et un clientDataJSON, mais
      retenez l'essentiel : le serveur reçoit une clé publique et la preuve que le challenge
      a bien été signé par l'authenticator.<br />
      Le serveur vérifie cette signature, et s'il est satisfait, il stocke la clé publique.
      L'enregistrement est terminé.
    </p>
  </SpeakerNotes>
</Slide>
