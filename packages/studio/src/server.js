import express from 'express';
import { resolve } from 'node:path';

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
