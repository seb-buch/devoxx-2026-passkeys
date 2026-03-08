<script>
	import TerminalPromptLine from '$lib/terminal/TerminalPromptLine.svelte';
	import Terminal from '$lib/terminal/Terminal.svelte';
	import TerminalStdout from '$lib/terminal/TerminalStdout.svelte';
	import Slide from '$lib/Slide.svelte';
</script>

<Slide>
	<h1>Example Terminal</h1>
	<Terminal>
		<TerminalPromptLine>ls ./</TerminalPromptLine>
		<TerminalStdout isFragment={true}>package.json</TerminalStdout>
	</Terminal>
</Slide>
