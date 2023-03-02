import { writable } from 'svelte/store';
import { components as componentOverwrites } from 'virtual:unding-config';

export const components = writable({
    ...componentOverwrites
});
