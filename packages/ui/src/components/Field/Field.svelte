<script>
    import Label from './Label.svelte';
</script>

<div class="flex gap-2">
    <Label>
        <slot name="label" />
    </Label>

    <slot name="field" />
</div>
