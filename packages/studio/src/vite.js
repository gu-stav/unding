import { searchForWorkspaceRoot } from 'vite';

export function unding() {
    return {
        name: 'vite-plugin-unding',

        async config(config) {
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
