<script>
    import '@unding/ui/Layout';

    import { page } from "$app/stores";
    import { AppLayout, AppHeader } from "@unding/studio/shared/components";
    import { createUrlPath } from "@unding/studio/shared/utils";
    import { Input, Menu } from '@unding/ui';

    const GROUPS = [
        {
            items: [
                {
                    label: 'Content-Types',
                    href: createUrlPath($page.data.prefix, 'studio/content-types'),
                },

                {
                    label: 'Assets',
                    href: createUrlPath($page.data.prefix, 'studio/assets'),
                },
            ],
        },
    ];
</script>

<AppLayout>
    <svelte:fragment slot="header">
        <AppHeader>
            {#each GROUPS as group}
                <AppHeader.Group title={group.title}>
                    {#each group.items as item}
                        <AppHeader.Item href={item.href} isActive={!!$page.route.id?.startsWith(item.href)}>
                            {item.label}
                        </AppHeader.Item>
                    {/each}
                </AppHeader.Group>
            {/each}

            <svelte:fragment slot="user">
                {#if $page.data.session?.user}
                    <AppHeader.Footer>
                        <Menu>
                            <svelte:fragment slot="trigger">
                                {$page.data.session.user.name}
                            </svelte:fragment>

                            <svelte:fragment slot="portal">
                                <a href="/auth/signout">Logout</a>
                            </svelte:fragment>
                        </Menu>
                    </AppHeader.Footer>
                {/if}
            </svelte:fragment>

            <form method="POST" action="?/search" slot="search" class="search">
                <Input name="term" placeholder="Search" />
            </form>
        </AppHeader>
    </svelte:fragment>

    <slot />
</AppLayout>

<style>
    .search {
        flex-grow: 1;
    }
</style>
