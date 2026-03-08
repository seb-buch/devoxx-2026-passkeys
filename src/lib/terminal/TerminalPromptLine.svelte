<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
		children?: Snippet;
		username?: string;
		hostname?: string;
		pwd?: string;
		isFragment?: boolean;
	}

	const {
		children,
		username = 'user',
		hostname = 'devbox',
		pwd = '~/demo',
		isFragment = false
	}: Props = $props();
</script>

<style>
  .term-prompt-line {
    font-family: var(--term-font), monospace;
  }

  .term-prompt-path {
    color: var(--term-accent-2);
  }

  .term-prompt-user {
    color: var(--term-accent-1);
  }

  .term-prompt-symbol {
    padding-right: 10px;
  }

</style>

<div class="term-prompt-line {isFragment ? 'fragment' : ''}">
	<span class="term-prompt-user">{username}@{hostname}:</span><span
	class="term-prompt-path">{pwd}</span><span class="term-prompt-symbol">$</span><span
	class="stdin">{@render children?.()}</span>
</div>
