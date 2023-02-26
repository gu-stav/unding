<script>
    import { Flex } from '../Flex';
    import Label from './Label.svelte';
</script>

<Flex gap={2}>
    <Label>
        <slot name="label" />
    </Label>

    <slot name="field" />
</Flex>
