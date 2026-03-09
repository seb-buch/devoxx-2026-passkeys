<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Les acteurs de WebAuthn</h2>
	<ul>
		<li>
			<strong>Relying Party (RP)</strong> — le serveur, votre application web (KrabsVault)
		</li>
		<li>
			<strong>Client</strong> — le navigateur, expose l'API WebAuthn (<code
				>navigator.credentials</code
			>)
		</li>
		<li>
			<strong>Authenticator</strong> — génère et stocke les clés (Touch ID, Windows Hello, YubiKey…)
		</li>
	</ul>
	<p>RP ↔ Client : HTTP + API WebAuthn</p>
	<p>Client ↔ Authenticator : CTAP (transparent pour le développeur)</p>
	<SpeakerNotes>
		Dans le protocole WebAuthn, il y a trois acteurs. Le Relying Party, c'est votre serveur — dans
		notre cas, KrabsVault. Le Client, c'est le navigateur web qui expose l'API
		navigator.credentials. Et l'Authenticator, c'est le dispositif qui va générer la paire de clés
		et stocker la clé privée — ça peut être le lecteur d'empreinte de votre Mac, Windows Hello, Face
		ID sur un iPhone, ou encore une clé de sécurité physique comme une YubiKey. En tant que
		développeur, vous interagissez principalement avec le navigateur via l'API WebAuthn. La
		communication entre le navigateur et l'authenticator est gérée par le système, vous n'avez pas à
		vous en occuper.
	</SpeakerNotes>
</Slide>
