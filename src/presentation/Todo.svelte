<script lang="ts">
  type Props = {
    message?: string;
  };

  const { message = 'Diapo à finir!' }: Props = $props();
</script>

<div>{message}</div>

<style>
  div {
    position: absolute;
    top: 0;
    right: 0;
    background: red;
    color: #0b0e14;
    font-weight: bold;
    padding: 0.65em 1em;
    border-radius: 10px;
  }
</style>
