<script>
    import {
        Stack,
        Accordion,
        TextInput,
        Switch,
        Container,
        Grid,
        Center,
        Title,
        Button,
    } from "@svelteuidev/core";
    import playersStore from "./player-store";
    import { onMount, onDestroy } from "svelte";
    import PlayerItem from "./playerItem.svelte";
    import language from "../language-store.js";

    let name = "";
    let players = [];
    let unsubscribePlayers;
    let currentLang = "";
    let unsubscribeLanguage;
    onMount(() => {
        unsubscribePlayers = playersStore.subscribe((p) => (players = p));
        unsubscribeLanguage = language.subscribe(
            (subscribeLanguage) => (currentLang = subscribeLanguage),
        );
    });

    onDestroy(() => {
        if (unsubscribePlayers) {
            unsubscribePlayers();
        }
        if (unsubscribeLanguage) {
            unsubscribeLanguage();
        }
    });

    function addPlayer() {
        playersStore.newPlayer(name);
        name = "";
    }
</script>

<Container size="xl">
    <Stack spacing="xl">
        <Grid>
            <Grid.Col span={8}>
                <TextInput bind:value={name} placeholder="Player Name" />
            </Grid.Col>
            <Grid.Col span={4}>
                <Button
                    on:click={addPlayer}
                    disabled={name.length === 0}
                    fullSize
                >
                    {#if currentLang == "en"}
                        Add Player
                    {:else}
                        Spieler Hinzufügen
                    {/if}
                </Button>
            </Grid.Col>
        </Grid>
        <Accordion variant="separated" radius="xl">
            {#each players as player (player.id)}
                <PlayerItem {player}></PlayerItem>
            {/each}
        </Accordion>
    </Stack>
</Container>
