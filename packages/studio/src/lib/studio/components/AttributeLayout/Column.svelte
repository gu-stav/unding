<script>
    export let colSpan = 3;
</script>

<div class="col-span-{colSpan}">
    <slot />
</div>

<style>
    .col-span-1 {
        grid-column: 1 / 1;
    }

    .col-span-2 {
        grid-column: 1 / 2;
    }

    .col-span-3 {
        grid-column: 1 / 3;
    }

    .col-span-4 {
        grid-column: 1 / 4;
    }

    .col-span-5 {
        grid-column: 1 / 5;
    }

    .col-span-6 {
        grid-column: 1 / 6;
    }

    .col-span-7 {
        grid-column: 1 / 7;
    }

    .col-span-8 {
        grid-column: 1 / 8;
    }

    .col-span-9 {
        grid-column: 1 / 9;
    }

    .col-span-10 {
        grid-column: 1 / 10;
    }

    .col-span-11 {
        grid-column: 1 / 11;
    }

    .col-span-12 {
        grid-column: 1 / 12;
    }
</style>
