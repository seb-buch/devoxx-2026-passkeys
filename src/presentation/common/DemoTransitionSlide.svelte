<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import backgroundImage from '../assets/images/spongebob-time-card-background.jpeg';
  import krabsvault from '../assets/images/krabsvault-logo.png';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';

  type Props = {
    title?: string;
    href?: string;
    notes?: string;
  };

  const { title = 'En pratique', href = 'https://krabsvault.com/', notes = '' }: Props = $props();
</script>

<Slide {backgroundImage}>
  <div class="demo-transition">
    <h3>{@html title}</h3>
    <a {href} target="krabsvault">
      <img src={krabsvault} alt="KrabsVault" />
    </a>
  </div>
  {#if notes.trim() !== ''}
    <SpeakerNotes>
      <p>{notes}</p>
    </SpeakerNotes>
  {/if}
</Slide>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');

  .demo-transition {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 1080px;
  }

  .demo-transition h3 {
    font-family: 'Titan One', cursive;
    font-size: 2.5em;
    color: white;
    text-transform: uppercase;
    text-shadow:
      3px 3px 0 #1b1464,
      -2px -2px 0 #1b1464,
      2px -2px 0 #1b1464,
      -2px 2px 0 #1b1464,
      0 3px 0 #1b1464,
      3px 0 0 #1b1464,
      0 -2px 0 #1b1464,
      -2px 0 0 #1b1464;
    letter-spacing: 0.1em;
    line-height: 2;
  }

  .demo-transition img {
    max-height: 400px;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.5));
    transition: transform 0.3s ease;
  }

  .demo-transition img:hover {
    transform: scale(1.05);
  }
</style>
