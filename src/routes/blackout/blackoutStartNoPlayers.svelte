<script>
	import {
		Center,
		Container,
		Text,
		Stack,
        Loader,
	} from "@svelteuidev/core";
	import language from "../language-store.js";
	import playersStore from "../players/player-store";
	import { onMount, onDestroy } from "svelte";

    let currentLang = "";
	let unsubscribeLanguage;

    let players = [];
    let unsubscribePlayers;
    
	onMount(() => {
		unsubscribeLanguage = language.subscribe(
			(subscribeLanguage) => (currentLang = subscribeLanguage),
		);
        unsubscribePlayers = playersStore.subscribe((p) => (players = p));
	});

	onDestroy(() => {
		unsubscribeLanguage?.();
		unsubscribePlayers?.();
	});

</script>

<Container>
	<Center>
		<Stack>
			<Center>
				<Text>
					{#if currentLang === "en"}
					Not enough players. Add additional players here
					{:else}
					Nicht genügend Spieler. Fügen Sie weitere Spieler hinzu 
					{/if}
				</Text>
			</Center>

			<Center>
				<a href="/players">
					<Stack>
						<Loader variant='dots'></Loader>
						<Text>/players</Text>
					</Stack>
				</a>
			</Center>
		</Stack>
	</Center>
</Container>