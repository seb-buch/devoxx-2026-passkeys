<script lang="ts">
	import Slide from '$lib/Slide.svelte';
	import SpeakerNotes from '$lib/SpeakerNotes.svelte';
	import Document from './common/Document.svelte';
	import User from './common/User.svelte';
	import CryptoKey from './common/CryptoKey.svelte';
	import RightArrow from './common/RightArrow.svelte';
	import Lock from './common/Lock.svelte';
	import VerticalSpacer from '$lib/VerticalSpacer.svelte';

	const documentSize = 256;
  const plainMessage = "Salut, Je suis à Devoxx France!";
  const cipherMessage = 'AWSzCjRcZ5fKYol9DKozQdVNpX4fxArYS6RtH78KoL4';
</script>

<Slide autoAnimate>
  <h3>Cryptographie asymétrique &ndash; Chiffrement</h3>

  <VerticalSpacer height="1em"/>

  <div class="container">
    <div class="crypto-user">
      <User size="150" name="Bob"/>
      <CryptoKey type="public" size="128" />
    </div>
    <div class="fragment" data-fragment-index="1">
      <Document size={documentSize} text={plainMessage} />
    </div>
    <div class="crypto-action fragment" data-fragment-index="2">
      <div class="lock">
        <Lock size="150" state="locking"/>
      </div>
      <div class="arrow">
        <RightArrow />
      </div>
      <p class="description">Chiffrement<br/>(Clé publique)</p>
    </div>
    <div class="fragment" data-fragment-index="3">
      <Document size={documentSize} text={cipherMessage} />
    </div>
  </div>

  <div class="container">
    <div class="crypto-user">
      <User size="150" shirtColor="#d2745b"/>
      <CryptoKey type="pair" size="128" />
    </div>
    <div class="fragment" data-fragment-index="4">
      <Document size={documentSize} text={cipherMessage} />
    </div>
    <div class="crypto-action fragment" data-fragment-index="5">
      <div class="lock">
        <Lock size="150" state="unlocking"/>
      </div>
      <div class="arrow">
        <RightArrow />
      </div>
      <p class="description">Déchiffrement<br/>(Clé privée)</p>
    </div>
    <div class="fragment" data-fragment-index="6">
      <Document size={documentSize} text={plainMessage} />
    </div>
  </div>

  <SpeakerNotes>
    TODO
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

    .crypto-user, .crypto-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .crypto-action{
      .lock {
        padding-right: 30px;
      }
      .arrow{
        margin: -20px 0 ;
      }

      .description{
        margin: 0 ;
        font-size: 0.7em;
        font-weight: bold;
        color: #0d1b2a;
      }
    }


  }
</style>
