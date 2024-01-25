<script>
    import { Button, Card, SimpleGrid } from "@svelteuidev/core";
    import { onMount, onDestroy } from "svelte";
    import language from "./language-store.js";
    import { getGames } from "./game-info.js";

    let currentLang = "";
    let unsubscribeLanguage;

    onMount(() => {
        unsubscribeLanguage = language.subscribe(
            (subscribeLanguage) => (currentLang = subscribeLanguage),
        );
    });

    onDestroy(() => {
        unsubscribeLanguage?.();
    });
</script>

<SimpleGrid cols={5}>
    {#each Object.entries(getGames()) as [key, game]}
        <a href={game.path}>
            <Card>
                <h2>{currentLang === "en" ? game.name.en : game.name.de}</h2>
            </Card>
        </a>
    {/each}
</SimpleGrid>
