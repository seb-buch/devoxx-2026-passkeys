<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>🎬 DÉMO</h2>
	<h3>Plankton réessaie son attaque phishing</h3>
	<p><em>Spoiler : ça ne marche plus.</em></p>
	<SpeakerNotes>
		Maintenant, le moment de vérité. Plankton réessaie son attaque. Il renvoie son faux email, Bob
		clique sur le lien vers krabsvau1t.com… (Démo live : sur le faux site, tentative
		d'authentification par passkey. Le navigateur ne trouve aucune passkey correspondante pour ce
		domaine. L'authentification échoue.) Et voilà : le navigateur ne trouve aucune passkey pour ce
		domaine. Pas d'empreinte demandée, pas de clé utilisée. L'attaque est morte dans l'œuf. C'est
		la vérification de l'origin par le navigateur qui fait tout le travail, sans que Bob n'ait
		besoin de vérifier quoi que ce soit lui-même.
	</SpeakerNotes>
</Slide>
