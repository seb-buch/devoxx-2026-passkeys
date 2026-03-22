<script lang="ts">
  type Props = {
    orientation?: 'horizontal' | 'vertical';
    size?: string;
    type: 'public' | 'private';
  };

  const { orientation = 'horizontal', size = '48px', type }: Props = $props();
</script>

{#if type === 'public'}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    class="crypto-key public {orientation}"
    viewBox="0 -960 960 960"
  >
    <path
      d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 45.5T506-560h414v160h-80v160H680v-160H506q-24 69-84.5 114.5T280-240Zm0-160q33 0 56.5-23.5T360-480q0-33-23.5-56.5T280-560q-33 0-56.5 23.5T200-480q0 33 23.5 56.5T280-400Z"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    class="crypto-key private {orientation}"
    viewBox="0 -960 960 960"
  >
    <path
      d="M365-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-85 155q-100 0-170-70T40-480q0-100 70-170t170-70q81 0 141.5 46T506-560h335l79 79-140 160-100-79-80 80-80-80h-14q-25 72-87 116t-139 44Z"
    />
  </svg>
{/if}

<style>
  .crypto-key {
    vertical-align: middle;
    padding: 0 0.1em;

    &.public {
      fill: #70a08d;
    }
    &.private {
      fill: #d4a800;
    }

    &.vertical {
      transform: rotate(90deg);
    }
  }
</style>
