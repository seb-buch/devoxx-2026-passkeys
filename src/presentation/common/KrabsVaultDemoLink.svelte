<script lang="ts">
	import logo from '../assets/images/krabsvault-logo.png';

	type Props = {
		link?: string;
	};

	const { link = 'https://krabsvault.com' }: Props = $props();
</script>

<div class="container">
	<a href={link} target="_blank"
		><img src={logo} alt="KrabsVault logo" />
		KrabsVault en action
		<img src={logo} alt="KrabsVault logo" /></a
	>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 1080px;

		a {
			font-size: 1.5em;
			font-family: var(--r-heading-font), sans-serif;
			font-weight: bold;
			img {
				height: 2em;
				vertical-align: middle;
				padding: 0 0.5em;
			}
		}
	}
</style>
