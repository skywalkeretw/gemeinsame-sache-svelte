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
	import playersStore from "../players/player-store";
	import language from "../language-store.js";
	import { onMount, onDestroy } from "svelte";

	let currentLang = "";
	let unsubscribeLanguage;

	let players = [];
    let unsubscribePlayers;
	
	onMount(() => {
		unsubscribeLanguage = language.subscribe((subscribeLanguage) => (currentLang = subscribeLanguage));
        unsubscribePlayers = playersStore.subscribe((p) => (players = p));
	});

	onDestroy(() => {
		unsubscribeLanguage?.();
		unsubscribePlayers?.();
	});

    function addPointToPlayer(player) {
        let updatePlayer = player 
        updatePlayer["socores"]["blackout"] = updatePlayer["socores"]["blackout"] + 1
        playersStore.updatePlayer(player.id, updatePlayer)
        console.log("id: ", player)
    }
</script>

<SimpleGrid cols={3}>
    {#each players as player}
        {#if player.active}
        <Card>
            <Stack>
                <Center>
                    <Title>{player.name}</Title>
                </Center>
                <Center>
                    <Text>
                        {player.socores["blackout"]}
                    </Text>
                </Center>
                <Button fullSize on:click={() => addPointToPlayer(player)}>{currentLang === "en"
                    ? "Add point"
                    : "Punkt hinzufügen"}</Button>
            </Stack>
        </Card> 
        {/if}
    {/each}
</SimpleGrid>