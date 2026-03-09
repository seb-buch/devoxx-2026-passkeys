<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Les mots de passe ne sont pas morts</h2>
	<table>
		<thead>
			<tr>
				<th>✅ Passkeys</th>
				<th>✅ Mots de passe</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Résistance au phishing</td>
				<td>Bootstrapping (première connexion)</td>
			</tr>
			<tr>
				<td>Pas de réutilisation</td>
				<td>Universalité</td>
			</tr>
			<tr>
				<td>Pas de secret partagé</td>
				<td>Indépendance vis-à-vis d'un écosystème</td>
			</tr>
			<tr>
				<td>UX simplifiée</td>
				<td>Récupération de compte</td>
			</tr>
		</tbody>
	</table>
	<p><strong>Les passkeys ne remplacent pas les mots de passe — elles les complètent.</strong></p>
	<SpeakerNotes>
		Et c'est pour ça que ma conclusion est mesurée. Les passkeys résolvent de vrais problèmes : le
		phishing, la réutilisation de mots de passe, le vol de credentials côté serveur. C'est un vrai
		changement de paradigme sur le plan technique. Mais les mots de passe ne sont pas à jeter. Ils
		restent nécessaires pour le bootstrapping — la première connexion avant l'enregistrement d'une
		passkey — et ils offrent une universalité que les passkeys n'ont pas encore. Aujourd'hui, la
		bonne approche, c'est de proposer les passkeys comme méthode d'authentification principale, tout
		en gardant le mot de passe comme méthode de repli. C'est exactement ce que fait KrabsVault, et
		c'est ce que je vous encourage à faire dans vos applications.
	</SpeakerNotes>
</Slide>
