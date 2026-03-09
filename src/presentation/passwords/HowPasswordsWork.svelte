<script>
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
	<h2>Authentification par mot de passe</h2>

	<svg
		viewBox="0 0 900 390"
		class="diagram"
		aria-label="Diagramme d'authentification par mot de passe"
	>
		<defs>
			<marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
				<polygon points="0 0, 8 3, 0 6" fill="#4a90d9" />
			</marker>
			<marker
				id="arrowhead-return"
				markerWidth="8"
				markerHeight="6"
				refX="7"
				refY="3"
				orient="auto"
			>
				<polygon points="0 0, 8 3, 0 6" fill="#7ecfb3" />
			</marker>
		</defs>

		<!-- ══ ACTEURS (toujours visibles) ══ -->

		<!-- Bob / Navigateur -->
		<rect x="5" y="5" width="145" height="62" rx="7" class="actor-box" />
		<text x="77" y="28" class="actor-emoji">🧑</text>
		<text x="77" y="46" class="actor-name">Navigateur</text>
		<text x="77" y="60" class="actor-sub">(Bob)</text>
		<line x1="77" y1="67" x2="77" y2="315" class="lifeline" />

		<!-- Serveur -->
		<rect x="377" y="5" width="145" height="62" rx="7" class="actor-box" />
		<text x="450" y="28" class="actor-emoji">🖥️</text>
		<text x="450" y="52" class="actor-name">Serveur</text>
		<line x1="450" y1="67" x2="450" y2="315" class="lifeline" />

		<!-- Base de données -->
		<rect x="750" y="5" width="145" height="62" rx="7" class="actor-box" />
		<text x="822" y="24" class="actor-emoji">🗄️</text>
		<text x="822" y="44" class="actor-name">Base de</text>
		<text x="822" y="58" class="actor-name">données</text>
		<line x1="822" y1="67" x2="822" y2="315" class="lifeline" />

		<!-- ══ ÉTAPE 1 : Bob envoie ses identifiants ══ -->
		<g class="fragment" data-fragment-index="0">
			<circle cx="77" cy="103" r="12" class="step-bubble" />
			<text x="77" y="108" class="step-num">1</text>
			<line x1="89" y1="103" x2="432" y2="103" class="arrow-fwd" marker-end="url(#arrowhead)" />
			<text x="263" y="96" class="arrow-label">identifiant + mot de passe</text>
		</g>

		<!-- ══ ÉTAPE 2 : Serveur interroge la BDD ══ -->
		<g class="fragment" data-fragment-index="1">
			<circle cx="450" cy="150" r="12" class="step-bubble" />
			<text x="450" y="155" class="step-num">2</text>
			<line x1="462" y1="150" x2="804" y2="150" class="arrow-fwd" marker-end="url(#arrowhead)" />
			<text x="636" y="143" class="arrow-label">SELECT hash WHERE id = ?</text>
		</g>

		<!-- ══ ÉTAPE 3 : BDD renvoie le hash ══ -->
		<g class="fragment" data-fragment-index="2">
			<circle cx="822" cy="195" r="12" class="step-bubble-ret" />
			<text x="822" y="200" class="step-num-ret">3</text>
			<line
				x1="810"
				y1="195"
				x2="468"
				y2="195"
				class="arrow-ret"
				marker-end="url(#arrowhead-return)"
			/>
			<text x="636" y="188" class="arrow-label-ret">hash stocké</text>
		</g>

		<!-- ══ ÉTAPE 4 : Serveur compare les hash ══ -->
		<g class="fragment" data-fragment-index="3">
			<rect x="368" y="220" width="164" height="46" rx="5" class="process-box" />
			<text x="450" y="238" class="process-label">hash(mot de passe)</text>
			<text x="450" y="254" class="process-label">== hash stocké ?</text>
			<circle cx="368" cy="220" r="12" class="step-bubble" />
			<text x="368" y="225" class="step-num">4</text>
		</g>

		<!-- ══ ÉTAPE 5 : Session créée ══ -->
		<g class="fragment" data-fragment-index="4">
			<circle cx="450" cy="295" r="12" class="step-bubble-ret" />
			<text x="450" y="300" class="step-num-ret">5</text>
			<line
				x1="438"
				y1="295"
				x2="95"
				y2="295"
				class="arrow-ret"
				marker-end="url(#arrowhead-return)"
			/>
			<text x="263" y="288" class="arrow-label-ret">✓ Session créée (cookie / JWT)</text>
		</g>

		<!-- ══ AVERTISSEMENT ══ -->
		<g class="fragment" data-fragment-index="5">
			<rect x="5" y="330" width="890" height="52" rx="7" class="warning-box" />
			<text x="450" y="351" class="warning-text">
				⚠️ Le mot de passe est un
				<tspan font-weight="bold" fill="#ffcc44">secret partagé</tspan>
				— il existe
			</text>
			<text x="450" y="371" class="warning-text"
				>chez l'utilisateur <tspan font-style="italic">et</tspan> sur le serveur.</text
			>
		</g>
	</svg>

	<SpeakerNotes>
		Quand Bob se connecte, voici ce qui se passe : le navigateur envoie son identifiant et son mot
		de passe au serveur. Le serveur, lui, a stocké un hash de ce mot de passe. Il compare les deux,
		et si ça correspond, il crée une session. C'est le modèle qu'on utilise depuis des décennies. Le
		point fondamental ici, c'est que le secret — le mot de passe — est un secret partagé. Le serveur
		en a une copie, l'utilisateur en a une copie dans sa tête. Et c'est précisément là que les
		problèmes commencent.
	</SpeakerNotes>
