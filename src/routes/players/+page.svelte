<script>
	import { Center, Title, Button } from '@svelteuidev/core';
    import playersStore from "./player-store"
	import { onMount, onDestroy } from 'svelte';

    let players = []
    let unsubscribePlayers
    
    onMount(() => {
        unsubscribePlayers = playersStore.subscribe( p =>  players = p)
    })

    onDestroy(() =>{
        if (unsubscribePlayers) {
            unsubscribePlayers();
        }
    })


</script>
<ul>
{#each players as player}
    <li>{JSON.stringify(player)}</li>
{/each}
</ul>