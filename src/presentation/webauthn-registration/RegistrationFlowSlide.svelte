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
      name: 'Client'
    },
    {
      iconPath: serverIcon,
      name: 'Relying Party'
    }
  ];

  const steps = [
    { from: 1, to: 2, label: "Options d'enregistrement ?" },
    { from: 2, to: 1, label: 'Challenge + options' },
    { location: 1, label: 'navigator.credentials.create()' },
    { from: 1, to: 0, label: 'Demande de création' },
    { location: 0, label: 'Génération paire de clés + passkey' },
    { from: 0, to: 1, label: 'Clé publique + ID passkey + ...' },
    { from: 1, to: 2, label: 'Clé publique + ID passkey + ...' },
    { location: 2, label: 'Vérif. challenge + enreg. passkey' },
    { from: 2, to: 1, label: '✔ Enregistrement réussi' }
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

  <FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 40 }} />

  <SpeakerNotes>
    <p>
      Voyons les étapes de la cérémonie d'enregistrement d'une passkey. C'est un échange à trois
      acteurs : le serveur — la Relying Party — le navigateur — le Client — et l'authenticator.<br
      />
      Tout commence côté client : le navigateur demande au serveur les options d'enregistrement.
      Le serveur prépare ce dont l'authenticator va avoir besoin pour créer la passkey : qui est
      l'utilisateur, quelle Relying Party, quel type de clé on attend.<br />
      Et surtout, il génère un <em>challenge</em> — une valeur aléatoire à usage unique. Le but du
      challenge, c'est de s'assurer que la réponse qu'on va recevoir correspond bien à cette
      demande précise, et pas au rejeu d'une demande précédente. Il renvoie tout ça au
      navigateur.<br />
      Le navigateur appelle alors <code>navigator.credentials.create()</code> — c'est l'API
      WebAuthn standardisée. Cette API transmet la demande à l'authenticator avec toutes les infos
      nécessaires.<br />
      L'authenticator prend le relais. Il génère une nouvelle paire de clés asymétriques. Et là,
      le point critique : la clé privée reste dans l'authenticator — elle n'en sortira jamais.
      C'est ce qui définit la passkey : la clé privée plus l'identifiant du credential plus le
      lien avec la Relying Party. La clé publique, elle, va repartir vers le serveur.<br />
      L'authenticator renvoie donc la clé publique, l'identifiant de la passkey, et d'autres
      informations — dont le challenge qui revient en clair, et des flags qui indiquent que
      l'utilisateur a bien validé l'opération.<br />
      Le serveur reçoit tout ça et vérifie plusieurs choses : que le challenge correspond bien à
      celui qu'il avait généré (pour empêcher le rejeu), que l'origine du site est la bonne — et
      c'est cette vérification d'origine qui rendra les passkeys résistantes au phishing, on y
      reviendra — et que les flags sont conformes.<br />
      À noter : à l'enregistrement, le serveur ne vérifie aucune signature cryptographique. La
      paire de clés vient juste d'être créée, elle n'a encore rien signé. Ce qu'on fait ici, c'est
      un échange de clés. Le vrai usage de la signature, ce sera à l'authentification.<br />
      Si tout est bon, le serveur enregistre la passkey de son côté : la clé publique,
      l'identifiant, et le lien avec l'utilisateur. L'enregistrement est terminé.
    </p>
  </SpeakerNotes>
</Slide>
