<script>
	import { Container, SvelteUIProvider } from '@svelteuidev/core';
	import Header from './Header.svelte';
</script>

<SvelteUIProvider>
	<Header />
	<Container>
		<slot />
	</Container>
</SvelteUIProvider>

