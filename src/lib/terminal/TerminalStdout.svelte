<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    isFragment?: boolean;
  }

  const { children, isFragment = false }: Props = $props();
</script>

<div class="term-stdout {isFragment ? 'fragment' : ''}">
  {@render children?.()}
</div>

<style>
  .term-stdout {
    font-family: var(--term-font), monospace;
    color: var(--term-stdout);
    padding-bottom: 0.5em;
  }
</style>
