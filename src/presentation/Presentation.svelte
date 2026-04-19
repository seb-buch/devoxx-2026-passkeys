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

<PasswordSection />

<section>
  <SectionTitleSlide title="Authentifier sans mot de passe ?" />
  <AsymmetricCryptoSlide />
  <AsymmetricSigningIllustration />
</section>

<section>
  <SectionTitleSlide title="Authentification avec FIDO2">
    <SpeakerNotes>
      <p>
        Ce que je viens de décrire correspond au principe à la base de l'authentification avec une
        Passkey, qui a été standardisée par l'alliance FIDO à travers la spécification FIDO2.
      </p>
    </SpeakerNotes>
  </SectionTitleSlide>
  <Fido2Slide />
  <WhatIsPasskey />
</section>

<section>
  <SectionTitleSlide title="1. Enregistrement d'une Passkey" >
    <SpeakerNotes>
      <p>Maintenant qu'on sait ce qu'est une passkey, voyons comment ça fonctionne. Et comme pour un mot de passe, tout commence par une
        étape d'enregistrement.
      </p>
    </SpeakerNotes>
  </SectionTitleSlide>

  <RegistrationFlowSlide />

  <LiveCodingTransitionSlide project="krabsvault" path="src/krabsvault/app.py">
    <p>Points à montrer dans le code :</p>
    <ul>
      <li>generate_registration_options() — les paramètres clés :</li>
      <li>rp_id : le domaine auquel le credential sera lié (résistance au phishing)</li>
      <li>user_id vs user_name : l'identifiant opaque pour l'authenticator vs le username de l'app</li>
      <li>resident_key=REQUIRED : c'est ce qui en fait une passkey et pas juste une clé FIDO2</li>
      <li>exclude_credentials : éviter les doublons si l'utilisateur a déjà une passkey</li>
      <li>Côté frontend : navigator.credentials.create() — 3 lignes, le navigateur fait tout</li>
      <li>verify_registration_response() — le serveur vérifie challenge + origin + rp_id puis stocke la clé publique</li>
    </ul>
    <p>
      On va maintenant plonger dans le code de M. Krabs pour implémenter l'enregistrement.<br />
      Le point d'entrée, c'est generate_registration_options. Vous allez voir plusieurs
      paramètres — les plus importants :<br />
      Le rp_id, c'est le domaine. Le credential sera lié à ce domaine et uniquement
      à ce domaine. C'est ce qui rend les passkeys résistantes au phishing : un faux site
      sur un autre domaine ne pourra jamais utiliser ce credential.<br />
      Vous verrez aussi un user_id et un user_name. Le user_name, c'est le login classique
      de votre app. Le user_id, c'est un identifiant opaque en bytes que l'authenticator
      utilise en interne — ne mettez pas l'email ou le username dedans, c'est une valeur
      aléatoire.<br />
      resident_key=REQUIRED, c'est le paramètre qui fait la différence entre une simple
      clé de sécurité FIDO2 et une vraie passkey. Avec ce flag, la clé est stockée dans
      l'authenticator et peut être synchronisée entre les appareils.<br />
      Côté frontend, c'est très simple : un appel à navigator.credentials.create(),
      le navigateur affiche le dialogue natif et gère tout l'échange avec l'authenticator.<br />
      Enfin, côté serveur, la vérification : on vérifie que le challenge correspond,
      que l'origin est bonne, que le rp_id est correct, et on stocke la clé publique.
    </p>
  </LiveCodingTransitionSlide>
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
