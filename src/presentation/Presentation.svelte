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
	import Limits from './conclusion/Limits.svelte';
	import PasswordsNotDead from './conclusion/PasswordsNotDead.svelte';
	import KeyTakeaways from './conclusion/KeyTakeaways.svelte';
	import Resources from './conclusion/Resources.svelte';
	import Thanks from './conclusion/Thanks.svelte';
	import SectionTitleSlide from './common/SectionTitleSlide.svelte';
	import AsymmetricSigningIllustration from './cryptography/AsymmetricSigningIllustration.svelte';
	import Fido2Slide from './webauthn-intro/Fido2Slide.svelte';
	import WhatIsPasskey from './webauthn-intro/WhatIsPasskey.svelte';
	import RegistrationFlowSlide from './webauthn-registration/RegistrationFlowSlide.svelte';
	import AuthenticationFlowSlide from './webauthn-authentication/AuthenticationFlowSlide.svelte';
	import TransitionSlide from './common/TransitionSlide.svelte';
	import PasswordSection from './PasswordSection.svelte';
	import krabsvault from './assets/images/krabsvault-logo.png';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
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

  <TransitionSlide title="En pratique" >
    <p>
      <a href="https://krabsvault.com/" target="krabsvault">
        <img src={krabsvault} alt="Krabsvault" />
      </a>
    </p>
  </TransitionSlide>
</section>

<section>
  <SectionTitleSlide title="2. Authentification avec une Passkey" />

  <AuthenticationFlowSlide />
  <TransitionSlide title="En pratique" >
    <p>
      <a href="https://krabsvault.com/" target="krabsvault">
        <img src={krabsvault} alt="Krabsvault" />
      </a>
    </p>
  </TransitionSlide>
</section>

<section>
  <SectionTitleSlide title="Conclusion" />
  <Limits />
  <PasswordsNotDead />
  <KeyTakeaways />
  <Resources />
</section>
<Thanks />
