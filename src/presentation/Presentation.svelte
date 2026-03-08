<script lang="ts">
	import './assets/styles.css';
	import '@catppuccin/highlightjs/css/catppuccin-latte.css';
	import ExampleTitle from './ExampleTitle.svelte';
	import ExampleTerminal from './ExampleTerminal.svelte';
	import ExampleCode from './ExampleCode.svelte';
</script>

<svelte:head>
	<title>My presentation title
	</title>
</svelte:head>

<ExampleTitle />
<ExampleTerminal />
<ExampleCode />
