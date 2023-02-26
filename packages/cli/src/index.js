import { execa } from 'execa';
import { join, resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { startServer } from '@unding/studio';
import ora from 'ora';
import * as dotenv from 'dotenv';

dotenv.config();

function getSvelteKitPath() {
    const __dirname = new URL('.', import.meta.url).pathname;
    const devSvelteKitPath = join(__dirname, '../../studio');

    if (existsSync(devSvelteKitPath)) {
        return devSvelteKitPath;
    }

    return resolve("node_modules", "@unding", "studio");
}

async function createSvelteKitChildProcess(command, params, options = { stdout: true, stderr: true }) {
    try {
        const { stdout, stderr } = await execa(command, params, {
            cwd: getSvelteKitPath(),
            env: {
                PROCESS_CWD: process.cwd()
            }
        });

        if (options?.stdout) {
            stdout.pipe(process.stdout);
        }

        if (options?.stderr) {
            stderr.pipe(process.stderr);
        }
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
    await createSvelteKitChildProcess('npm', ['run', 'dev']);
}

export async function build(options) {
    const spinner = ora('Building @unding/studio');

    spinner.start();

    await createSvelteKitChildProcess('npm', ['run', 'build'], options);

    spinner.succeed();
}
