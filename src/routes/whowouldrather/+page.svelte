<script>
	import {
		Title,
		Center,
		Card,
		Button,
		Container,
		Space,
		Text,
		Stack,
		Group,
	} from "@svelteuidev/core";
	import { onMount, onDestroy } from "svelte";
	import { getRandomSaying, numbers } from "./who-would-rather";
	import language from "../language-store.js";
	import Info from "../Info.svelte";

	let infoMsg = "";
	let saying = null;

	let currentLang = "";
	let unsubscribeLanguage;

	onMount(() => {
		getNextSaying();
		num = numbers();
		unsubscribeLanguage = language.subscribe(
			(subscribeLanguage) => (currentLang = subscribeLanguage),
		);
	});

	onDestroy(() => {
		if (unsubscribeLanguage) {
			unsubscribeLanguage();
		}
	});

	let rules = {
		en: 'The goal of the game is to always find the "Common Ground." Each player writes a term they believe fits into a category. The most frequently mentioned term becomes the "Common Ground" and wins the round. The player who could collect the most points by the end wins. If you win a round with your term, you receive a point from the bank. By betting on your term, you can quickly earn chips/points.',
		de: "Ziel des Spiels ist es, stets die „Gemeinsame Sache“ zu finden. Jeder Spieler schreibt zu einer Kategorie einen seiner Meinung nach passenden Begriff auf. Der meistgenannte Begriff ist die „Gemeinsame Sache“ und gewinnt die Runde. Der Spieler, der am Ende die meisten Punkte sammeln konnte, gewinnt. Gewinnt ihr eine Runde mit eurem Begriff, bekommt ihr einen Punkt von der Bank. Durch das Wetten auf euren Begriff könnt ihr schnell Chips/Punkte verdienen. ",
	};
	let num = { left: -1, used: -1 };

	function getNextSaying() {
		const newSaying = getRandomSaying();
		saying = newSaying;
		if (num.left == 0) {
			infoMsg = "Finishd all Cards resetting Game!";
		}
		num = numbers();
	}

	function showRules() {
		infoMsg = currentLang === "en" ? rules.en : rules.de;
	}
	function onKeyDown(e) {
		if (infoMsg === "") {
			if (e.keyCode === 32) {
				getNextSaying();
			}
		}
	}
</script>

<Info bind:message={infoMsg} />
<Stack>
	<Center>
		<Group>
			<Button
				on:click={showRules}
				variant="outline"
				color="red"
				radius="xl"
				uppercase
				ripple>{currentLang === "en" ? "Rules" : "Regeln"}</Button
			>
			<Title order={3}
				>{currentLang === "en" ? "Played" : "Gespielt"}: {num.used} | {currentLang ===
				"en"
					? "Remaining"
					: "Übrig"}: {num.left}</Title
			>
		</Group>
	</Center>

	<Center>
		<Card shadow="xl" withBorder={true} style="width: 80vw">
			{#if saying}
				<Container style="padding: 5rem">
                    <Stack>
                        <Center>
                            <Title order={2}
                            >{currentLang === "en"
                                ? "Who would Rather..."
                                : "Wer würde eher..."}</Title
                        >   
                        </Center>
                        <Center>
                            <Title order={2}
                                >...{currentLang === "en"
                                    ? saying.en
                                    : saying.de}</Title
                            >
                        </Center>
                    </Stack>
				</Container>
				<Space h="xl" />
				<Button
					on:click={getNextSaying}
					fullSize
					radius="md"
					uppercase
					ripple
					size="xl"
				>
					Next
				</Button>
			{/if}
		</Card>
	</Center>
</Stack>

<svelte:window on:keydown|preventDefault={onKeyDown} />
