<script lang="ts">
  import type {Snippet} from "svelte";

  interface Props {
    from: string;
    to: string;
    children: Snippet
  }

  const {
    from,
    to,
    children
  }: Props = $props();
</script>

<style lang="css">

  .email-window {
    --bg: #f6f7f8; /* very light gray */
    --muted: #6b7280;
    --shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
    --card: #ffffff;
    --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;
    --sans: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;

    font-family: sans-serif;
    font-size: 1em;


    background: var(--bg);
    border-radius: 10px;
    overflow: hidden;

    max-width: 980px;
    margin: 0 auto;
    box-shadow: var(--shadow);

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;


    .window-menu {
      background: #3d3f47;
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
      background: #f9f9f9;
      border-radius: 50%;
      margin: 0 0 0 0;

      &.red {
        background: #FF6057;
        border: 1px solid #E14640;
      }

      &.amber {
        background: #FFBD2E;
        border: 1px solid #DFA123;
      }

      &.green {
        background: #27C93F;
        border: 1px solid #1DAD2B;
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
      border: 1px #ccc solid;
      text-align: left;
      padding: 10px;
      overflow-y: auto;
    }

    .email {
      background: #c8e9ff;
      border-radius: 1em;
      padding: 0 0.3em;
      color: var(--muted);
    }

    .field {
      padding-right: 0.2em;
      font-weight: bold;
    }
  }
</style>

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
