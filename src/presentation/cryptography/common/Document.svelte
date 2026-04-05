<script lang="ts">
  type Props = {
    size?: number;
    text?: string;
  };

  const { size = 200, text = 'Look Mom,<br/>I am here!' }: Props = $props();

  const documentSize = $derived(`${size}px`);
</script>

<svg
  width={documentSize}
  height={documentSize}
  viewBox="0 0 50.8 50.8"
  xmlns="http://www.w3.org/2000/svg"
>
  <g transform="translate(-241.42866,-29.968378)">
    <g transform="translate(306.62731,-50.91004)">
      <path
        style="fill:#f1f5f8;"
        d="m -52.919744,85.953705 19.297424,0.01308 9.486064,9.298639 v 28.486846 c 0,1.42722 -1.159575,2.85086 -2.567453,2.85086 h -26.216035 c -1.407878,0 -2.541296,-1.14899 -2.541296,-2.57621 V 88.529914 c 0,-1.42722 1.133418,-2.576209 2.541296,-2.576209 z"
      />
      <path
        style="fill:#abc5d4;"
        d="m -24.153604,95.226237 h -6.860864 c -1.465792,0 -2.645834,-1.180042 -2.645834,-2.645833 l 0.03924,-6.570111 z"
      />
    </g>
  </g>
  <foreignObject x="11" y="14" width="29" height="31">
    <div xmlns="http://www.w3.org/1999/xhtml">
      {text}
    </div>
  </foreignObject>
</svg>

<style>
  svg {
    path {
      fill-opacity: 1;
      stroke: #17395c;
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    div {
      color: #284968;
      line-height: 1.1;
      word-break: break-word;
      overflow: hidden;
      width: 100%;
      height: 100%;
      text-align: left;
      font-size: 5.75px;
    }
  }
</style>
