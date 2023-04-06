<script>
    import { page } from "$app/stores";
    import { Header, InputSwitch, AttributeLayout, Sidebar } from '@unding/studio/studio/components';
    import { Button } from '@unding/ui';
    import { contentTypeSync } from '@unding/studio/studio/actions';
    import { contentType } from '@unding/studio/studio/stores';

    $: contentType.set($page.data);
</script>

<form method="POST" action="?/edit" use:contentTypeSync={{ contentType }}>
    <Header>
        <svelte:fragment slot="title">
            Edit Document
        </svelte:fragment>

        <svelte:fragment slot="action">
            <Button type="submit">
                Save
            </Button>

            <Button type="submit">
                Save & Publish
            </Button>
        </svelte:fragment>
    </Header>

    <div class="flex">
        <div class="flex-grow">
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
        </div>

        <Sidebar.Root>
            <Sidebar.Section title="Document Info"></Sidebar.Section>
            <Sidebar.Section title="Stages"></Sidebar.Section>
            <Sidebar.Section title="Versions"></Sidebar.Section>
        </Sidebar.Root>
    </div>
</form>
