<script>
	import krabsvault from './assets/images/krabsvault-logo.png';
	import TransitionSlide from './common/TransitionSlide.svelte';
	import BikiniBottomSlide from './passwords/BikiniBottomSlide.svelte';
	import PasswordProblems from './passwords/PasswordProblems.svelte';
	import PhishingTransitionSlide from './passwords/PhishingTransitionSlide.svelte';
</script>

<section>
  <TransitionSlide title="Pendant ce temps à<br/>Bikini Bottom..." />

  <BikiniBottomSlide/>

  <TransitionSlide title="Présentation Krabsvault">
    <p>
      <a href="https://krabsvault.com/" target="krabsvault">
        <img src={krabsvault} alt="Krabsvault" />
      </a>
    </p>
  </TransitionSlide>
  <PasswordProblems />
  <PhishingTransitionSlide/>
</section>
