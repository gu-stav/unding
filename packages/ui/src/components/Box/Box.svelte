<script>
    import clsx from 'clsx';

    let rest;
    $: ({ as = 'div', backgroundColor, border, borderColor, borderRadius, borderWidth = '1px', color, display, fontWeight, gap, height, direction, padding, position, textTransform, ...rest } = $$props);

    let cssClass;

    $: cssClass = clsx(
        'box',
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
        textTransform
    );
</script>

<svelte:element
    this={as}
    class={cssClass}
    data-gap={gap}
    data-bg={backgroundColor}
    data-border={border}
    data-border-color={borderColor}
    data-font-weight={fontWeight}
    data-height={height}
    data-text={color}
    data-p={padding}
    {...rest}
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
</style>
