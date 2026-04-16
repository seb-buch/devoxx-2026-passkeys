<script lang="ts">
	import Slide from '$lib/Slide.svelte';

	type Props = {
    title: string;
  };

  const { title }: Props = $props();
</script>

<Slide backgroundImage="/devoxx/bg-image1.png" backgroundSize="cover">
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
      flex-direction: column;
      background: linear-gradient(
          to top,
          rgba(48, 73, 54 ,0.9) 0%,
          rgba(48, 73, 54, 0.70) 50%,
          rgba(48, 73, 54, 0.30) 100%
      );
    backdrop-filter: blur(5px);
  }
</style>
