<script>
    export let title;
</script>

<div class="flex">
    {#if title}
        <h2 class="upperacase bold">{title}</h2>
    {/if}

    <ol>
        <slot />
    </ol>
</div>
