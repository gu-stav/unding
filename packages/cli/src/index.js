import * as dotenv from 'dotenv';
import { execa } from 'execa';
import { join, resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { startServer } from '@unding/studio';
import { fileURLToPath } from 'url';
import ora from 'ora';

dotenv.config();

function getSvelteKitPath() {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const devSvelteKitPath = resolve(join(__dirname, '../../studio'));

    if (existsSync(devSvelteKitPath)) {
        return devSvelteKitPath;
    }

    return resolve("node_modules", "@unding", "studio");
}

async function createSvelteKitChildProcess(...args) {
    try {
        const { stdout, stderr } = await execa(...args, {
            cwd: getSvelteKitPath(),
            env: {
                PROCESS_CWD: process.cwd()
            }
        });

        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr);
    } catch (error) {
        console.log(error);
    }
}

export async function start() {
    const spinner = ora('Starting server');

    const port = await startServer();

    spinner.text = `Sever started on http://localhost:${port}`;
    spinner.succeed();
}

export async function dev() {
    const spinner = ora('Starting dev-server');

    spinner.start();
    spinner.text = `Dev-sever started on http://localhost:5173`;
    spinner.succeed();

    await createSvelteKitChildProcess('pnpm', ['dev']);
}

export async function build() {
    const spinner = ora('Building @unding/studio');

    spinner.start();

    await createSvelteKitChildProcess('pnpm', ['build']);

    spinner.succeed();
}
