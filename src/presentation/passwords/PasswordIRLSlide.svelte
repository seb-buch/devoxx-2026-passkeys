<script>
	import Slide from '$lib/Slide.svelte';
	import blanquette from '../assets/images/Blanquette.png';
</script>

<Slide>
  <h3>Le plus évident: le mot de passe&nbsp;!</h3>

  <figure>
    <img src={blanquette} alt="OSS 117 - Comment est votre blanquette?" />
    <figcaption>
      Comment est votre blanquette&nbsp;?
    </figcaption>
  </figure>

</Slide>

<style>
  figure {
    padding: 1em 0;
    img {
      width: 1200px;
    }

    figcaption {
      text-align: center;
      margin-top: -100px;
      color: #f7f4f7;
      font-weight: bold;
    }
  }
  </style>
