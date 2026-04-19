<script>
  import DemoTransitionSlide from './common/DemoTransitionSlide.svelte';
  import BikiniBottomSlide from './passwords/BikiniBottomSlide.svelte';
  import PasswordProblemsSlide from './passwords/PasswordProblemsSlide.svelte';
  import PhishingTransitionSlide from './passwords/PhishingTransitionSlide.svelte';
  import BikiniBottomTransitionSlide from './common/BikiniBottomTransitionSlide.svelte';
  import LiveCodingTransitionSlide from './common/LiveCodingTransitionSlide.svelte';
  import KrabsvaultTechStackSlide from './KrabsvaultTechStackSlide.svelte';
</script>

<section>
  <BikiniBottomTransitionSlide />

  <BikiniBottomSlide />

  <DemoTransitionSlide
    title="Présentation KrabsVault"
    notes="Voyons un peu à quoi ressemble cette application"
  />
  <KrabsvaultTechStackSlide />
  <LiveCodingTransitionSlide title="Krabsvault &ndash; Code">
    <p>Points à montrer :</p>
    <ul>
      <li>Structure de l'app : tout dans app.py, classes de services, protocoles</li>
      <li>GET /login — page de login (template Jinja2)</li>
      <li>POST /login — authentification mot de passe (Argon2)</li>
      <li>GET / — vault protégé par session</li>
      <li>POST /logout</li>
    </ul>
    <p>
      Regardons rapidement le code de KrabsVault. Tout tient dans app.py : c'est volontaire, on veut
      que ce soit facile à suivre.<br />
      On a une page de login classique, un endpoint POST qui vérifie le mot de passe avec Argon2, et une
      page vault accessible uniquement si on est authentifié.<br />
      Rien de très surprenant, c'est une app d'authentification par mot de passe tout ce qu'il y a de
      plus standard.<br />
      D'ailleurs M. Krabs est très fier de son application. Il la pense inviolable.<br />
      Sauf que, le lendemain de la mise en production, Bob reçoit le message suivant...
    </p>
  </LiveCodingTransitionSlide>
  <PhishingTransitionSlide />
  <PasswordProblemsSlide />
</section>
