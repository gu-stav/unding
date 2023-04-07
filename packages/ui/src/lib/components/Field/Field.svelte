<script>
    import Description from './Description.svelte';
    import Error from './Error.svelte';
    import Label from './Label.svelte';

    export let name;
</script>

<div class="container">
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

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-1);
    }
</style>
