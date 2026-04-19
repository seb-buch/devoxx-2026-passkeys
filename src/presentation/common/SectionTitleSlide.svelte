<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    title: string;
    children?: Snippet;
  };

  const { title, children }: Props = $props();
</script>

<Slide backgroundImage="/devoxx/bg-image1.png" backgroundSize="cover">
  <div class="section-title">
    <h2>{title}</h2>
  </div>
  {#if children}
    <SpeakerNotes>{@render children()}</SpeakerNotes>
  {/if}
</Slide>

<style>
  .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1080px;
    flex-direction: column;
    background: linear-gradient(
      to top,
      rgba(48, 73, 54, 0.9) 0%,
      rgba(48, 73, 54, 0.7) 50%,
      rgba(48, 73, 54, 0.3) 100%
    );
    backdrop-filter: blur(5px);
  }
</style>
