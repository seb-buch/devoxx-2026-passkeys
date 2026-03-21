<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import browserIcon from '../assets/images/browser.png';
	import spongebobIcon from '../assets/images/spongebob.png';
	import serverIcon from '../assets/images/server.png';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
	import FlowDiagram from '../common/FlowDiagram.svelte';

	const streamLines = [
		{
			iconPath: browserIcon,
			name: 'Navigateur'
		},
		{
			iconPath: spongebobIcon,
			name: 'Authenticator'
		},
		{
			iconPath: serverIcon,
			name: 'Serveur'
		}
	];

	const steps = [
		{ from: 2, to: 0, label: 'Challenge + options (rpId, userId, algorithmes)' },
		{ location: 0, label: 'navigator.credentials.create()' },
		{ from: 0, to: 1, label: "Demande de création d'un credential" },
		{ location: 1, label: 'Vérification locale (biométrie / PIN)' },
		{ location: 1, label: 'Génération paire de clés + signature challenge' },
		{ from: 1, to: 0, label: 'Attestation + clé publique' },
		{ from: 0, to: 2, label: 'credential + réponse signée' },
		{ location: 2, label: 'Vérification signature + stockage clé publique' }
	];

	const flowDiagram = {
		title: "Diagramme d'enregistrement d'une passkey",
		streamLines: streamLines,
		steps: steps
	};
</script>

<Slide>
	<h2>Enregistrement d'une passkey — le flux</h2>

	<VerticalSpacer height="2em" />

	<FlowDiagram useFragment={true} {flowDiagram} diagramStyle={{ stepHeight: 44 }} />

	<p>
		<strong
			>La clé privée ne quitte JAMAIS l'authenticator. Le serveur ne stocke que la clé publique.</strong
		>
	</p>
	<SpeakerNotes>
		Voyons le flux d'enregistrement, c'est-à-dire le moment où Bob crée sa passkey pour KrabsVault.
		Le serveur génère d'abord un challenge — une valeur aléatoire à usage unique — et l'envoie au
		navigateur avec des options comme l'identifiant du site et les algorithmes cryptographiques
		acceptés. Le navigateur appelle l'API WebAuthn, l'authenticator demande à Bob de poser son doigt
		ou de scanner son visage, puis il génère une paire de clés. La clé privée reste sur l'appareil
		de Bob, elle ne part jamais. La clé publique et le challenge signé sont renvoyés au serveur. Le
		serveur vérifie la signature, et s'il est convaincu, il stocke la clé publique. C'est tout. Le
		serveur n'a jamais vu la clé privée.
	</SpeakerNotes>
</Slide>
