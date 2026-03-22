<script lang="ts">
	import './assets/styles.css';
	import favicon from './assets/favicon.png';
	import '@catppuccin/highlightjs/css/catppuccin-latte.css';

	// Title
	import Title from './Title.svelte';

	// Introduction
	import Who from './Who.svelte';

	// Passwords
	import HowPasswordsWorkSlide from './passwords/HowPasswordsWorkSlide.svelte';
	import PasswordProblems from './passwords/PasswordProblems.svelte';

	// Phishing
	import PhishingEmail from './phishing/PhishingEmail.svelte';
	import PhishingMechanism from './phishing/PhishingMechanism.svelte';

	// Passkeys concepts
	import AsymmetricCrypto from './cryptography/AsymmetricCrypto.svelte';

	// Implementation
	// Conclusion
	import SyncVsDeviceBound from './conclusion/SyncVsDeviceBound.svelte';
	import Limits from './conclusion/Limits.svelte';
	import PasswordsNotDead from './conclusion/PasswordsNotDead.svelte';
	import KeyTakeaways from './conclusion/KeyTakeaways.svelte';
	import Resources from './conclusion/Resources.svelte';
	import Thanks from './conclusion/Thanks.svelte';
	import AsymmetricEncryptionIllustration
		from './cryptography/AsymmetricEncryptionIllustration.svelte';
	import SectionTitleSlide from './common/SectionTitleSlide.svelte';
	import PasswordIRLSlide from './passwords/PasswordIRLSlide.svelte';
	import HowPasswordsWorkIrlSlide from './passwords/HowPasswordsWorkIRLSlide.svelte';
	import AsymmetricSigningIllustration from './cryptography/AsymmetricSigningIllustration.svelte';
	import WebauthnOverviewSlide from './webauthn/WebauthnOverviewSlide.svelte';
	import Fido2Slide from './webauthn/Fido2Slide.svelte';
	import WhatIsPasskey from './webauthn/WhatIsPasskey.svelte';
	import RegistrationFlowSlide from './webauthn/RegistrationFlowSlide.svelte';
	import AuthenticationFlowSlide from './webauthn/AuthenticationFlowSlide.svelte';
	import RegistrationNaiveSlide from './webauthn/RegistrationNaiveSlide.svelte';
	import RegistrationSimpleWebAuthnSlide from './webauthn/RegistrationSimpleWebAuthnSlide.svelte';
	import RegistrationServerOptionsNaiveSlide
		from './webauthn/RegistrationServerOptionsNaiveSlide.svelte';
	import RegistrationServerOptionsSimpleWebAuthnSlide
		from './webauthn/RegistrationServerOptionsSimpleWebAuthnSlide.svelte';
	import RegistrationServerVerifyNaiveSlide
		from './webauthn/RegistrationServerVerifyNaiveSlide.svelte';
	import RegistrationServerVerifySimpleWebAuthnSlide
		from './webauthn/RegistrationServerVerifySimpleWebAuthnSlide.svelte';
	import AuthenticationNaiveSlide from './webauthn/AuthenticationNaiveSlide.svelte';
	import AuthenticationSimpleWebAuthnSlide
		from './webauthn/AuthenticationSimpleWebAuthnSlide.svelte';
	import AuthenticationServerOptionsNaiveSlide
		from './webauthn/AuthenticationServerOptionsNaiveSlide.svelte';
	import AuthenticationServerOptionsSimpleWebAuthnSlide
		from './webauthn/AuthenticationServerOptionsSimpleWebAuthnSlide.svelte';
	import AuthenticationServerVerifyNaiveSlide
		from './webauthn/AuthenticationServerVerifyNaiveSlide.svelte';
	import AuthenticationServerVerifySimpleWebAuthnSlide
		from './webauthn/AuthenticationServerVerifySimpleWebAuthnSlide.svelte';
</script>

<svelte:head>
  <title>Passkeys &ndash; Sébastien Buchoux</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<Title />

<Who />

<section>
  <SectionTitleSlide title="Comment authentifier quelqu'un ?" />
  <PasswordIRLSlide />
  <HowPasswordsWorkIrlSlide />
  <HowPasswordsWorkSlide />
  <PasswordProblems />
</section>

<section>
  <SectionTitleSlide title="S'authentifier sans partager de secret ?" />
  <AsymmetricCrypto />
  <AsymmetricEncryptionIllustration />
  <AsymmetricSigningIllustration />
</section>

<section>
  <SectionTitleSlide title="S'authentifier sans partage de secret avec FIDO2" />
  <Fido2Slide />
  <WebauthnOverviewSlide />
  <WhatIsPasskey />
</section>

<section>
  <SectionTitleSlide title="Enregistrement d'une passkey" />

  <RegistrationFlowSlide />
  <RegistrationNaiveSlide />
  <RegistrationSimpleWebAuthnSlide />
  <RegistrationServerOptionsNaiveSlide />
  <RegistrationServerOptionsSimpleWebAuthnSlide />
  <RegistrationServerVerifyNaiveSlide />
  <RegistrationServerVerifySimpleWebAuthnSlide />
</section>

<section>
  <SectionTitleSlide title="Authentication avec une passkey" />
  <AuthenticationFlowSlide />
  <AuthenticationNaiveSlide />
  <AuthenticationSimpleWebAuthnSlide />
  <AuthenticationServerOptionsNaiveSlide />
  <AuthenticationServerOptionsSimpleWebAuthnSlide />
  <AuthenticationServerVerifyNaiveSlide />
  <AuthenticationServerVerifySimpleWebAuthnSlide />
</section>

<section>
  <SectionTitleSlide title="Conclusion" />
  <SyncVsDeviceBound />
  <Limits />
  <PasswordsNotDead />
  <KeyTakeaways />
  <Resources />
</section>
<Thanks />

<section>
  <SectionTitleSlide title="Le phishing" />
  <PhishingEmail />
  <PhishingMechanism />
</section>
