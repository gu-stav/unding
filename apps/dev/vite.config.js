import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	resolve: {
		alias: [
			{
				find: 'virtual:unding-config',
				replacement: `${process.cwd()}/unding.config.js`
			}
		],
	},

	server: {
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd()),
			]
		}
	},
});
