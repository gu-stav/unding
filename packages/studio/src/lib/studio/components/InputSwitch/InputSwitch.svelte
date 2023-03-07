<script>
    import { Checkbox, Chip, Field, Input } from '@unding/ui';

    export let label;
    export let name;
    export let type;
    export let description;
    // TODO: rename error to errors
    export let error;
    export let required;
</script>

{#if ['text', 'number', 'email'].includes(type)}
    <Field name={name}>
        <svelte:fragment slot="label">
            <!-- TODO: enforce label -->
            {label ?? name}

            {#if required}
                <Chip>
                    Required
                </Chip>
            {/if}
        </svelte:fragment>

        <svelte:fragment slot="description">
            {description ?? ''}
        </svelte:fragment>

        <svelte:fragment slot="error">
            {#if Array.isArray(error)}
                {#each error as zodError}
                    {zodError.message}
                {/each}
            {/if}
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