</Slide>

<style>
	.diagram {
		width: 100%;
		height: auto;
		max-height: 68vh;
		display: block;
		margin: 0 auto;
	}

	/* Acteurs */
	.actor-box {
		fill: #0d1b35;
		stroke: #4a90d9;
		stroke-width: 2;
	}

	.actor-emoji {
		font-size: 18px;
		text-anchor: middle;
	}

	.actor-name {
		font-size: 13px;
		font-weight: bold;
		text-anchor: middle;
		fill: #c8dff0;
	}

	.actor-sub {
		font-size: 11px;
		text-anchor: middle;
		fill: #7a9ab8;
	}

	/* Lignes de vie */
	.lifeline {
		stroke: #4a90d9;
		stroke-width: 1.5;
		stroke-dasharray: 5, 5;
		opacity: 0.4;
	}

	/* Flèches aller (→) */
	.arrow-fwd {
		stroke: #4a90d9;
		stroke-width: 2;
	}

	.arrow-label {
		font-size: 12px;
		text-anchor: middle;
		fill: #6ba3b9;
	}

	/* Flèches retour (←) */
	.arrow-ret {
		stroke: #7ecfb3;
		stroke-width: 2;
	}

	.arrow-label-ret {
		font-size: 12px;
		text-anchor: middle;
		fill: #7ecfb3;
	}

	/* Cercles numérotés */
	.step-bubble {
		fill: #4a90d9;
	}

	.step-num {
		font-size: 12px;
		font-weight: bold;
		text-anchor: middle;
		fill: white;
	}

	.step-bubble-ret {
		fill: #2a7a60;
	}

	.step-num-ret {
		font-size: 12px;
		font-weight: bold;
		text-anchor: middle;
		fill: white;
	}

	/* Boîte de traitement */
	.process-box {
		fill: #111d33;
		stroke: #4a90d9;
		stroke-width: 1.5;
		stroke-dasharray: 5, 3;
	}

	.process-label {
		font-size: 11px;
		text-anchor: middle;
		fill: #c8dff0;
	}

	/* Avertissement */
	.warning-box {
		fill: #2a1500;
		stroke: #e8a020;
		stroke-width: 2;
	}

	.warning-text {
		font-size: 13px;
		text-anchor: middle;
		fill: #f0c060;
	}
</style>
