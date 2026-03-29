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
	import Fido2Slide from './webauthn-intro/Fido2Slide.svelte';
	import WhatIsPasskey from './webauthn-intro/WhatIsPasskey.svelte';
	import RegistrationFlowSlide from './webauthn-registration/RegistrationFlowSlide.svelte';
	import RegistrationClientNativeSlide
		from './webauthn-registration/RegistrationClientNativeSlide.svelte';
	import RegistrationSimpleWebAuthnSlide
		from './webauthn-registration/RegistrationSimpleWebAuthnSlide.svelte';
	import RegistrationServerOptionsNaiveSlide
		from './webauthn-registration/RegistrationServerOptionsNaiveSlide.svelte';
	import RegistrationServerOptionsSimpleWebAuthnSlide
		from './webauthn-registration/RegistrationServerOptionsSimpleWebAuthnSlide.svelte';
	import RegistrationServerVerifyNaiveSlide
		from './webauthn-registration/RegistrationServerVerifyNaiveSlide.svelte';
	import RegistrationServerVerifySimpleWebAuthnSlide
		from './webauthn-registration/RegistrationServerVerifySimpleWebAuthnSlide.svelte';
	import AuthenticationFlowSlide from './webauthn-authentication/AuthenticationFlowSlide.svelte';
	import AuthenticationNaiveSlide from './webauthn-authentication/AuthenticationNaiveSlide.svelte';
	import AuthenticationSimpleWebAuthnSlide
		from './webauthn-authentication/AuthenticationSimpleWebAuthnSlide.svelte';
	import AuthenticationServerOptionsNaiveSlide
		from './webauthn-authentication/AuthenticationServerOptionsNaiveSlide.svelte';
	import AuthenticationServerOptionsSimpleWebAuthnSlide
		from './webauthn-authentication/AuthenticationServerOptionsSimpleWebAuthnSlide.svelte';
	import AuthenticationServerVerifyNaiveSlide
		from './webauthn-authentication/AuthenticationServerVerifyNaiveSlide.svelte';
	import AuthenticationServerVerifySimpleWebAuthnSlide
		from './webauthn-authentication/AuthenticationServerVerifySimpleWebAuthnSlide.svelte';
	import SubSectionTitleSlide from './common/SubSectionTitleSlide.svelte';
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
  <WhatIsPasskey />
</section>

<section>
  <SectionTitleSlide title="Enregistrement d'une Passkey" />

  <RegistrationFlowSlide />

  <SubSectionTitleSlide title="Côté serveur"/>
  <RegistrationServerOptionsNaiveSlide />
  <RegistrationServerOptionsSimpleWebAuthnSlide />
  <RegistrationServerVerifyNaiveSlide />
  <RegistrationServerVerifySimpleWebAuthnSlide />

  <SubSectionTitleSlide title="Côté client"/>
  <RegistrationClientNativeSlide />
  <RegistrationSimpleWebAuthnSlide />
</section>

<section>
  <SectionTitleSlide title="Authentification avec une Passkey" />

  <AuthenticationFlowSlide />

  <SubSectionTitleSlide title="Côté serveur"/>
  <AuthenticationServerOptionsNaiveSlide />
  <AuthenticationServerOptionsSimpleWebAuthnSlide />
  <AuthenticationServerVerifyNaiveSlide />
  <AuthenticationServerVerifySimpleWebAuthnSlide />

  <SubSectionTitleSlide title="Côté client"/>
  <AuthenticationNaiveSlide />
  <AuthenticationSimpleWebAuthnSlide />
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
