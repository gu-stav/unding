<script>
    export let open = false;

    $: isOpen = open;

    function handleToggle(event) {
        event.preventDefault();

        isOpen = !isOpen;
    }
</script>

<div class="container">
    <button type="button" on:click={handleToggle}>
        <slot name="trigger" />
    </button>

    <div class:visible={isOpen} class="portal">
        <slot name="portal" />
    </div>
</div>

<style>
    .container {
        position: relative;
    }

    .portal {
        background-color: var(--color-white);
        border-radius: var(--spacing);
        color: var(--color-slate-800);
        display: none;
        left: 0;
        padding: var(--spacing-2);
        position: absolute;
        top: 100%;
        width: 100%;
        z-index: 50;
    }

    .portal.visible {
        display: block;
    }
</style>
