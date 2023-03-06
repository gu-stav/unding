<script>
    export let title;
</script>

<div class="flex-direction-col gap-2">
    <strong class="block uppercase p-2">
        {title}
    </strong>

    <ol class="flex flex-col gap-1">
        <slot />
    </ol>
</div>
