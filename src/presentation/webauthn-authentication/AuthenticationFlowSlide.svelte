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
    { from: 2, to: 1, label: 'Challenge + options' },
    { location: 1, label: 'navigator.credentials.get()' },
    { from: 1, to: 0, label: "Demande de signature" },
    { location: 0, label: 'Vérif. utilisateur + signature' },
    { from: 0, to: 1, label: 'Signature + ID passkey + ...' },
    { from: 1, to: 2, label: 'Signature + ID passkey + ...' },
    { location: 2, label: 'Vérif. challenge + signature' },
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

  <FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 40 }} />

  <SpeakerNotes>
    <p>
      La cérémonie d'authentification ressemble beaucoup à celle d'enregistrement. Mêmes acteurs —
      Relying Party, Client, authenticator — et même structure d'échanges.<br />
      Ça commence pareil : le navigateur demande des options au serveur, et le serveur renvoie un
      <em>challenge</em>. Par contre cette fois-ci, pas besoin d'envoyer les infos utilisateur ni les
      paramètres de création de clé — on ne crée pas de passkey, on en utilise une existante.<br />
      Le navigateur appelle <code>navigator.credentials.get()</code> — c'est le pendant de
      <code>credentials.create()</code> qu'on a vu à l'enregistrement.<br />
      L'authenticator reçoit la demande. Il vérifie d'abord l'identité de l'utilisateur —
      empreinte, Face ID, PIN.<br />
      Et c'est ici que la magie cryptographique opère, et c'est exactement ce qu'on a vu avec
      Alice et Bob tout à l'heure : l'authenticator signe le challenge avec la clé privée de la
      passkey, celle qui a été générée à l'enregistrement et qui n'est jamais sortie. Dans le
      jargon WebAuthn, cette signature porte un nom — on appelle ça une <em>assertion</em>. Mais
      retenez juste : c'est une signature, comme celle d'Alice.<br />
      C'est la grande différence avec l'enregistrement : à l'enregistrement on créait les clés ;
      ici, on s'en sert pour prouver l'identité.<br />
      L'authenticator renvoie donc la signature, l'identifiant de la passkey utilisée, et d'autres
      informations — dont le challenge en clair et des données qui prouvent que l'utilisateur a bien
      validé.<br />
      Le serveur reçoit tout ça. Grâce à l'identifiant, il retrouve la clé publique qu'il avait
      stockée à l'enregistrement, et l'utilise pour vérifier la signature. Il vérifie aussi le
      challenge — pour empêcher le rejeu — et l'origine du site — c'est ce contrôle d'origine qui
      bloque les tentatives de phishing.<br />
      Si tout est bon, l'utilisateur est authentifié. La clé privée n'a toujours pas quitté
      l'authenticator, et pourtant le serveur a la preuve mathématique que c'est bien le bon
      utilisateur.
    </p>
  </SpeakerNotes>
</Slide>
