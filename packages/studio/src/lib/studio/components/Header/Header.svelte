<div class="flex flex-row p-3 justify-between">
    <slot name="wat">
        <h2 class="font-bold uppercase text-lg p-2">
            <slot name="title" />
        </h2>

        <div class="flex gap-2 items-start">
            <slot name="action" />
        </div>
    </slot>
</div>
