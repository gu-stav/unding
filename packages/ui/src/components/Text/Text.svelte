<script>
    import { Box } from '../Box';

    export let as = 'span';
    export let transform;
    export let weight;
</script>

<Box as={as} fontWeight={weight} textTransform={transform} {...$$restProps}>
    <slot />
</Box>
