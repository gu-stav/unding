import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

function defineConfig() {
	return {
		preprocess: vitePreprocess(),
		kit: {
			adapter: adapter(),
		}
	}
}

export default defineConfig();
