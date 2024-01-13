<script>
	import { Title, Center, Card, Button, Container, Space, Text, Stack, Group } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import { getRandomSaying, numbers } from './gemeinsame-sache.js'
    import Info from './Info.svelte';
	let infoMsg = "";
	let saying = null;
	let lang = "de"
	let rules ={
		"en":"The goal of the game is to always find the \"Common Ground.\" Each player writes a term they believe fits into a category. The most frequently mentioned term becomes the \"Common Ground\" and wins the round. The player who could collect the most points by the end wins. If you win a round with your term, you receive a point from the bank. By betting on your term, you can quickly earn chips/points.",
		"de":"Ziel des Spiels ist es, stets die „Gemeinsame Sache“ zu finden. Jeder Spieler schreibt zu einer Kategorie einen seiner Meinung nach passenden Begriff auf. Der meistgenannte Begriff ist die „Gemeinsame Sache“ und gewinnt die Runde. Der Spieler, der am Ende die meisten Punkte sammeln konnte, gewinnt. Gewinnt ihr eine Runde mit eurem Begriff, bekommt ihr einen Punkt von der Bank. Durch das Wetten auf euren Begriff könnt ihr schnell Chips/Punkte verdienen. "
	}
	let num = {"left": -1, "used": -1}

	function switchLang() {
		lang = (lang === "de") ? "en" : "de"
	}
	
	function getNextSaying(){
		const newSaying = getRandomSaying();
		saying = newSaying;
		if (num.left == 0){
			infoMsg = "Finishd all Cards resetting Game!"
		}
		num = numbers()
	}

	onMount(()=>{
		getNextSaying()
		num = numbers()
	})

	function showRules(){
		infoMsg = lang === "de" ? rules.en : rules.de
	}
	function onKeyDown(e) {
		if (infoMsg === "") {
			console.log(infoMsg)
			if (e.keyCode === 32) {
				getNextSaying()
			}
		}
	}

</script>
  

<Info bind:message={infoMsg}/>
<Stack>
	<Center>
		<Group>
			<Button on:click={showRules} variant="outline" color="red" radius="xl" uppercase ripple>{lang === "de" ? "Rules" : "Regeln"}</Button>
			<Button on:click={switchLang} variant="outline" radius="xl" uppercase ripple>
				{lang}
			</Button>
			<Title order={3}>{lang === "de" ? "Played" : "Gespielt"}: {num.used} | {lang === "de" ? "Remaining" : "Übrig"}: {num.left}</Title>
		</Group>
	</Center>

	<Center>
		<Card shadow="xl" withBorder={true}  style="width: 80vw">
			{#if saying}
			<Container style="padding: 5rem">
				<Center>
					<Title order={2}>{lang === "de" ? saying.en : saying.de}</Title>
				</Center>
			</Container>
			<Space h="xl"/>
			<Button on:click={getNextSaying} fullSize radius="md" uppercase ripple size="xl">
				Next
			</Button>
			{/if}
		</Card>
	</Center>
</Stack>

<svelte:window on:keydown|preventDefault={onKeyDown} />