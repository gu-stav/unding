import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { join } from 'node:path';

function defineConfig() {
	const cwd = process.env?.APP_DIR ?? process.cwd();

	return {
		preprocess: vitePreprocess(),
		kit: {
			adapter: adapter(),
			env: {
				dir: join(cwd)
			},
		}
	}
}

export default defineConfig();
