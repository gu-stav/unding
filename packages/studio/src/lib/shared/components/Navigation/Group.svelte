<script>
    import { Box, Flex, Text } from '@unding/ui';

    export let title;
</script>

<Flex gap={1}>
    {#if title}
        <Text as="h2" transform="uppercase" weight="bold">{title}</Text>
    {/if}

    <Box as="ol">
        <slot />
    </Box>
</Flex>
