<script lang="ts">
  import type { Snippet } from 'svelte';
  import TerminalPromptLine from '$lib/terminal/TerminalPromptLine.svelte';

  type Theme = 'dark' | 'light';

  interface Props {
    headerTitle?: string;
    theme?: Theme;
    children?: Snippet;
  }

  const { headerTitle = 'Terminal', theme = 'dark', children }: Props = $props();
</script>

<div class="terminal theme-{theme} ">
  <div class="header">
    <div class="title">{headerTitle}</div>
    <div class="window-menu">
      <div class="dot red"></div>
      <div class="dot amber"></div>
      <div class="dot green"></div>
    </div>
  </div>

  <div class="viewport" role="region" aria-label="Terminal output">
    {#if children}
      {@render children()}
    {:else}
      <TerminalPromptLine />
    {/if}
  </div>
</div>

<style>
  /* Component-scoped variables and base styles */
  .terminal {
    /* Theme variables (can be overridden from the outside) */
    --term-font: ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace;
    --term-border: rgba(0, 0, 0, 0.15);
    --term-accent-1: #9fcd64;
    --term-accent-2: #8ab4f8;

    /* Header variables to mirror Email.svelte */
    --term-header-bg: #3d3f47;
    --term-header-height: 36px;
    --term-header-gap: 10px;
    --term-dot-size: 16px;
    --term-dot-red: #ff6057;
    --term-dot-red-border: #e14640;
    --term-dot-amber: #ffbd2e;
    --term-dot-amber-border: #dfa123;
    --term-dot-green: #27c93f;
    --term-dot-green-border: #1dad2b;
    --term-font-size: 20pt;

    border: 1px solid var(--term-border);
    overflow: hidden;
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
    width: fit-content;
    max-width: 1500px;
    min-width: 300px;
    margin: 0 auto;
    font-size: var(--term-font-size);
    text-align: left;
    border-radius: 10px;
  }

  .terminal.theme-dark {
    --term-bg: #0b0e14;
    --term-fg: #e6e1cf;
    --term-dim: #9aa0a6;
    --term-stdout: var(--term-fg);
    --term-stderr: #ff6b6b;
  }

  .terminal.theme-light {
    --term-bg: #f7f7f7;
    --term-fg: #111111;
    --term-dim: #6b7280;
    --term-stdout: var(--term-fg);
    --term-stderr: #b00020;
  }

  /* Header */
  .header {
    background: var(--term-header-bg);
    height: var(--term-header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px 0 10px;
    color: #e5e7eb;
    font-family:
      system-ui,
      -apple-system,
      Segoe UI,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    font-size: 1em;
    user-select: none;
  }

  .title {
    font-weight: 600;
    flex-grow: 1;
    text-align: center;
    font-size: 0.8em;
  }

  .window-menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--term-header-gap);
    padding-right: 10px; /* explicitly mirror Email.svelte */
  }

  .dot {
    display: inline-block;
    width: var(--term-dot-size);
    height: var(--term-dot-size);
    border-radius: 50%;
    background: #f9f9f9; /* base (unused when variants apply) */
  }

  .dot.red {
    background: var(--term-dot-red);
    border: 1px solid var(--term-dot-red-border);
  }

  .dot.amber {
    background: var(--term-dot-amber);
    border: 1px solid var(--term-dot-amber-border);
  }

  .dot.green {
    background: var(--term-dot-green);
    border: 1px solid var(--term-dot-green-border);
  }

  /* Viewport */
  .viewport {
    background: var(--term-bg);
    color: var(--term-fg);
    font-family: var(--term-font) monospace;
    font-size: 1em;
    line-height: 1.4;
    padding: 16px 24px;
    overflow-y: auto;
    word-break: break-word;
  }
</style>
