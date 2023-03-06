<script>
    import { Checkbox, Field, Input } from '@unding/ui';

    export let label;
    export let name;
    export let type;
</script>

{#if ['text', 'number', 'email'].includes(type)}
    <Field>
        <svelte:fragment slot="label">
            {label}
        </svelte:fragment>

        <svelte:fragment slot="field">
            <Input type={type} name={name} {...$$restProps} />
        </svelte:fragment>
    </Field>
{:else if type === 'checkbox'}
    <Checkbox name={name} {...$$restProps}>
        {label}
    </Checkbox>
{/if}
