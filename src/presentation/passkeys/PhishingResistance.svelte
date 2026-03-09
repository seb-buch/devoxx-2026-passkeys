<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Pourquoi c'est résistant au phishing — le rôle de l'origin</h2>
	<table>
		<thead>
			<tr>
				<th>Mot de passe</th>
				<th>Passkey</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>L'utilisateur saisit → le navigateur envoie quel que soit le domaine</td>
				<td>Le navigateur vérifie l'origin (rpId) avant d'utiliser la passkey</td>
			</tr>
			<tr>
				<td>✅ krabsvault.com<br />✅ krabsvau<strong>1</strong>t.com → phishing possible</td>
				<td>✅ krabsvault.com<br />❌ krabsvau<strong>1</strong>t.com → navigateur refuse</td>
			</tr>
		</tbody>
	</table>
	<p>
		<strong
			>L'origin (rpId) est vérifiée par le navigateur, pas par l'utilisateur. C'est la protection
			contre le phishing.</strong
		>
	</p>
	<SpeakerNotes>
		Et voici le point clé de cette présentation. Pourquoi les passkeys empêchent-elles le phishing ?
		Parce que lors de l'enregistrement, la passkey est liée à un domaine précis — ce qu'on appelle
		le Relying Party ID. Quand le navigateur doit utiliser une passkey, il vérifie automatiquement
		que le domaine du site correspond au rpId enregistré. Si Bob se retrouve sur krabsvau1t.com, le
		navigateur ne trouvera tout simplement aucune passkey correspondante. Pas de prompt biométrique,
		pas d'erreur cryptique — juste… rien. L'attaque échoue silencieusement. La vérification est
		faite par le navigateur, pas par l'humain. Et c'est ça qui change tout.
	</SpeakerNotes>
</Slide>
