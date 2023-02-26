<script>
    export let title;
</script>

<div class="flex-direction-col gap-2">
    <strong class="block uppercase p-3">
        {title}
    </strong>

    <ol>
        <slot />
    </ol>
</div>
