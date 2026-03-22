<script lang="ts">
  type Props = {
    message: string;
  };

  const { message }: Props = $props();
</script>

<p class="message">
  {message}
</p>

<style>
  .message {
    width: 150px;
    height: 200px;
    padding: 10px;

    font-size: 0.7em;
    font-family: sans-serif;
    text-align: left;

    border: 5px solid black;
    border-radius: 10px;
    white-space: pre-wrap;
  }
</style>
