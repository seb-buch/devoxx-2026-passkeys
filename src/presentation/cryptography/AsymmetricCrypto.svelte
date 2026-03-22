<script>
  import Slide from '$lib/Slide.svelte';
  import CryptoKey from './common/CryptoKey.svelte';
  import VerticalSpacer from '$lib/VerticalSpacer.svelte';

  const keySize = '150px';
</script>

<Slide>
  <h3>Cryptographie asymétrique</h3>

  <VerticalSpacer height="1em" />

  <p>Une paire de clés liées:</p>

  <div class="key-description">
    <CryptoKey type="private" size={keySize} />
    <p class="private-key">Clé privée</p>
    <ul>
      <li>Signer un message</li>
      <li>
        Déchiffrer un message
        <span class="key-usage-details">
          chiffré avec la clé <span class="public-key">publique</span>
        </span>
      </li>
    </ul>
  </div>

  <div class="key-description">
    <CryptoKey type="public" size={keySize} />
    <p class="public-key">Clé publique</p>
    <ul>
      <li>
        Verifier la signature d'un message
        <span class="key-usage-details">
          signé avec la clé <span class="private-key">privée</span>
        </span>
      </li>
      <li>Chiffrer un message</li>
    </ul>
  </div>
</Slide>

<style>
  .key-description {
    &:not(:first-of-type) {
      padding-top: 1em;
    }

    & > p {
      margin-top: -30px;
      font-weight: bold;
      font-size: 1.2em;
    }

    & .private-key {
      color: #d4a800;
    }
    & .public-key {
      color: #70a08d;
    }

    & ul {
      list-style-type: none;
      padding: 0;
      text-align: center;
    }

    & .key-usage-details {
      font-size: 0.8em;
      font-style: italic;
      color: #888;
    }
  }
</style>
