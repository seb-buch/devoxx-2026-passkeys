<script>
  import Slide from '$lib/Slide.svelte';
  import SpeakerNotes from '$lib/SpeakerNotes.svelte';
  import qrCodeRepo from '../assets/images/QRcode_github.svg';
</script>

<Slide backgroundImage="/devoxx/bg-image11.jpg" backgroundSize="cover">
  <div class="thanks-overlay">
    <div class="thanks-content">
      <figure>
        <img src={qrCodeRepo} alt="QR code repo GitHub" />
        <figcaption>Diapos et code</figcaption>
      </figure>
      <div class="center">
        <h1>Merci !</h1>
        <h3>Questions ?</h3>
      </div>
      <figure>
        <div class="placeholder">QR code à venir</div>
        <figcaption>Feedback</figcaption>
      </figure>
    </div>
  </div>
  <SpeakerNotes>
    Et voilà, c'est terminé ! Merci beaucoup pour votre attention. Si vous avez des questions, c'est
    le moment. N'hésitez pas à venir me voir après la session aussi, et à jeter un œil au repo pour
    expérimenter avec les passkeys par vous-mêmes. Merci !
  </SpeakerNotes>
</Slide>

<style>
  .thanks-overlay {
    display: flex;
    flex-direction: column;
    height: 1080px;
    justify-content: center;
    background: linear-gradient(
      to top,
      rgba(48, 73, 54, 0.9) 0%,
      rgba(48, 73, 54, 0.7) 50%,
      rgba(48, 73, 54, 0.3) 100%
    );
    backdrop-filter: blur(5px);
  }

  .thanks-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .center {
      flex-grow: 1;
    }

    figure {
      padding: 1rem;
      border-radius: 8px;
      background: var(--r-background-color);

      img {
        height: 20rem;
      }
      figcaption {
        padding-top: 10px;
      }
    }
  }

  .placeholder {
    height: 20rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px dashed rgba(31, 29, 29, 0.5);
    border-radius: 8px;
    color: rgba(31, 29, 29, 0.5);
    font-size: 0.9em;
  }
</style>
