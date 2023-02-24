<script>
    import clsx from 'clsx';

    export let as = 'div';
    export let backgroundColor;
    export let border;
    export let borderColor;
    export let borderRadius;
    export let borderWidth = '1px';
    export let bottom;
    export let color;
    export let direction;
    export let display;
    export let fontWeight;
    export let gap;
    export let height;
    export let padding;
    export let position;
    export let right;
    export let top;
    export let textTransform;
</script>

<svelte:element
    this={as}
    class={clsx(
        'box',
        bottom && 'bottom',
        display,
        gap && `gap`,
        direction && `flex-${direction}`,
        backgroundColor && `bg`,
        borderColor && border && `border`,
        borderRadius && "border-radius",
        color && 'text',
        fontWeight && 'font',
        height && 'h',
        padding && `p`,
        position,
        right && 'right',
        textTransform,
        top && 'top',
    )}
    data-gap={gap}
    data-bg={backgroundColor}
    data-bottom={bottom}
    data-border={border}
    data-border-color={borderColor}
    data-font-weight={fontWeight}
    data-height={height}
    data-right={right}
    data-text={color}
    data-top={top}
    data-p={padding}
    {...$$restProps}
    on:click
>
    <slot />
</svelte:element>

<style>
    .box {
        font-family: var(--fonts-default-family);
    }

    .block {
        display: block;
    }

    .absolute {
        position: absolute;
    }

    .flex {
        display: flex;
    }

    .flex-row {
        flex-direction: row;
    }

    .flex-col {
        flex-direction: column;
    }

    .gap[data-gap="0.5"] {
        gap: var(--spacing-0_5);
    }

    .gap[data-gap="1"] {
        gap: var(--spacing-1);
    }

    .gap[data-gap="1.5"] {
        gap: var(--spacing-1_5);
    }

    .gap[data-gap="2"] {
        gap: var(--spacing-2);
    }

    .gap[data-gap="2.5"] {
        gap: var(--spacing-2_5);
    }

    .gap[data-gap="3"] {
        gap: var(--spacing-3);
    }

    .gap[data-gap="3.5"] {
        gap: var(--spacing-3_5);
    }

    .gap[data-gap="4"] {
        gap: var(--spacing-4);
    }

    .bg[data-bg="neutral-50"] {
        background-color: var(--colors-neutral-50);
    }

    .bg[data-bg="neutral-100"] {
        background-color: var(--colors-neutral-100);
    }

    .bg[data-bg="neutral-200"] {
        background-color: var(--colors-neutral-200);
    }

    .bg[data-bg="neutral-300"] {
        background-color: var(--colors-neutral-300);
    }

    .bg[data-bg="neutral-400"] {
        background-color: var(--colors-neutral-400);
    }

    .bg[data-bg="neutral-500"] {
        background-color: var(--colors-neutral-500);
    }

    .bg[data-bg="neutral-600"] {
        background-color: var(--colors-neutral-600);
    }

    .bg[data-bg="neutral-700"] {
        background-color: var(--colors-neutral-700);
    }

    .bg[data-bg="neutral-800"] {
        background-color: var(--colors-neutral-800);
    }

    .bg[data-bg="neutral-900"] {
        background-color: var(--colors-neutral-900);
    }

    .p[data-p="0.5"] {
        padding: var(--spacing-0_5);
    }

    .p[data-p="1"] {
        padding: var(--spacing-1);
    }

    .p[data-p="1.5"] {
        padding: var(--spacing-1_5);
    }

    .p[data-p="2"] {
        padding: var(--spacing-2);
    }

    .p[data-p="2.5"] {
        padding: var(--spacing-2_5);
    }

    .p[data-p="3"] {
        padding: var(--spacing-3);
    }

    .p[data-p="3.5"] {
        padding: var(--spacing-3_5);
    }

    .p[data-p="4"] {
        gap: var(--spacing-4);
    }

    .text[data-text="neutral-50"] {
        color: var(--colors-neutral-50);
    }

    .text[data-text="neutral-100"] {
        color: var(--colors-neutral-100);
    }

    .text[data-text="neutral-200"] {
        color: var(--colors-neutral-200);
    }

    .text[data-text="neutral-300"] {
        color: var(--colors-neutral-300);
    }

    .text[data-text="neutral-400"] {
        color: var(--colors-neutral-400);
    }

    .text[data-text="neutral-500"] {
        color: var(--colors-neutral-500);
    }

    .text[data-text="neutral-600"] {
        color: var(--colors-neutral-600);
    }

    .text[data-text="neutral-700"] {
        color: var(--colors-neutral-700);
    }

    .text[data-text="neutral-800"] {
        color: var(--colors-neutral-800);
    }

    .text[data-text="neutral-900"] {
        color: var(--colors-neutral-900);
    }

    .border[data-border-color="neutral-50"] {
        border-color: var(--colors-neutral-50);
    }

    .border[data-border-color="neutral-100"] {
        border-color: var(--colors-neutral-100);
    }

    .border[data-border-color="neutral-200"] {
        border-color: var(--colors-neutral-200);
    }

    .border[data-border-color="neutral-300"] {
        border-color: var(--colors-neutral-300);
    }

    .border[data-border-color="neutral-400"] {
        border-color: var(--colors-neutral-400);
    }

    .border[data-border-color="neutral-500"] {
        border-color: var(--colors-neutral-500);
    }

    .border[data-border-color="neutral-600"] {
        border-color: var(--colors-neutral-600);
    }

    .border[data-border-color="neutral-700"] {
        border-color: var(--colors-neutral-700);
    }

    .border[data-border-color="neutral-800"] {
        border-color: var(--colors-neutral-800);
    }

    .border[data-border-color="neutral-900"] {
        border-color: var(--colors-neutral-900);
    }

    .border[data-border="top"] {
        border-top-style: solid;
        border-top-width: 1px;
    }

    .border[data-border="right"] {
        border-right-style: solid;
        border-right-width: 1px;
    }

    .border[data-border="bottom"] {
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .border[data-border="left"] {
        border-left-style: solid;
        border-left-width: 1px;
    }

    .p[data-p="4"] {
        gap: var(--spacing-4);
    }

    .h[data-height="full"] {
        height: 100%;
    }

    .h[data-height="full-vh"] {
        height: 100vh;
    }

    .uppercase {
        text-transform: uppercase;
    }

    .font[data-font-weight="bold"] {
        font-weight: bold;
    }

    .border-radius {
        border-radius: var(--spacing-1_5);
    }

    .bottom[data-bottom="0"] {
        bottom: 0;
    }

    .bottom[data-bottom="0.5"] {
        bottom: var(--spacing-0_5);
    }

    .bottom[data-bottom="1"] {
        bottom: var(--spacing-1);
    }

    .bottom[data-bottom="1.5"] {
        bottom: var(--spacing-1_5);
    }

    .bottom[data-bottom="2"] {
        bottom: var(--spacing-2);
    }

    .bottom[data-bottom="2.5"] {
        bottom: var(--spacing-2_5);
    }

    .bottom[data-bottom="3"] {
        bottom: var(--spacing-3);
    }

    .bottom[data-bottom="3.5"] {
        bottom: var(--spacing-3_5);
    }

    .bottom[data-bottom="4"] {
        gap: var(--spacing-4);
    }

    .right[data-top="0"] {
        top: 0;
    }

    .right[data-top="0.5"] {
        top: var(--spacing-0_5);
    }

    .right[data-right="1"] {
        right: var(--spacing-1);
    }

    .right[data-right="1.5"] {
        right: var(--spacing-1_5);
    }

    .right[data-right="2"] {
        right: var(--spacing-2);
    }

    .right[data-right="2.5"] {
        right: var(--spacing-2_5);
    }

    .right[data-right="3"] {
        right: var(--spacing-3);
    }

    .right[data-right="3.5"] {
        right: var(--spacing-3_5);
    }

    .right[data-right="4"] {
        gap: var(--spacing-4);
    }

    .top[data-top="0"] {
        top: 0;
    }

    .top[data-top="0.5"] {
        top: var(--spacing-0_5);
    }

    .top[data-top="1"] {
        top: var(--spacing-1);
    }

    .top[data-top="1.5"] {
        top: var(--spacing-1_5);
    }

    .top[data-top="2"] {
        top: var(--spacing-2);
    }

    .top[data-top="2.5"] {
        top: var(--spacing-2_5);
    }

    .top[data-top="3"] {
        top: var(--spacing-3);
    }

    .top[data-top="3.5"] {
        top: var(--spacing-3_5);
    }

    .top[data-top="4"] {
        gap: var(--spacing-4);
    }
</style>
