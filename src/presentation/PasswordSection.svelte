<script>
  import DemoTransitionSlide from './common/DemoTransitionSlide.svelte';
  import BikiniBottomSlide from './passwords/BikiniBottomSlide.svelte';
  import PasswordProblems from './passwords/PasswordProblems.svelte';
  import PhishingTransitionSlide from './passwords/PhishingTransitionSlide.svelte';
  import BikiniBottomTransitionSlide from './common/BikiniBottomTransitionSlide.svelte';
</script>

<section>
  <BikiniBottomTransitionSlide />

  <BikiniBottomSlide />

  <DemoTransitionSlide
    title="Présentation KrabsVault"
    notes="Voyons un peu à quoi ressemble cette application"
  />
  <PasswordProblems />
  <PhishingTransitionSlide />
</section>
