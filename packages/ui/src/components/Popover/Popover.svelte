<script>
    export let open = false;

    $: isOpen = open;

    function handleToggle(event) {
        event.preventDefault();

        isOpen = !isOpen;
    }
</script>

<div class="relative">
    <button type="button" on:click={handleToggle}>
        <slot name="trigger" />
    </button>

    <div class:hidden={!isOpen} class="bg-white text-gray-800 w-full p-2 rounded translate-y-2 absolute l-0 top-full z-50">
        <slot name="portal" />
    </div>
</div>
