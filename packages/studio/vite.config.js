import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const cwd = process.env?.PROCESS_CWD ?? process.cwd();

export default defineConfig({
	resolve: {
		alias: [
			{
				find: 'virtual:unding-config',
				replacement: `${cwd}/unding.config.js`
			}
		],
	},

	plugins: [sveltekit()]
});
