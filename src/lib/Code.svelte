<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    trim?: boolean | null;
    lineNumbers?: string | boolean | null;
    lineNumbersFrom?: number | null;
    language?: string;
    noescape?: boolean | null;
    id?: string | null;
    width?: string | null;
    fontSize?: string | null;
    children: Snippet;
  }

  let {
    trim = true,
    lineNumbersFrom = 1,
    language = 'java',
    noescape = true,
    lineNumbers = true,
    id = null,
    width = 'fit-content',
    fontSize = '1em',
    children
  }: Props = $props();
</script>

{#if children}
  <div class="code-block">
    <pre
      class="language-{language}"
      data-id={id}
      style="width:{width};font-size:{fontSize};
"><code
        data-noescape={noescape}
        data-trim={trim}
        data-line-numbers={lineNumbers}
        data-ln-start-from={lineNumbersFrom}>{@render children()}</code
      ></pre>
  </div>
{/if}

<style>
  .code-block {
    position: relative;

    pre {
      min-width: 50%;
      max-width: 90%;
      border-radius: 0.2em;
      overflow: hidden;

      code {
        max-height: 900px;
        border-radius: 0.2em;
      }
    }
  }
</style>
