<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
  <h3>Sous le capot de KrabsVault</h3>
  <div class="tech-stack">
    <div class="tech-category fragment">
      <h4>Application</h4>
      <div class="tech-item">
        <span class="badge">🐍 Python 3.14</span>
        <span class="badge">⚡ FastAPI</span>
        <span class="badge">🌐 HTML / CSS / JS</span>
      </div>
    </div>
    <div class="tech-category fragment">
      <h4>Passkeys</h4>
      <div class="tech-item">
        <span class="badge">🔑 py_webauthn</span>
        <span class="badge">🔑 Web Authentication API</span>
      </div>
    </div>
  </div>
  <SpeakerNotes>
    <p>
      Avant de plonger dans le code, un rapide aperçu de la stack.<br />
      Krabsvault est une application Python 3.14 et utilise le framework FastAPI à la fois pour le backend
      et pour servir le frontend qui lui n'utilise aucun framework et s'appuie uniquement sur HTML, CSS
      et JavaScript.<br />
      Ça c'est pour la description très générale de l'application.<br />
      Mais le but, aujourd'hui, c'est surtout de voir comment fonctionne l'authentification par passkeys
      et son implémentation.<br />
      Concrètement, côté serveur, on va s'appuyer sur py_webauthn : c'est la lib Python de référence pour
      WebAuthn, et c'est elle qui fera le gros du travail pour les passkeys.<br />
      Pour le frontend, ce sera encore plus simple puisque tous les navigateurs modernes mettent à disposition
      l'API de référence pour les passkeys et décrite dans les spécification que l'on verra juste après.
    </p>
  </SpeakerNotes>
</Slide>

<style>
  .tech-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    margin-top: 3em;
    font-size: 1.5em;
  }

  .tech-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }

  .tech-category h4 {
    margin: 0;
  }

  .tech-item {
    display: flex;
    gap: 1em;
  }
</style>
