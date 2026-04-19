<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import photo from './assets/images/sebastien-buchoux.jpg';
  import onepointLogo from './assets/images/onepoint_logo.png';
  import VerticalSpacer from '$lib/VerticalSpacer.svelte';
</script>

<Slide>
  <h2>Qui suis-je ?</h2>
  <VerticalSpacer height="3em" />
  <div class="who-layout">
    <div class="who-photo">
      <img src={photo} alt="Sébastien Buchoux" />
    </div>
    <ul class="who-info">
      <li class="who-name">Sébastien Buchoux</li>
      <li>Tech Lead / Architecte Logiciel</li>
      <li class="who-company">
        <img src={onepointLogo} alt="Onepoint" class="who-company-logo" />
      </li>
      <li>
        <a href="https://github.com/seb-buch" target="_blank" rel="noopener">
          <i class="fa-brands fa-github" style="color: var(--r-main-color)"></i> seb-buch
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/sebastien-buchoux/" target="_blank" rel="noopener">
          <i class="fa-brands fa-linkedin" style="color: var(--r-main-color)"></i> sebastien-buchoux
        </a>
      </li>
    </ul>
  </div>
  <SpeakerNotes>
    Avant de commencer, un mot rapide sur moi.<br />
    Je suis Sébastien Buchoux, tech lead et architecte logiciel chez Onepoint.<br />
    Je les remercie au passage de me donner la possibilité de venir assister au Devoxx.<br />
    J'y reviendrai en fin de présentation mais j'ai github dans lequel vous pouvez trouver le code de
    l'application que nous allons développer ensemble, ainsi que les slides de la présentation.<br
    />
    Maintenant que les présentations sont faites, on peut commencer.
  </SpeakerNotes>
</Slide>

<style>
  .who-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3em;
    margin-top: 1em;
  }

  .who-photo img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--dvx-orange);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
  }

  .who-info {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    align-items: center;

    li {
      margin-bottom: 0.6em;
      display: flex;
      align-items: center;
      gap: 0.4em;

      &::before {
        display: none;
      }
    }
  }

  .who-name {
    font-size: 1.3em;
    font-weight: 700;
    color: var(--dvx-orange);
    font-family: var(--r-heading-font);
  }

  .who-company {
    text-align: center;
  }

  .who-company-logo {
    height: 2em;
    border-radius: 6px;
    vertical-align: middle;
    margin: 0;
  }

  .who-info a {
    text-decoration: none;
    transition: color 0.2s ease;
  }
</style>
