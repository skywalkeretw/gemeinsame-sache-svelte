<script>
    import { Modal, Text } from "@svelteuidev/core";
    export let message = "";

    let opened = false;

    $: if (message !== "") {
        opened = true;
    }

    function handleClose() {
        opened = false;
        message = ""; // Clear the message when the modal is closed
    }
</script>

<Modal size="xl" bind:opened centered on:close={handleClose}>
    <!-- Modal Content -->
    <Text>{message}</Text>
</Modal>
