<script lang="ts">
	import './assets/styles.css';
	import './assets/additional.css';
	import favicon from './assets/favicon.png';
	import '@catppuccin/highlightjs/css/catppuccin-latte.css';

	// Title
	import Title from './Title.svelte';

	// Introduction
	import Who from './Who.svelte';

	// Passwords
	// Phishing
	// Passkeys concepts
	import AsymmetricCryptoSlide from './cryptography/AsymmetricCryptoSlide.svelte';

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
	import AsymmetricSigningIllustration from './cryptography/AsymmetricSigningIllustration.svelte';
	import Fido2Slide from './webauthn-intro/Fido2Slide.svelte';
	import WhatIsPasskey from './webauthn-intro/WhatIsPasskey.svelte';
	import RegistrationFlowSlide from './webauthn-registration/RegistrationFlowSlide.svelte';
	import AuthenticationFlowSlide from './webauthn-authentication/AuthenticationFlowSlide.svelte';
	import SubSectionTitleSlide from './common/SubSectionTitleSlide.svelte';
	import PasswordSection from './PasswordSection.svelte';
</script>

<svelte:head>
  <title>Passkeys &ndash; Sébastien Buchoux</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<Title />

<Who />

<PasswordSection/>

<section>
  <SectionTitleSlide title="S'authentifier sans partager de secret ?" />
  <AsymmetricCryptoSlide />
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

  <SubSectionTitleSlide title="En pratique (live coding)" />
</section>

<section>
  <SectionTitleSlide title="Authentification avec une Passkey" />

  <AuthenticationFlowSlide />
  <SubSectionTitleSlide title="En pratique (live coding)" />
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
