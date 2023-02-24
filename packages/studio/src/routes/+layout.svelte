<script>
    import { page } from "$app/stores";
    import { Flex, theme } from '@unding/ui';
    import { Layout, Navigation, ThemeProvider } from "$lib/shared/components";

    const NAVIGATION_GROUPS = [
        {
            items: [
                {
                    label: 'Content-Types',
                    href: '/studio',
                },
            ],
        },
    ];
</script>

<ThemeProvider theme={theme}>
    <Layout>
        <Flex as="main">
            <Navigation user={$page.data.session?.user}>
                {#each NAVIGATION_GROUPS as group}
                    <Navigation.Group title={group.title}>
                        {#each group.items as item}
                            <Navigation.Item href={item.href} isActive={!!$page.route.id?.startsWith(item.href)}>
                                {item.label}
                            </Navigation.Item>
                        {/each}
                    </Navigation.Group>
                {/each}

                {#if $page.data.session?.user}
                    <Navigation.Footer>
                        <Navigation.Item>
                            {$page.data.session.user.name}
                        </Navigation.Item>
                    </Navigation.Footer>
                {/if}
            </Navigation>

            <slot />
        </Flex>
    </Layout>
</ThemeProvider>
