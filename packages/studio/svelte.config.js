import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { join } from 'node:path';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			out: join(process.env.PROCESS_CWD, 'build'),
		}),
        outDir: join(process.env.PROCESS_CWD, '.svelte-kit'),
	}
};

export default config;
