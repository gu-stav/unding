<script>
    import { Flex } from '@unding/ui';

    export let items = [];
</script>

<Flex direction="col" as="ol">
    {#each items as item}
        <li>{item}</li>
    {/each}
</Flex>
