<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import RightArrow from './common/RightArrow.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import CryptoKey from './common/CryptoKey.svelte';
  import VerticalSpacer from '$lib/VerticalSpacer.svelte';
  import User from './common/User.svelte';
  import PlainDocument from './common/PlainDocument.svelte';

  const documentSize = 256;
</script>

<Slide>
  <h3>Cryptographie asymétrique &ndash; Signature</h3>

  <VerticalSpacer height="1em" />

  <div class="container">
    <div class="crypto-user">
      <User size="150" shirtColor="#d2745b" />
      <CryptoKey type="pair" size="128" />
    </div>
    <div class="fragment" data-fragment-index="1">
      <PlainDocument size={documentSize} />
    </div>
    <div class="crypto-action fragment" data-fragment-index="2">
      <div>
        <CryptoKey type="private" size="150" />
      </div>
      <div class="arrow">
        <RightArrow />
      </div>
      <p class="description">Signature<br />(Clé privée)</p>
    </div>
    <div class="fragment" data-fragment-index="3">
      <PlainDocument size={documentSize} state="signed" />
    </div>
  </div>

  <div class="container">
    <div class="crypto-user">
      <User size="150" name="Bob" />
      <CryptoKey type="public" size="128" />
    </div>
    <div class="fragment" data-fragment-index="4">
      <PlainDocument size={documentSize} state="signed" />
    </div>
    <div class="crypto-action fragment" data-fragment-index="5">
      <div>
        <CryptoKey type="public" size="150" />
      </div>
      <div class="arrow">
        <RightArrow />
      </div>
      <p class="description">Vérification<br />(Clé publique)</p>
    </div>
    <div class="fragment" data-fragment-index="6">
      <PlainDocument size={documentSize} state="verified" />
    </div>
  </div>

  <SpeakerNotes>TODO</SpeakerNotes>
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
        color: #f5f5f5;
      }
    }
  }
</style>
