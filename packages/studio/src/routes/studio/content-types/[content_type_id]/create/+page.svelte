<script>
    import { enhance } from '$app/forms';
    import { page } from "$app/stores";
    import { Header, InputSwitch, AttributeLayout } from '$lib/studio/components';
    import { Button } from '@unding/ui';

    export let form;

    function findErrorsForField(name) {
        if (!form?.validation) {
            return null;
        }

        const errors = form.validation.reduce((acc, error) => {
            if (error.path.includes(name)) {
                acc.push(error);
            }

            return acc;
        }, []);

        if (errors.length > 0) {
            return errors;
        }

        return null;
    }
</script>

<form method="POST" action="?/create" use:enhance>
    <Header>
        <svelte:fragment slot="title">
            Create {$page.data.contentType.name.display}
        </svelte:fragment>

        <svelte:fragment slot="action">
            <Button type="submit">
                Save
            </Button>
        </svelte:fragment>
    </Header>

    <AttributeLayout.Root>
        {#each $page.data.layout as row}
            <AttributeLayout.Row>
                {#each row as column}
                    {@const name = column.name}
                    {@const field = $page.data.contentType.attributes.find(attribute => attribute.name === column.name)}

                    <AttributeLayout.Column colSpan={column.width}>
                        <InputSwitch label={name} name={name} disabled={!!field.readOnly} {...field} value={form?.[name] ?? field?.value} error={findErrorsForField(name)} />
                    </AttributeLayout.Column>
                {/each}
            </AttributeLayout.Row>
        {/each}
    </AttributeLayout.Root>
</form>
