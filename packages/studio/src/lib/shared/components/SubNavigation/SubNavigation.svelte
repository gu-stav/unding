<script>
    import { Box, Flex } from '@unding/ui';

    let isExpanded = true;
</script>

<Flex as="nav" direction="col" gap={4} padding={3} height="full-vh" borderColor="neutral-200" border="right">
    <Box as="button" type="button" on:click={() => {
        isExpanded = !isExpanded;
    }} position="absolute" right={0}>
        Toggle
    </Box>

    {#if isExpanded}
        <slot />
    {/if}
</Flex>
