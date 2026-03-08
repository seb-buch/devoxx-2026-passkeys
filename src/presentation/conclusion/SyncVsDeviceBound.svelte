<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Passkeys synchronisées vs device-bound</h2>
	<table>
		<thead>
			<tr>
				<th></th>
				<th>Synchronisées</th>
				<th>Device-bound</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Stockage</td>
				<td>Cloud (iCloud Keychain, Google PM…)</td>
				<td>Sur l'appareil uniquement</td>
			</tr>
			<tr>
				<td>Disponibilité</td>
				<td>Tous les appareils du même écosystème</td>
				<td>Un seul appareil</td>
			</tr>
			<tr>
				<td>Récupération</td>
				<td>Via le compte cloud</td>
				<td>Perdue si l'appareil est perdu</td>
			</tr>
			<tr>
				<td>Sécurité</td>
				<td>Dépend du compte cloud</td>
				<td>Isolation maximale</td>
			</tr>
			<tr>
				<td>Exemple</td>
				<td>Apple Passkeys, Google Passkeys</td>
				<td>YubiKey, Windows Hello</td>
			</tr>
		</tbody>
	</table>
	<SpeakerNotes>
		Un point important à comprendre : toutes les passkeys ne se valent pas. Il existe deux grandes
		catégories. Les passkeys synchronisées sont stockées dans le cloud de votre écosystème —
		iCloud Keychain pour Apple, Google Password Manager pour Android/Chrome. Elles sont disponibles
		sur tous vos appareils, ce qui est pratique mais implique de faire confiance au fournisseur
		cloud. Les passkeys device-bound, elles, restent sur un seul appareil — comme une YubiKey.
		C'est plus sécurisé en théorie, mais si vous perdez l'appareil, vous perdez la passkey. Pour
		la plupart des usages grand public, ce sont les passkeys synchronisées qui sont déployées.
	</SpeakerNotes>
</Slide>
