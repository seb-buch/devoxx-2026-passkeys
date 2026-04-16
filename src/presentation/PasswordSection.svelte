<script>
	import krabsvault from './assets/images/krabsvault-logo.png';
	import SubSectionTitleSlide from './common/SubSectionTitleSlide.svelte';
	import Slide from '$lib/Slide.svelte';
	import BikiniBottomSlide from './passwords/BikiniBottomSlide.svelte';
	import PasswordProblems from './passwords/PasswordProblems.svelte';
</script>

<section>
  <SubSectionTitleSlide title="Pendant ce temps à<br/>Bikini Bottom..." />

  <BikiniBottomSlide/>

  <SubSectionTitleSlide title="Présentation Krabsvault">
    <p>
      <a href="https://krabsvault.com/" target="krabsvault">
        <img src={krabsvault} alt="Krabsvault" />
      </a>
    </p>
  </SubSectionTitleSlide>
  <PasswordProblems />
  <Slide>
    <h3>Démo phishing</h3>
    <p>Démo phishing avec un site malveillant</p>
  </Slide>
</section>
