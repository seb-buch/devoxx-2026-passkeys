<script lang="ts">
	import Slide from '$lib/Slide.svelte';
	import RightArrow from './common/RightArrow.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import CryptoKey from './common/CryptoKey.svelte';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';
	import User from './common/User.svelte';
	import PlainDocument from './common/PlainDocument.svelte';
	import './common/signing.css';

	const documentSize = 256;
</script>

<Slide>
  <h3>Cryptographie asymétrique &ndash; Signature &amp; Authentification</h3>

  <VerticalSpacer height="1em" />

  <div class="container">
    <div class="crypto-user">
      <User size="150" shirtColor="#d2745b" />
      <CryptoKey type="pair" size="128" />
    </div>
    <div class="fragment custom bob-document" data-fragment-index="1">
      <PlainDocument size={documentSize} />
    </div>
    <div class="crypto-action">
      <div class="alice-private-key fragment" data-fragment-index="2">
        <CryptoKey type="private" size="150" />
      </div>
      <div class="arrow fragment" data-fragment-index="2">
        <RightArrow />
      </div>
      <p class="description fragment" data-fragment-index="2">Signature<br />(Clé privée)</p>
    </div>
    <div class="fragment" data-fragment-index="3">
      <PlainDocument size={documentSize} state="signed" />
    </div>
  </div>

  <div class="container">
    <div class="crypto-user">
      <User size="150" name="Bob" />
      <div class="fragment alice-key" data-fragment-index="4">
        <CryptoKey type="public" size="128" />
      </div>
    </div>
    <div class="fragment bob-document-signed" data-fragment-index="4">
      <PlainDocument size={documentSize} state="signed" />
    </div>
    <div class="crypto-action">
      <div class="fragment bob-verification-key" data-fragment-index="5">
        <CryptoKey type="public" size="150" />
      </div>
      <div class="arrow fragment" data-fragment-index="5">
        <RightArrow />
      </div>
      <p class="description fragment" data-fragment-index="5">Vérification<br />(Clé publique)</p>
    </div>
    <div class="fragment" data-fragment-index="6">
      <PlainDocument size={documentSize} state="verified" />
    </div>
  </div>
  <p class="fragment" data-fragment-index="7">
    Bob a authentifié Alice sans partager de secret&nbsp;!
  </p>

  <SpeakerNotes>
    Voici Alice et Bob (l'ami d'Alice pas l'éponge)!
    Disons que Bob veut communiquer avec Alice, mais il veut être sûr que c'est bien elle.<br/>
    Pour cela, Bob va envoyer un document à Alice.<br/>
    Elle, va utiliser sa clé privée pour signer le document.<br/>
    Puis, elle va envoyer le document signé à Bob, ainsi que sa clé publique (que Bob peut de toute façon récupérer par ailleurs puisqu'elle est justement publique!).<br/>
    Bob va utiliser la clé publique d'Alice pour vérifier la signature du document.<br/>
    Si la signature est valide, Bob peut être sûr que le document provient bien d'Alice.<br/>
    Bob a donc réussi à authentifier Alice, sans qu'aucun partage de secret n'ait lieu.
  </SpeakerNotes>
</Slide>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 2em 0;

    .crypto-user,
    .crypto-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .crypto-action {
      .arrow {
        margin: -20px 0;
      }

      .description {
        margin: 0;
        font-size: 0.7em;
        font-weight: bold;
        color: var(--r-main-color);
      }
    }
  }
</style>
