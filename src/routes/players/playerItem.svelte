<script>
    import {
        Badge,
        Accordion,
        Flex,
        Switch,
        Container,
        Grid,
        Center,
        Title,
        Button,
    } from "@svelteuidev/core";
    import playersStore from "./player-store";
    import { onMount, onDestroy } from "svelte";
    import language from "../language-store.js";
    import { getGameByKey } from "../game-info.js";

    export let player = {};

    let currentLang = "";
    let unsubscribeLanguage;

    onMount(() => {
        unsubscribeLanguage = language.subscribe(
            (subscribeLanguage) => (currentLang = subscribeLanguage),
        );
    });

    onDestroy(() => {
        if (unsubscribeLanguage) {
            unsubscribeLanguage();
        }
    });

    function handleRadioChange() {
        playersStore.togglePlayerStatus(player.id);
    }
</script>

<Accordion.Item value={player.id}>
    <div slot="control">{player.name}</div>
    <Grid>
        <Grid.Col span={10}>
            <Flex gap="lg">
                {#each Object.entries(player.socores) as [game, score]}
                    <Badge size="xl" radius="sm">
                        {currentLang == "en"
                            ? getGameByKey(game).en
                            : getGameByKey(game).de}: {score}
                    </Badge>
                {/each}
            </Flex>
        </Grid.Col>
        <Grid.Col span={2}>
            <Switch
                checked={player.active}
                on:change={handleRadioChange}
                label={player.active
                    ? currentLang == "en"
                        ? "Player Active"
                        : "Spieler Aktiv"
                    : currentLang == "en"
                      ? "Player Disabled"
                      : "Spieler Deaktiviert"}
            />
        </Grid.Col>
    </Grid>
</Accordion.Item>
