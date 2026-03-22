<script lang="ts">
  import type { Options } from 'reveal.js';
  import type { Snippet } from 'svelte';

  interface Props {
    transitionStyle?: Required<Options>['transition'] | null;
    transitionSpeed?: Required<Options>['transitionSpeed'] | null;
    autoAnimate?: boolean | null;
    autoAnimateID?: string | null;
    autoAnimateRestart?: boolean | null;
    backgroundImage?: string | null;
    backgroundSize?: 'cover' | 'contain' | 'auto' | null;
    backgroundPosition?: string | null;
    backgroundColor?: string | null;
    children: Snippet;
  }

  const {
    transitionStyle = null,
    transitionSpeed = null,
    children,
    autoAnimate = null,
    autoAnimateRestart = null,
    autoAnimateID = null,
    backgroundImage = null,
    backgroundSize = 'cover',
    backgroundPosition = 'center',
    backgroundColor = null
  }: Props = $props();
</script>

<section
  data-transition={transitionStyle}
  data-transition-speed={transitionSpeed}
  data-auto-animate={autoAnimate}
  data-auto-animate-id={autoAnimateID}
  data-auto-animate-restart={autoAnimateRestart}
  data-background-image={backgroundImage}
  data-background-size={backgroundSize}
  data-background-position={backgroundPosition}
  data-background-color={backgroundColor}
>
  {@render children()}
</section>
