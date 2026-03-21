<script lang="ts">
	import './assets/styles.css';
	import favicon from './assets/favicon.png';
	import '@catppuccin/highlightjs/css/catppuccin-latte.css';

	// Title
	import Title from './Title.svelte';

	// Introduction
	import Who from './introduction/Who.svelte';
	import Plan from './introduction/Plan.svelte';

	// Passwords
	import Bob from './introduction/Bob.svelte';
	import KrabsVaultIntro from './introduction/KrabsVaultIntro.svelte';
	import DemoPasswordLogin from './passwords/DemoPasswordLogin.svelte';
	import HowPasswordsWork from './passwords/HowPasswordsWork.svelte';
	import PasswordProblems from './passwords/PasswordProblems.svelte';

	// Phishing
	import PhishingEmail from './phishing/PhishingEmail.svelte';
	import PhishingMechanism from './phishing/PhishingMechanism.svelte';
	import MrKrabsReaction from './phishing/MrKrabsReaction.svelte';

	// Passkeys concepts
	import WhatIsPasskey from './passkeys/WhatIsPasskey.svelte';
	import AsymmetricCrypto from './passkeys/AsymmetricCrypto.svelte';
	import Ecosystem from './passkeys/Ecosystem.svelte';
	import Actors from './passkeys/Actors.svelte';
	import RegistrationFlow from './passkeys/RegistrationFlow.svelte';
	import AuthenticationFlow from './passkeys/AuthenticationFlow.svelte';
	import PhishingResistance from './passkeys/PhishingResistance.svelte';

	// Implementation
	import MrKrabsCodes from './implementation/MrKrabsCodes.svelte';
	import ServerRegistration from './implementation/ServerRegistration.svelte';
	import ClientRegistration from './implementation/ClientRegistration.svelte';
	import ServerRegistrationVerification
		from './implementation/ServerRegistrationVerification.svelte';
	import DemoRegistration from './implementation/DemoRegistration.svelte';
	import ServerAuthentication from './implementation/ServerAuthentication.svelte';
	import ClientAuthentication from './implementation/ClientAuthentication.svelte';
	import DemoAuthentication from './implementation/DemoAuthentication.svelte';
	import DemoPhishingFails from './implementation/DemoPhishingFails.svelte';

	// Conclusion
	import SyncVsDeviceBound from './conclusion/SyncVsDeviceBound.svelte';
	import Limits from './conclusion/Limits.svelte';
	import PasswordsNotDead from './conclusion/PasswordsNotDead.svelte';
	import KeyTakeaways from './conclusion/KeyTakeaways.svelte';
	import Resources from './conclusion/Resources.svelte';
	import Thanks from './conclusion/Thanks.svelte';
</script>

<svelte:head>
	<title>Passkeys &ndash; Sébastien Buchoux</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Title />

<Who />

<section>
	<Bob />
	<KrabsVaultIntro />
	<DemoPasswordLogin />
	<HowPasswordsWork />
	<PasswordProblems />
</section>

<section>
	<PhishingEmail />
	<PhishingMechanism />
	<MrKrabsReaction />
</section>

<section>
	<WhatIsPasskey />
	<AsymmetricCrypto />
	<Ecosystem />
	<Actors />
	<RegistrationFlow />
	<AuthenticationFlow />
	<PhishingResistance />
</section>

<section>
	<MrKrabsCodes />
	<ServerRegistration />
	<ClientRegistration />
	<ServerRegistrationVerification />
	<DemoRegistration />
	<ServerAuthentication />
	<ClientAuthentication />
	<DemoAuthentication />
	<DemoPhishingFails />
</section>

<section>
	<SyncVsDeviceBound />
	<Limits />
	<PasswordsNotDead />
	<KeyTakeaways />
	<Resources />
	<Thanks />
</section>

<!-- Diapos non utilisées -->
<section>
	<Plan />
</section>
