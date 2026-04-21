<script lang="ts">
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import type { Snippet } from 'svelte';
	import backgroundImage from '../assets/images/spongebob-time-card-background.jpeg';
	import krabsCoding from '../assets/images/Krabs-coding.png';

	type Props = {
    project?: string;
    path?: string;
    title?: string;
    children?: Snippet;
  };

  const { project="krabsvault", path, title = 'Live coding', children }: Props = $props();

  const url = $derived(
    `jetbrains://pycharm/navigate/reference?project=${encodeURIComponent(project)}` +
      (path ? `&path=${encodeURIComponent(path)}` : '')
  );
</script>

<Slide {backgroundImage}>
  <div class="live-coding">
    <h3>{@html title}</h3>
    <a href={url} target="_blank">
      <img src={krabsCoding} alt="Mr. Krabs code" />
    </a>
  </div>
  {#if children}
    <SpeakerNotes>{@render children()}</SpeakerNotes>
  {/if}
</Slide>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');

  .live-coding {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 1080px;
  }

  .live-coding h3 {
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

  .live-coding img {
    max-height: 500px;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.5));
    transition: transform 0.3s ease;
  }

  .live-coding img:hover {
    transform: scale(1.05);
  }
</style>
