import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-node';

function defineConfig() {
	return {
		preprocess: vitePreprocess(),
		kit: {
			adapter: adapter(),
		}
	}
}

export default defineConfig();
