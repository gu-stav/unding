import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { unding } from '@unding/studio/vite';

export default defineConfig({
	plugins: [sveltekit(), unding()],
});
