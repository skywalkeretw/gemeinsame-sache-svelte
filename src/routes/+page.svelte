<script>
	import { Title, Center, Card, Button, Container, Space, Chip, Stack } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import { getRandomSaying } from './gemeinsame-sache.js'
    import Info from './Info.svelte';
	let infoMsg = "";
	let saying = null;
	let lang = "de"

	function switchLang() {
		lang = (lang === "de") ? "en" : "de"
	}
	
	function getNextSaying(){
		const newSaying = getRandomSaying();
		saying = newSaying;
	}

	onMount(()=>{
		getNextSaying()
	})



</script>
  

<Info bind:message={infoMsg}/>
<Stack>
	<Center>
		<Button on:click={switchLang} variant="outline" radius="xl" uppercase ripple>
			{lang}
		</Button>
	</Center>

	<Center>
		<Card shadow="xl" withBorder={true}  style="width: 80vw">
			{#if saying}
			<Container style="padding: 5rem">
				<Center>
					<Title order={2}>{lang === "de" ? saying.de : saying.en}</Title>
				</Center>
			</Container>
			<Space h="xl"/>
			<Button on:click={getNextSaying} fullSize radius="md" uppercase ripple>
				Next
			</Button>
			{/if}
		</Card>
	</Center>
</Stack>