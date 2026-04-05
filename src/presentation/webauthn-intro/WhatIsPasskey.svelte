<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
  <h3>C'est quoi une <em>Passkey</em>&nbsp;?</h3>
  <ul class="w3c-terms">
    <li class="important">Passkey</li>
    <li>Client-side discoverable Public Key Credential Source</li>
    <li>Client-side discoverable Credential</li>
    <li>Discoverable Credential</li>
    <li class="deprecated">Resident Credential</li>
    <li class="deprecated">Resident Key</li>
  </ul>
  <p class="w3c-definition">
    <b>A Client-side discoverable Public Key Credential Source</b> [&hellip;] is a public key
    credential source that is discoverable and
    <b
      >usable in authentication ceremonies where the Relying Party does not provide any credential
      IDs</b
    >, i.e., the Relying Party invokes <code>navigator.credentials.get()</code> with an empty
    allowCredentials argument. This means that the Relying Party does not necessarily need to first
    identify the user.<br />
    <br />
    As a consequence, a discoverable credential capable
    <b
      >authenticator can generate an assertion signature for a discoverable credential given only an
      RP ID</b
    >, which in turn
    <b
      >necessitates that the public key credential source is stored in the authenticator or client
      platform</b
    >. This is in contrast to a Server-side Public Key Credential Source, which requires that the
    authenticator is given both the RP ID and the credential ID but does not require client-side
    storage of the public key credential source.
  </p>

  <p class="w3c-link">
    Source&nbsp;:
    <a href="https://w3c.github.io/webauthn/#client-side-discoverable-credential" target="_blank"
      >Spécifications Webauthn</a
    >
  </p>

  <p class="de-facto-definition fragment">
    Une <em>passkey</em> est un credential <em>Webauthn</em> géré par le navigateur (et l'<em
      >authenticator</em
    >
    ) qui identifie un utilisateur auprès d'un <em>Relying Party</em>.
  </p>
  <SpeakerNotes>TODO</SpeakerNotes>
</Slide>

<style>
  ul.w3c-terms {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
    list-style: none;
    margin-top: 2em;

    li {
      &:before {
        content: 'ou';
        font-size: 0.7em;
        padding: 0 0.6em 0 0;
        margin: 0;
        font-weight: normal;
      }
      &:first-child:before {
        content: '';
        padding: 0;
      }
      font-size: 0.9em;
      font-weight: bold;
      font-family: var(--r-code-font) monospace;

      &.deprecated {
        text-decoration: line-through;
      }

      &.important {
        text-decoration: underline;
      }
    }
  }

  .w3c-definition {
    font-size: 0.7em;
    font-style: italic;
    background: #e5e7eb;
    padding: 1em;
    border-radius: 1em;
    box-shadow: 0 0 0.5em #00000020;
    margin: 4em auto 1em;
  }

  .w3c-link {
    font-size: 0.5em;
    text-align: right;
  }

  .de-facto-definition {
    margin-top: 3em;
    font-weight: bold;
  }
</style>
