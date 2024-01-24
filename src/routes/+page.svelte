<script>
    import { Button, Card, SimpleGrid } from "@svelteuidev/core";
    import {onMount, onDestroy} from "svelte"
    import language from "./language-store.js"

    let games = [
        {name: "Common Ground", namede: "Gemeinsame Sache", url: "/gemeinsamesache", description: "", descriptionende: ""},
        {name: "Blackout", namede: "Blackout", url: "/blackout", description: "", descriptionende: ""},
    ]
    let currentLang = ""
    let unsubscribeLanguage
    
    onMount(() => {
        unsubscribeLanguage = language.subscribe( subscribeLanguage =>  currentLang = subscribeLanguage)
    })

    onDestroy(() =>{
        if (unsubscribeLanguage) {
            unsubscribeLanguage();
        }
    })
</script>
<SimpleGrid cols={5}>
    {#each games as game}
    <a href="{game.url}">
        <Card>
            <h2>{currentLang === "en" ? game.name : game.namede}</h2>
        </Card>
    </a>

    {/each}
</SimpleGrid>