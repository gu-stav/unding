import { writable } from 'svelte/store';

function createStore() {
    const { subscribe, set, update } = writable({});

    return {
        subscribe,
        set,
        setFieldErrors: (errors = []) => update((state) => {
            errors.forEach((error) => {
                const { path } = error;
                const field = state.contentType.attributes.find(attribute => attribute.name === path[0]);

                if (field) {
                    if (!field.error) {
                        field.error = [];
                    }

                    field.error.push(error);
                }
            });

            return state;
        }),
      };
}

export default createStore();
