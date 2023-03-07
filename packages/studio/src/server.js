import express from 'express';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url'
import { build } from 'vite'

const PORT = 5173;

function createExpressApp() {
    return express();
}

export async function startServer() {
    const { handler } = await import(resolve(process.cwd(), 'build', 'handler.js'));
    const app = createExpressApp();

    app.use(handler);

    return new Promise((resolve) => {
        app.listen(PORT, () => {
            resolve(PORT)
        });
    })
}

export function getStudioPath() {
    return resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
}

export async function buildStudio({ appDir }) {
    process.env.APP_DIR = appDir;

    await build({
        logLevel: 'silent',
        root: getStudioPath(),
    });
}
