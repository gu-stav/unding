import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { join } from 'node:path';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
        outDir: join(process.env.PROCESS_CWD, '.svelte-kit'),
	}
};

export default config;
