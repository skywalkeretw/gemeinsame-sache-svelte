<script>
	import { Title, Center, Card, Button } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import { getRandomSaying } from './gemeinsame-sache.js'

	let saying = null;
	
	function getNextSaying(){
		const newSaying = getRandomSaying();
		console.log(newSaying)
		saying = newSaying;
	}

	onMount(()=>{
		getNextSaying()
	})



</script>
  
<style>
/* Center the container vertically and horizontally */
	body {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh; /* 100% of the viewport height */
		margin: 0;
	}

/* Add some additional styles to make it look nice */
	.container {
		text-align: center;
	}
</style>

<div class="container">
<Center>
	<Card shadow='lg' padding='lg'>
		{#if saying}
		<Title order={2}>{saying.de}</Title>
		<Button on:click={getNextSaying} >Next</Button>			
		{/if}
	</Card>
</Center>
</div>
  