<script>
    import Description from './Description.svelte';
    import Error from './Error.svelte';
    import Label from './Label.svelte';

    export let name;
</script>

<div class="flex flex-col gap-1">
    <Label for={name}>
        <slot name="label" />
    </Label>

    <Description>
        <slot name="description" />
    </Description>

    <Error>
        <slot name="error" />
    </Error>

    <slot name="field" />
</div>
