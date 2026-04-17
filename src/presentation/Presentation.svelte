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
	import ImplementationRecap from './conclusion/ImplementationRecap.svelte';
	import PasskeysVsPasswords from './conclusion/PasskeysVsPasswords.svelte';
	import Thanks from './conclusion/Thanks.svelte';
	import SectionTitleSlide from './common/SectionTitleSlide.svelte';
	import AsymmetricSigningIllustration from './cryptography/AsymmetricSigningIllustration.svelte';
	import Fido2Slide from './webauthn-intro/Fido2Slide.svelte';
	import WhatIsPasskey from './webauthn-intro/WhatIsPasskey.svelte';
	import RegistrationFlowSlide from './webauthn-registration/RegistrationFlowSlide.svelte';
	import AuthenticationFlowSlide from './webauthn-authentication/AuthenticationFlowSlide.svelte';
	import DemoTransitionSlide from './common/DemoTransitionSlide.svelte';
	import PasswordSection from './PasswordSection.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import LiveCodingTransitionSlide from './common/LiveCodingTransitionSlide.svelte';
</script>

<svelte:head>
  <title>Passkeys &ndash; Sébastien Buchoux</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<Title />

<Who />

<PasswordSection/>

<section>
  <SectionTitleSlide title="Authentifier sans mot de passe ?" />
  <AsymmetricCryptoSlide />
  <AsymmetricSigningIllustration />
</section>

<section>
  <SectionTitleSlide title="Authentification avec FIDO2">
    <SpeakerNotes>
      <p>
        Ce que je viens de décrire correspond au principe à la base de l'authentification avec une Passkey,
        qui a été standardisée par l'alliance FIDO à travers la spécification FIDO2.
      </p>
    </SpeakerNotes>
  </SectionTitleSlide>
  <Fido2Slide />
  <WhatIsPasskey />
</section>

<section>
  <SectionTitleSlide title="1. Enregistrement d'une Passkey" />

  <RegistrationFlowSlide />

  <LiveCodingTransitionSlide project="krabsvault-py" path="src/krabsvault/app.py:36" />
</section>

<section>
  <SectionTitleSlide title="2. Authentification avec une Passkey" />

  <AuthenticationFlowSlide />
  <LiveCodingTransitionSlide project="krabsvault-py" />
  <DemoTransitionSlide />
</section>

<section>
  <SectionTitleSlide title="Conclusion" />
  <ImplementationRecap />
  <PasskeysVsPasswords />
</section>
<Thanks />
