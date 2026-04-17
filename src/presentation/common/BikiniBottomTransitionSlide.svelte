<script lang="ts">
	import Slide from '$lib/Slide.svelte';
	import backgroundImage from '../assets/images/spongebob-time-card-background.jpeg';
</script>

<Slide {backgroundImage}>
  <div class="section-title">
      <h3>Pendant ce temps à<br/>Bikini Bottom...</h3>
  </div>
</Slide>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');

  .section-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 1080px;
  }

  .section-title h3 {
    font-family: 'Titan One', cursive;
    font-size: 2.5em;
    color: white;
    text-transform: uppercase;
    text-shadow:
      3px 3px 0 #1B1464,
      -2px -2px 0 #1B1464,
      2px -2px 0 #1B1464,
      -2px 2px 0 #1B1464,
      0 3px 0 #1B1464,
      3px 0 0 #1B1464,
      0 -2px 0 #1B1464,
      -2px 0 0 #1B1464;
    letter-spacing: 0.1em;
    line-height: 2;
  }
</style>
