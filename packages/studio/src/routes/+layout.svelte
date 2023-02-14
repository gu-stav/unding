<script>
    import { page } from "$app/stores";
    import { Flex, theme } from '@unding/ui';

    import { Layout, Navigation, ThemeProvider } from "$lib/shared/components";
</script>

<ThemeProvider theme={theme}>
    <Layout>
        <Flex as="main">
            <Navigation user={$page.data.session?.user} />
            <slot />
        </Flex>
    </Layout>
</ThemeProvider>
