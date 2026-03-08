<script>
	import Slide from '$lib/Slide.svelte';
	import Code from '$lib/Code.svelte';
</script>
<Slide>
	<h3>Code example</h3>
	<Code language="python" lineNumbers="|1|2-7|3,7" fontSize="0.9em">
		{`
class AsyncImageGenerator(Protocol):
    async def generate(self) -> NaiveImage:
        ...

    @property
    def generation_method(self) -> str :
        ...
`}
	</Code>
</Slide>
