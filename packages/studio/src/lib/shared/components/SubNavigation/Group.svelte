<script>
    import { Box, Flex, Text } from '@unding/ui';

    export let title;
</script>

<Flex direction="col" gap={2}>
    <Text as="h2" transform="uppercase" weight="bold" padding={3}>{title}</Text>

    <Box as="ol">
        <slot />
    </Box>
</Flex>
