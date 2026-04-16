<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    from: string;
    to: string;
    children: Snippet;
  }

  const { from, to, children }: Props = $props();
</script>

<article class="email-window">
  <div class="window-menu">
    <div class="dot red"></div>
    <div class="dot amber"></div>
    <div class="dot green"></div>
  </div>
  <div class="window-content">
    <header>
      <div class="from">
        <span class="field">From:</span>
        <span class="email">{from}</span>
      </div>
      <div class="to">
        <span class="field">To:</span>
        <span class="email">{to}</span>
      </div>
    </header>
    <main class="email-content">
      {@render children()}
    </main>
  </div>
</article>

<style lang="css">
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

  .email-window {
    --bg: #e8f4f0;
    --muted: #3b6e5e;
    --shadow: 0 6px 24px rgba(0, 52, 89, 0.15);
    --card: #faf6ee;
    --sans: 'Patrick Hand', cursive, system-ui, sans-serif;

    font-family: var(--sans);
    font-size: 1em;

    background: var(--bg);
    border-radius: 12px;
    overflow: hidden;
    border: 2px solid #7bbcaa;

    max-width: 980px;
    margin: 0 auto;
    box-shadow: var(--shadow);

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .window-menu {
      background: linear-gradient(135deg, #1a7a6a, #2a9d8f);
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      padding-right: 10px;
    }

    .dot {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;

      &.red {
        background: #e76f51;
        border: 1px solid #c45a3f;
      }

      &.amber {
        background: #e9c46a;
        border: 1px solid #d4a843;
      }

      &.green {
        background: #59d9a4;
        border: 1px solid #3cb880;
      }
    }

    .window-content {
      padding: 7px;
    }

    header {
      font-size: 0.8em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      padding: 10px;
    }

    .email-content {
      min-height: 400px;
      background: var(--card);
      border: 1px solid #c8d9b8;
      border-radius: 6px;
      text-align: left;
      padding: 10px;
      overflow-y: auto;
    }

    .email {
      background: #b8e4d8;
      border-radius: 1em;
      padding: 0 0.4em;
      color: var(--muted);
    }

    .field {
      padding-right: 0.2em;
      font-weight: bold;
      color: #003459;
    }
  }
</style>
