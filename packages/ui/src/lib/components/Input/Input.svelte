<script>
    export let disabled = false;
    export let name = null;
    export let error;
</script>

<input class:error={!!error} disabled={disabled} id={name} name={name} {...$$restProps} />

<style>
    input {
        border: 1px solid var(--color-slate-300);
        border-radius: var(--radius);
        color: var(--color-slate-800);
        padding: var(--spacing-2);
        width: 100%;
    }

    input[disabled] {
        background-color: var(--color-slate-100);
    }

    input.error {
        background-color: var(--color-red-100);
        border-color: var(--color-red-400);
    }
</style>
