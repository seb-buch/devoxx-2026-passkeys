# CLAUDE.md — Présentation Devoxx France 2026

## Contexte de la présentation

**Titre :** Passkeys : Adieu les mots de passe, bonjour la sécurité sans friction !
**Format :** Tools in Action (30 minutes)
**Conférence :** Devoxx France 2026 — 22-24 avril 2026
**Speaker :** Sébastien Buchoux
**Niveau annoncé :** Intermédiaire
**Public :** Développeurs (tous profils — pas uniquement Java/backend)

**Objectif :** Expliquer ce que sont les passkeys, comment elles fonctionnent techniquement (FIDO2, WebAuthn, crypto asymétrique, challenge/réponse), et montrer une implémentation concrète. Convaincre que les passkeys sont un vrai changement de paradigme, pas "un mot de passe de plus".

---

## Fil rouge narratif

Le personnage principal est **Bob** (Bob l'éponge), cuisinier au Krusty Krab à Bikini Bottom. La recette secrète du Krabby Patty est stockée dans un **vault numérique** (KrabsVault), une app développée par **M. Krabs** lui-même. Bob se connecte habituellement avec un mot de passe. **Plankton** tente de voler la recette via du phishing. M. Krabs riposte en ajoutant les passkeys à KrabsVault.

**Arc narratif :**

1. Bob et KrabsVault → intro à l'auth par mot de passe
2. Plankton phishe Bob → problèmes du mot de passe
3. M. Krabs code les passkeys → concepts + implémentation
4. Conclusion → bilan et nuances

---

## Architecture technique

La présentation est un site **SvelteKit** qui render **reveal.js**. Chaque slide est un **composant Svelte indépendant** (`src/presentation/<section>/<Nom>.svelte`).

### Fichiers clés

| Fichier                                      | Rôle                                                           |
|----------------------------------------------|----------------------------------------------------------------|
| `src/presentation/Presentation.svelte`       | Orchestre tous les slides (import + ordre)                     |
| `src/lib/Slide.svelte`                       | Wrapper de chaque slide (`<section>` reveal.js)                |
| `src/lib/Code.svelte`                        | Bloc de code avec syntax highlighting                          |
| `src/lib/SpeakerNotes.svelte`                | Notes de speaker (`<aside class="notes">`)                     |
| `src/lib/VerticalSpacer.svelte`              | Espaceur vertical (prop `height` en CSS)                       |
| `src/lib/terminal/Terminal.svelte`           | UI terminal mockup                                             |
| `src/lib/terminal/TerminalPromptLine.svelte` | Ligne de commande shell                                        |
| `src/lib/terminal/TerminalStdout.svelte`     | Sortie terminal                                                |
| `src/presentation/common/FlowDiagram.svelte` | Diagramme de séquence réutilisable (acteurs + flèches animées) |
| `src/presentation/Todo.svelte`               | Badge rouge "Diapo à finir!" (WIP)                             |
| `src/presentation/assets/styles.css`         | Thème CSS complet (~620 lignes)                                |

### Structure des sections (Presentation.svelte)

```
Title (standalone)
Who (standalone)
<section> Bob → KrabsVaultIntro → DemoPasswordLogin → HowPasswordsWork → PasswordProblems
<section> Plankton → PhishingMechanism → DemoPhishing → MrKrabsReaction
<section> WhatIsPasskey → AsymmetricCrypto → Ecosystem → Actors → RegistrationFlow → AuthenticationFlow → PhishingResistance
<section> MrKrabsCodes → ServerRegistration → ClientRegistration → ServerRegistrationVerification → DemoRegistration → ServerAuthentication → ClientAuthentication → DemoAuthentication → DemoPhishingFails
<section> SyncVsDeviceBound → Limits → PasswordsNotDead → KeyTakeaways → Resources → Thanks
```

Les slides dans un même `<section>` sont en **navigation verticale**. Les sections sont en navigation horizontale.

---

## Composants disponibles

### `Slide.svelte` — Wrapper obligatoire

Chaque slide commence et finit par `<Slide>`. Props optionnelles :

```svelte
<Slide
  transitionStyle="fade"           <!-- none | fade | slide | convex | concave | zoom -->
  autoAnimate={true}               <!-- true = reveal.js auto-animate entre slides adjacentes -->
  autoAnimateID="mon-groupe"       <!-- pour grouper des slides auto-animate -->
  autoAnimateRestart={true}        <!-- redémarre le groupe auto-animate -->
  backgroundImage="/images/foo.png"
  backgroundSize="cover"           <!-- cover | contain | auto -->
  backgroundPosition="center"
  backgroundColor="#003459"
>
```

### `Code.svelte` — Blocs de code

```svelte
<Code
  language="typescript"    <!-- typescript | javascript | svelte | html | bash | json | ... -->
  fontSize="0.55em"        <!-- ajuster si le code est long -->
  lineNumbers={true}       <!-- afficher les numéros de ligne -->
  lineNumbersFrom={42}     <!-- commencer les numéros à partir de N (utile pour extraits) -->
  trim={true}              <!-- strip whitespace autour (défaut true) -->
>
  {`// le code ici (backtick template literal)`}
</Code>
```

### `Terminal.svelte` — Mockup terminal

```svelte
<Terminal headerTitle="KrabsVault — bash" theme="dark">
  <TerminalPromptLine username="bob" hostname="bikini-bottom" pwd="~/vault">
    curl http://localhost:5173/api/passkey/register-options
  </TerminalPromptLine>
  <TerminalStdout isFragment={true}>{"challenge": "abc123..."}</TerminalStdout>
</Terminal>
```

`isFragment={true}` sur `TerminalPromptLine` ou `TerminalStdout` → la ligne apparaît progressivement.

### `SpeakerNotes.svelte` — Notes de speaker

À placer en dernier dans chaque `<Slide>`. Le contenu est du texte/markdown pour le speaker.

### `VerticalSpacer.svelte`

```svelte
<VerticalSpacer height="2em" />
```

---

## Design system

### Palette de couleurs

| Variable / Classe | Valeur    | Usage                         |
|-------------------|-----------|-------------------------------|
| `--ocean-deep`    | `#003459` | Titres H2, éléments primaires |
| `--sponge-yellow` | `#D4A800` | Accents, highlights           |
| `--sea-green`     | `#007A6A` | Succès, sécurité              |
| `--danger-red`    | `#C0392B` | Danger, phishing              |
| `--sand-brown`    | `#C8A96A` | Décoratif                     |
| `--bg-alice`      | `#F0F8FF` | Fond slide (par défaut)       |

### Typographie

- Titres : `Paytone One` (bold, distinctif)
- Corps : `Nunito` (lisible)
- Code : `Fira Code` (monospace)

### Fragments reveal.js (animations progressives)

Ajouter `class="fragment"` sur n'importe quel élément pour le révéler à l'avancement :

```svelte
<li class="fragment">Ce point apparaît au clic suivant</li>
<li class="fragment" data-fragment-index="2">Apparaît en 3ème</li>

<!-- Effets disponibles -->
<p class="fragment fade-in">...</p>
<p class="fragment highlight-current-blue">...</p>
<p class="fragment fade-out">...</p>
```

Dans les SVG, utiliser `<g class="fragment" data-fragment-index="0">` pour animer des groupes.

---

## Principes de création de slides

### Philosophie générale

- **Épuré** : 1 idée centrale par slide. Pas de slides surchargées.
- **Vivantes** : utiliser des fragments pour révéler progressivement, des SVG animés pour les diagrammes, des composants Svelte interactifs quand pertinent.
- **Cohérentes** : respecter le fil narratif SpongeBob, utiliser les personnages comme ancres visuelles.
- **Pas un PDF glorifié** : les animations et transitions doivent servir la compréhension, pas juste décorer.

### Règles de contenu

- **Langue des slides : FRANÇAIS**
- **Langue du code : ANGLAIS** (les exemples de code sont tirés de KrabsVault)
- Les notes de speaker (`<SpeakerNotes>`) sont en français
- Émojis autorisés dans les listes et titres (cohérent avec le thème)
- Maximum 4-5 bullets par slide. Préférer 3.

### Patterns de slides courants

**Slide de définition/concept :**

```svelte
<Slide>
  <h2>Titre du concept</h2>
  <p>Une phrase d'introduction concise.</p>
  <ul>
    <li class="fragment">🔑 Premier point clé</li>
    <li class="fragment">🌐 Deuxième point clé</li>
    <li class="fragment">👆 Troisième point clé</li>
  </ul>
  <SpeakerNotes>...</SpeakerNotes>
</Slide>
```

**Slide de diagramme de séquence :**
Utiliser `<FlowDiagram>` (`src/presentation/common/FlowDiagram.svelte`). Modèle d'usage :

```svelte
<script>
  import FlowDiagram from '../common/FlowDiagram.svelte';
  import browserIcon from '../assets/images/browser.png';
  import serverIcon from '../assets/images/server.png';

  const flowDiagram = {
    title: 'Titre accessible du diagramme',
    streamLines: [
      { iconPath: browserIcon, name: 'Navigateur' },
      { iconPath: serverIcon, name: 'Serveur' }
    ],
    steps: [
      { from: 0, to: 1, label: 'requête →' }, // CommunicationStep (bleu si to>from, vert sinon)
      { from: 1, to: 0, label: '← réponse' }, // CommunicationStep retour
      { location: 1, label: 'Traitement interne' } // ComputeStep (boîte pointillée)
    ]
  };
</script>

<FlowDiagram {flowDiagram} diagramStyle={{ stepHeight: 80 }} useFragment={true} />
```

Props de `diagramStyle` (toutes optionnelles) : `streamWidth` (défaut 300), `stepHeight` (défaut 60), `streamHeaderIconSize` (défaut 40), `streamHeaderLineHeight` (défaut 40).

**Slide de code :**

```svelte
<Slide>
  <h2>Titre — contexte</h2>
  <Code language="typescript" fontSize="0.55em" lineNumbers={true}>
    {`// extrait de krabsvault
const options = await generateRegistrationOptions({...});`}
  </Code>
  <SpeakerNotes>...</SpeakerNotes>
</Slide>
```

**Slides auto-animate (transition fluide entre états) :**

```svelte
<!-- Slide A -->
<Slide autoAnimate={true} autoAnimateID="demo-group">
  <h2>État initial</h2>
  <code>valeur: false</code>
</Slide>

<!-- Slide B — reveal.js anime automatiquement les éléments communs -->
<Slide autoAnimate={true} autoAnimateID="demo-group">
  <h2>État final</h2>
  <code>valeur: true</code>
</Slide>
```

**Slide narrative avec image personnage :**

```svelte
<Slide backgroundImage="/images/krusty-krab-bg.jpg" backgroundSize="cover">
  <div class="character-layout">
    <img src="/images/bob.png" alt="Bob" />
    <div>
      <h2>Bob a un problème</h2>
      <p class="fragment">Plancton a volé son mot de passe !</p>
    </div>
  </div>
</Slide>
```

---

## Application de démo : KrabsVault

KrabsVault est l'application SvelteKit de démo qui tourne en parallèle de la présentation.

**Chemin :** `../krabsvault/main/apps/vault/`
**Stack :** SvelteKit 2 + Svelte 5 + TypeScript + SQLite (Bun) + SimpleWebAuthn v13
**Utilisateur démo :** `bob` (mot de passe via `BOB_PASSWORD` env var)

### Routes de l'app

| Route             | Description                                                         |
|-------------------|---------------------------------------------------------------------|
| `/`               | Dashboard KrabsVault (accès à la recette)                           |
| `/login`          | Login password ET passkey                                           |
| `/communications` | Visualisation temps réel des événements d'auth (très utile en démo) |
| `/demo-admin`     | Contrôles de démo                                                   |

### Fichiers clés à montrer dans les slides

**Côté serveur — génération des options (enregistrement) :**

```
src/routes/api/passkey/register-options/+server.ts
```

**Côté serveur — vérification de l'attestation :**

```
src/routes/api/passkey/register-verify/+server.ts
```

**Côté serveur — génération des options (authentification) :**

```
src/routes/api/passkey/auth-options/+server.ts
```

**Côté serveur — vérification de l'assertion :**

```
src/routes/api/passkey/auth-verify/+server.ts
```

**Côté client — appels WebAuthn depuis le navigateur :**

```
src/routes/login/+page.svelte
```

(chercher `startRegistration()` et `startAuthentication()` de `@simplewebauthn/browser`)

**Repository passkeys + gestion des challenges :**

```
src/lib/server/passkey.ts
```

**Événements des flows (pour expliquer les étapes) :**

```
src/lib/events/passkey-registration-events.ts
src/lib/events/passkey-authentication-events.ts
```

### Architecture d'events SSE

KrabsVault émet des **Server-Sent Events** à chaque étape des flows d'authentification. La page `/communications` les affiche en temps réel. C'est un outil pédagogique clé : pendant la démo, on peut voir en direct ce qui se passe côté serveur.

---

## Images disponibles

Les images sont dans `src/presentation/assets/images/` et `static/`. Vérifier les fichiers disponibles avant de référencer une image. Les images SpongeBob/Krusty Krab sont utilisées pour illustrer le fil narratif.

---

## Workflow pour créer ou modifier un slide

1. **Identifier** la section (`introduction/`, `passwords/`, `phishing/`, `passkeys/`, `implementation/`, `conclusion/`)
2. **Lire** les slides adjacentes pour comprendre le contexte narratif
3. **Créer ou modifier** le fichier `.svelte` dans le bon dossier
4. **Vérifier** que le composant est importé dans `Presentation.svelte` et au bon endroit
5. **Ajouter `<SpeakerNotes>`** avec les points clés pour le speaker
6. Pour les slides complexes, **utiliser `<Todo />`** comme placeholder en cours de développement

## Workflow pour améliorer un slide existant

1. **Lire** le slide actuel
2. **Identifier** ce qui manque : contenu, animation, clarté visuelle, notes speaker
3. Appliquer les patterns ci-dessus
4. Si un diagramme statique peut devenir animé (fragments SVG), le faire
5. Garder la densité faible : si un slide a trop d'infos, envisager de le découper

---

## Ce qu'il faut éviter

- ❌ Slides sans `<SpeakerNotes>` (le speaker en a besoin)
- ❌ Plus de 5 éléments de liste par slide
- ❌ Code sans contexte (`h2` explicatif obligatoire)
- ❌ Animations gratuites qui ne servent pas la narration
- ❌ Slides en anglais (sauf les blocs de code)
- ❌ Créer un nouveau composant réutilisable pour un usage unique (préférer inline)
- ❌ Modifier `Presentation.svelte` sans vérifier l'ordre narratif
