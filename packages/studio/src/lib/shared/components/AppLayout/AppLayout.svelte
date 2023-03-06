<div class="flex flex-col h-screen">
    <slot name="header" />

    <slot name="sub-navigation" />

    <div class="flex flex-row grow max-h-full">
        <slot />
    </div>
</div>
