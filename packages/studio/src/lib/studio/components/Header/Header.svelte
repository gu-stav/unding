<script>
    console.log('header', $$props);
</script>

<div class="flex flex-row p-3 justify-between">
    <slot name="wat">
        <h2 class="bold uppercase">
            <slot name="title" />
        </h2>

        <div class="flex gap-2">
            <slot name="action" />
        </div>
    </slot>
</div>
