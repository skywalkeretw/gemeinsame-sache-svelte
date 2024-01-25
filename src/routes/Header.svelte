<script>
    import { Center, Title, Button } from "@svelteuidev/core";
    import language from "./language-store.js";
    import { onMount, onDestroy } from "svelte";

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

    function toggleLanguage() {
        language.toggleLanguage();
    }
</script>

<div class="header">
    <Center>
        <a href="/" style="text-decoration: none;"
            ><Title order={1}
                >{currentLang === "en"
                    ? "Awsome Party Games"
                    : "Tolle Party Spiele"}</Title
            ></a
        >
        <Button
            on:click={toggleLanguage}
            variant="outline"
            radius="xl"
            uppercase
            ripple
        >
            {currentLang}
        </Button>
    </Center>
    <hr />
</div>

<style>
    .header {
        padding: 3rem;
    }
</style>
