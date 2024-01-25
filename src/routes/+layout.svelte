<script>
	import { SvelteUIProvider } from "@svelteuidev/core";
	import Header from "./Header.svelte";
</script>

<SvelteUIProvider>
	<Header />
	<slot />
</SvelteUIProvider>
