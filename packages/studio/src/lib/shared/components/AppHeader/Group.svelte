<script>
    export let title;
</script>

<div class="flex flex-row">
    {#if title}
        <h2 class="upperacase bold">{title}</h2>
    {/if}

    <ol class="flex flex-row gap-2">
        <slot />
    </ol>
</div>
