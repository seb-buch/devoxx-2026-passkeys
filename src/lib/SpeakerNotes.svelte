<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	}

	const { children }: Props = $props();

</script>

<aside class="notes" data-markdown>
	{@render children()}
</aside>
