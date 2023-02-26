<script>
    import { Checkbox, Field, Input } from '@unding/ui';

    export let label;
    export let name;
    export let type;
</script>

{#if ['text', 'number', 'email'].includes(type)}
    <Field>
        <svelte:fragment slot="label">
            <Field.Label>
                {label}
            </Field.Label>
        </svelte:fragment>

        <svelte:fragment slot="field">
            <Input type={type} name={name} />
        </svelte:fragment>
    </Field>
{:else if type === 'checkbox'}
    <Checkbox name={name}>
        {label}
    </Checkbox>
{/if}
