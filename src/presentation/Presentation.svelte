<script lang="ts">
	import './assets/styles.css';
	import '@catppuccin/highlightjs/css/catppuccin-latte.css';
	import Title from './Title.svelte';
	import ExampleTerminal from './examples/ExampleTerminal.svelte';
	import ExampleCode from './examples/ExampleCode.svelte';
	import Who from './introduction/Who.svelte';
</script>

<svelte:head>
	<title>My presentation title</title>
</svelte:head>

<Title />
<section>
	<Who/>
</section>
<section>
	<ExampleTerminal />
	<ExampleCode />
</section>
