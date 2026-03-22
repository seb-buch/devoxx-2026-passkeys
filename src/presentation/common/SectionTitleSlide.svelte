<script lang="ts">
  import Slide from '$lib/Slide.svelte';

  type Props = {
    title: string;
  };

  const { title }: Props = $props();
</script>

<Slide>
  <div class="section-title">
    <h2>{title}</h2>
  </div>
</Slide>

<style>
  .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1080px;
  }
</style>
