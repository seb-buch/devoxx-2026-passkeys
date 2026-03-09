<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Cryptographie asymétrique — les bases</h2>
	<ul>
		<li>🔒 Clé privée — reste chez vous, ne part jamais</li>
		<li>🔓 Clé publique — partageable avec tout le monde</li>
	</ul>
	<ul>
		<li>
			Ce qui est <strong>signé</strong> avec la clé privée peut être <strong>vérifié</strong> avec la
			clé publique
		</li>
		<li>
			Ce qui est <strong>chiffré</strong> avec la clé publique ne peut être
			<strong>déchiffré</strong> qu'avec la clé privée
		</li>
	</ul>
	<p><em>Même principe que les clés GPG pour signer vos commits Git.</em></p>
	<SpeakerNotes>
		Petit rappel de crypto asymétrique pour ceux qui auraient besoin d'un rafraîchissement. Le
		principe est simple : on a une paire de clés. La clé privée, vous la gardez précieusement. La
		clé publique, vous pouvez la donner à tout le monde. Ce qui est signé avec la clé privée peut
		être vérifié par quiconque possède la clé publique, ce qui prouve que c'est bien vous qui avez
		signé. Si vous utilisez des clés GPG pour signer vos commits Git, c'est exactement le même
		principe. Les passkeys fonctionnent sur cette base.
	</SpeakerNotes>
</Slide>
