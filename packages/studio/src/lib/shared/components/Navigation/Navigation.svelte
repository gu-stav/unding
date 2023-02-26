<script>
    import { Box, Text } from '@unding/ui';
</script>

<Box as="nav" backgroundColor="neutral-100" color="neutral-900" padding={3} height="full-vh" borderColor="neutral-200" border="right" position="relative">
    <Text as="strong" display="block" transform="uppercase" padding={3}>
        Unding
    </Text>

    <slot />
</Box>
