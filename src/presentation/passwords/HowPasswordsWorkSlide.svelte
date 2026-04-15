<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import browserIcon from '../assets/images/browser.png';
	import serverIcon from '../assets/images/server.png';
	import passwordStorageIcon from '../assets/images/password-storage.png';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
	import FlowDiagram from '../common/FlowDiagram.svelte';

	const streamLines = [
    {
      iconPath: browserIcon,
      name: 'Navigateur'
    },
    {
      iconPath: serverIcon,
      name: 'Serveur'
    },
    {
      iconPath: passwordStorageIcon,
      name: 'Stockage MdP'
    }
  ];

  const steps = [
    { from: 0, to: 1, label: 'identifiant + 🔑 mot de passe' },
    { from: 1, to: 2, label: 'Hash pour identifiant ?' },
    { from: 2, to: 1, label: 'Hash' },
    { location: 1, label: 'Comparaison MdP Hashé / Hash stocké' },
    { from: 1, to: 0, label: '✔ Authentification réussie' }
  ];

  const flowDiagram = {
    id: 'password-flow',
    title: "Diagramme d'authentification par mot de passe",
    streamLines: streamLines,
    steps: steps
  };
</script>

<Slide>
  <h3>Authentification par mot de passe (Web app)</h3>

  <VerticalSpacer height="2em" />

  <FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 50 }} />

  <SpeakerNotes>
    Quand Bob se connecte, voici ce qui se passe : le navigateur envoie son identifiant et son mot
    de passe au serveur. Le serveur interroge son stockage — dans KrabsVault, c'est une Map en
    mémoire, mais en production ce serait une vraie BDD. Il récupère le hash bcrypt stocké, et
    utilise bcrypt.compare() pour vérifier le mot de passe. Si ça correspond, il crée une session et
    renvoie un cookie contenant l'ID de session. C'est le modèle qu'on utilise depuis des décennies.
    Le point fondamental ici, c'est que le secret — le mot de passe — est un secret partagé. Le
    serveur en a une copie (hashée), l'utilisateur en a une copie dans sa tête. Et c'est précisément
    là que les problèmes commencent.
  </SpeakerNotes>
</Slide>
