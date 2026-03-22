<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
</script>

<Slide>
  <h2>Les limites des passkeys</h2>
  <ul>
    <li>
      🐔🥚 <strong>Œuf et poule</strong> — pour enregistrer une passkey, il faut d'abord être connecté
    </li>
    <li>
      📱 <strong>Dépendance à l'écosystème</strong> — portabilité limitée entre Apple / Google / Microsoft
    </li>
    <li>
      🔄 <strong>Récupération de compte</strong> — que faire si l'utilisateur perd tous ses appareils
      ?
    </li>
    <li>
      🖥️ <strong>Appareils partagés / publics</strong> — cross-device auth (QR/BLE) comme solution partielle
    </li>
    <li>
      🧑‍💼 <strong>Adoption</strong> — support quasi universel, mais UX encore hétérogène selon l'OS et
      le navigateur
    </li>
  </ul>
  <SpeakerNotes>
    Les passkeys ne sont pas parfaites, et il est important d'en être conscient. Premier problème :
    l'œuf et la poule. Pour enregistrer une passkey, il faut être connecté, et souvent, cette
    première connexion se fait avec un mot de passe. Ensuite, les passkeys synchronisées vous
    enferment dans un écosystème — passer d'Apple à Android n'est pas encore transparent. La
    récupération de compte reste un défi : si vous perdez tous vos appareils, comment retrouver
    l'accès ? Sur un ordinateur public ou partagé, vos passkeys ne sont pas disponibles — il faut
    utiliser l'authentification cross-device via QR code et Bluetooth, ce qui est possible mais pas
    toujours fluide. Et enfin, l'expérience utilisateur varie encore significativement entre
    navigateurs et systèmes d'exploitation.
  </SpeakerNotes>
</Slide>
