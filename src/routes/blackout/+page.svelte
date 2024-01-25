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
		SimpleGrid,
        Loader,
	} from "@svelteuidev/core";
	import { onMount, onDestroy } from "svelte";
	import { getRandomSaying, numbers } from "./blackout";
	import language from "../language-store.js";
	import Info from "../Info.svelte";
	import playersStore from "../players/player-store";
	import BlackoutStartNoPlayers from "./blackoutStartNoPlayers.svelte"
	import BlackoutPlayerList from "./blackoutPlayerList.svelte"

	let infoMsg = "";
	let card = null;

	let rules = {
		en: "The Person who names the word first gets the Point",
		de: "Die Person die Zuerst ein entsprechendes Wort sagt, hat die Runde gewonnen und darf Sich den Punkt Geben",
	};
	let num = { left: -1, used: -1 };

	let currentLang = "";
	let unsubscribeLanguage;

	let players = [];
    let unsubscribePlayers;
	
	onMount(() => {
		unsubscribeLanguage = language.subscribe((subscribeLanguage) => (currentLang = subscribeLanguage));
        unsubscribePlayers = playersStore.subscribe((p) => (players = p));
		
		if (players.length > 1 ){
			getNextSaying();
			num = numbers();
		}
	});

	onDestroy(() => {
		unsubscribeLanguage?.();
		unsubscribePlayers?.();
	});

	function getNextSaying() {
		const newSaying = getRandomSaying();
		card = newSaying;
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
{#if players.filter(item => item.active === true).length > 1}
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
					>{currentLang === "en" ? "Played" : "Gespielt"}: {num.used} |
					{currentLang === "en" ? "Remaining" : "Übrig"}: {num.left}</Title
				>
			</Group>
		</Center>

		<Center>
			<Card shadow="xl" withBorder={true} style="width: 80vw">
				{#if card}
					<Container style="padding: 5rem">
						<Center>
							<Stack>
								<Title order={2}
									>{currentLang === "en"
										? card.saying.en
										: card.saying.de}</Title
								>
								<Title order={3}
									>{currentLang === "en"
										? card.rule.en
										: card.rule.de}</Title
								>
							</Stack>
						</Center>
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
		<Container size="xl">
			<BlackoutPlayerList/>
		</Container>
	</Stack>
{:else}
<BlackoutStartNoPlayers/>
{/if}

<svelte:window on:keydown|preventDefault={onKeyDown} />
