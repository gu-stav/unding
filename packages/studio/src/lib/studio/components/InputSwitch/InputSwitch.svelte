<script>
    import { Checkbox, Field, Input } from '@unding/ui';

    export let label;
    export let name;
    export let type;
    export let description;
    export let error;
</script>

{#if ['text', 'number', 'email'].includes(type)}
    <Field name={name}>
        <svelte:fragment slot="label">
            {label}
        </svelte:fragment>

        <svelte:fragment slot="description">
            {description ?? ''}
        </svelte:fragment>

        <svelte:fragment slot="error">
            {error ?? ''}
        </svelte:fragment>

        <Input type={type} name={name} slot="field" error={error} {...$$restProps} />
    </Field>
{:else if type === 'checkbox'}
    <Checkbox name={name} {...$$restProps}>
        {label}
    </Checkbox>
{:else}
    {label}: Field {type} not implemented
{/if}
