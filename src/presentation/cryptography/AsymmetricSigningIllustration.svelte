<script lang="ts">
  import Slide from '$lib/Slide.svelte';
  import Todo from '../Todo.svelte';
</script>

<Slide autoAnimate>
  <Todo message="Remplacer image par animation" />
  <h3>Cryptograhie assymétrique &ndash; Signature</h3>

  <figure>
    <img
      src="https://www.baeldung.com/wp-content/uploads/sites/4/2021/12/AsymSign-1.png"
      alt="Asymmetric Signing Works"
      style="height: 600px;"
    />
  </figure>
</Slide>
