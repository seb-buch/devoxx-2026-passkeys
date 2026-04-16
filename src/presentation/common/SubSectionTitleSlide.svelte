<script lang="ts">
	import Slide from '$lib/Slide.svelte';
	import backgroundImage from '../assets/images/spongebob-time-card-background.jpeg';

	type Props = {
    title: string;
  };

  const { title }: Props = $props();
</script>

<Slide {backgroundImage}>
  <div class="section-title">
    <h3>{@html title}</h3>
  </div>
</Slide>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');

  .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1080px;
  }

  .section-title h3 {
    font-family: 'Titan One', cursive;
    font-size: 2.5em;
    color: blueviolet;
    text-transform: uppercase;
    text-shadow:
      3px 3px 0 violet,
      -2px -2px 0 violet,
      2px -2px 0 violet,
      -2px 2px 0 violet,
      0 3px 0 violet,
      3px 0 0 violet,
      0 -2px 0 violet,
      -2px 0 0 violet;
    letter-spacing: 0.1em;
    line-height: 2;
  }
</style>
