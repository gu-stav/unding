<script>
    import { page } from "$app/stores";
    import { Header, InputSwitch, AttributeLayout } from '@unding/studio/studio/components';
    import { Button } from '@unding/ui';
    import { contentTypeSync } from '@unding/studio/studio/actions';
    import { contentType } from '@unding/studio/studio/stores';

    $: contentType.set($page.data);
</script>

<form method="POST" action="?/create" use:contentTypeSync={{ contentType }}>
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
                    {@const field = $contentType.contentType.attributes.find(attribute => attribute.name === column.name)}

                    <AttributeLayout.Column colSpan={column.width}>
                        <InputSwitch {...field} />
                    </AttributeLayout.Column>
                {/each}
            </AttributeLayout.Row>
        {/each}
    </AttributeLayout.Root>
</form>
