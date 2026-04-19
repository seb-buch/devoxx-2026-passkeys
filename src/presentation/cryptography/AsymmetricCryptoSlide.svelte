<script>
	import Slide from '$lib/Slide.svelte';
	import CryptoKey from './common/CryptoKey.svelte';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';

	const keySize = '150px';
</script>

<Slide>
  <h3>Cryptographie asymétrique</h3>

  <VerticalSpacer height="2em" />

  <p>Une paire de clés liées:</p>
  <CryptoKey type="pair" size={keySize} orientation="vertical" />

  <div class="moustache">
    <div></div>
    <div></div>
  </div>

  <div class="key-container">
    <div class="key-presentation">
      <CryptoKey type="private" size={keySize} />
      <p class="key-type">Clé privée</p>
      <p class="key-description">Secrète et non partagée</p>
    </div>
    <div class="key-presentation">
      <CryptoKey type="public" size={keySize} />
      <p class="key-type">Clé publique</p>
      <p class="key-description">Partagée publiquement</p>
    </div>
  </div>
  <SpeakerNotes>
    <p>
      Pour s'authentifier sans mot de passe, une des piste est d'utiliser la cryptographie asymètrique qui repose sur une paire de clés:<br/>
      une clé privée qui reste absolument secrète et qu'on ne partage sous aucun prétexte avec personne.<br/>
      Et une clé publique qui, elle, peut, et même, doit être partagée publiquement.<br/>
      On ne va pas rentrer dans des détails cryptographiques ici, car ce n'est pas le sujet ici (et je n'ai de toute façon pas les compétences pour le faire).<br/>
      En revanche, je vous propose de voir comment ça fonctionne en pratique.
    </p>
  </SpeakerNotes>
</Slide>

<style>
  .key-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;

    .key-presentation {
      p.key-type {
        font-weight: bold;
        font-size: 1.2em;
      }

      p.key-description {
        font-size: 1em;
      }
    }
  }

  .moustache {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5em 0;

    --height: 30px;
    --width: 500px;
    --line-color: #17395c;

    div {
      border: var(--line-color) 5px solid;
    }

    div:first-child {
      width: 5px;
      border: none;
      background: var(--line-color);
      height: var(--height);
    }
    div:nth-child(2) {
      width: var(--width);
      height: var(--height);
      background: none;
      border-bottom: none;
    }
  }
</style>
