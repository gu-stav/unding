import * as dotenv from 'dotenv';
import { execa } from 'execa';
import { join, resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { buildStudio, getStudioPath, startServer } from '@unding/studio';
import { fileURLToPath } from 'url';
import ora from 'ora';
import { move, remove } from 'fs-extra';

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
        const { stdout, stderr } = execa(...args, {
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

    const appDir = process.cwd();
    const buildDir = getStudioPath();

    process.chdir(buildDir);

    await buildStudio({
        appDir
    });

    spinner.text = `Copy build artifacts`;

    const output = [
        'build',
        '.svelte-kit'
    ];

    for (let i = 0; i < output.length; ++i) {
        const dir = output[i];

        await remove(join(appDir, dir));
        await move(join(buildDir, dir), join(appDir, dir));
    }

    spinner.succeed();
}
