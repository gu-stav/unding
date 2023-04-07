import { searchForWorkspaceRoot } from 'vite';
import { join, resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { ensureSymlink } from 'fs-extra';

function getSvelteKitPath() {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const devSvelteKitPath = resolve(join(__dirname, '../../kit'));

    if (existsSync(devSvelteKitPath)) {
        return devSvelteKitPath;
    }

    return resolve("node_modules", "@unding", "kit");
}

async function linkStudio() {
    const cwd = process.cwd();
    const kitPath = getSvelteKitPath();

    const routesSourceDir = join(kitPath, 'src', 'routes');
    const routesTargetDir = join(cwd, 'src', 'routes', 'unding');

    await ensureSymlink(routesSourceDir, routesTargetDir);
}

export function unding() {
    return {
        name: 'vite-plugin-unding',

        async config(config) {
            await linkStudio();

            return {
                ...config,
                resolve: {
                    alias: [
                        ...config?.resolve?.alias,
                        {
                            find: 'virtual:unding-config',
                            replacement: `${process.cwd()}/unding.config.js`
                        }
                    ]
                },

                server: {
                    ...config?.server,
                    fs: {
                        ...config?.server?.fs,
                        allow: [
                            ...config?.server?.fs?.allow,
                            searchForWorkspaceRoot(process.cwd()),
                        ]
                    }
                }
            }
        }
    }
};
