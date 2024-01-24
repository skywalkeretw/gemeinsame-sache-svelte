<script>
    import { Modal, Text, Button } from '@svelteuidev/core';
	import language from "../language-store.js"
    import { onMount, onDestroy } from 'svelte';

    let currentLang = ""
    let unsubscribeLanguage
    
    onMount(() => {
		getNextSaying()
		num = numbers()
        unsubscribeLanguage = language.subscribe( subscribeLanguage =>  currentLang = subscribeLanguage)
    })

    onDestroy(() =>{
        if (unsubscribeLanguage) {
            unsubscribeLanguage();
        }
    })
    
    let opened = false;


    function showRules() {
        opened = true
    }
    
    function handleClose() {
        opened = false;
    }
</script>
<Button on:click={showRules} variant="outline" color="red" radius="xl" uppercase ripple>{currentLang === "en" ? "Rules" : "Regeln"}</Button>

<Modal size="xl" bind:opened centered on:close={handleClose}>
    <!-- Modal Content -->    
    {#if currentLang === "en"}
    <Text></Text>
    {:else}
    <Text>Die Person die Zuerst ein entsprechendes Wort sagt, hat die Runde gewonnen und darf Sich den Punkt Geben</Text>
    {/if}
    
</Modal>
