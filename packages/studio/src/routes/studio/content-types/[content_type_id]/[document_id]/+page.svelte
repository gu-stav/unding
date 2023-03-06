<script>
    import { enhance } from '$app/forms';
    import { page } from "$app/stores";
    import { Header, InputSwitch, AttributeLayout } from '$lib/studio/components';
    import { Button } from '@unding/ui';
</script>

<form method="POST" action="?/edit" use:enhance>
    <Header>
        <svelte:fragment slot="title">
            Edit Document
        </svelte:fragment>

        <svelte:fragment slot="action">
            <Button type="submit" name="submit">
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
                    <InputSwitch value={$page.data.document?.[name]} label={name} name={name} disabled={!!field.readOnly} {...field} />
                </AttributeLayout.Column>
                {/each}
            </AttributeLayout.Row>
        {/each}
    </AttributeLayout.Root>
</form>
