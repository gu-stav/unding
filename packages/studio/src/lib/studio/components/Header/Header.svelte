<div class="flex flex-row items-center p-3 justify-between border-gray-200 border-b-[1px]">
    <h2 class="font-bold uppercase text-lg p-2">
        <slot name="title" />
    </h2>

    <div class="flex gap-2 items-start">
        <slot name="action" />
    </div>
</div>
