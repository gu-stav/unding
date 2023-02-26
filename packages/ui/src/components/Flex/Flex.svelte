<script>
    import { Box } from '../Box';

    export let alignItems;
    export let display = 'flex';
    export let justify;
    export let grow;
</script>

<Box display={display} flexGrow={grow} flexAlignItems={alignItems} flexJustify={justify} {...$$restProps}>
    <slot />
</Box>
