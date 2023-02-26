<script>
    import { Flex, Text } from '@unding/ui';
</script>

<Flex alignItems="center" justify="between" padding={3}>
    <Text as="h2" weight="bold" transform="uppercase">
        <slot name="title" />
    </Text>

    <Flex gap={2}>
        <slot name="action" />
    </Flex>
</Flex>
