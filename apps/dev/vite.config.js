import { defineConfig } from 'vite';

import { sveltekit } from '@sveltejs/kit/vite';
import { unding } from '@unding/studio/vite';

export default defineConfig({
	plugins: [sveltekit(), unding()],
});
