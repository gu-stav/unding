<script>
    import { Box } from '../Box';

    let rest;
    $: ({ as = 'span', transform, weight, ...rest } = $$props);
</script>

<Box as={as} fontWeight={weight} textTransform={transform} {...rest}>
    <slot />
</Box>
