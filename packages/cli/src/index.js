import { execa } from 'execa';
import { join, resolve } from 'node:path';
import { existsSync } from 'node:fs';

function getSvelteKitPath() {
    const __dirname = new URL('.', import.meta.url).pathname;
    const devSvelteKitPath = join(__dirname, '../../studio');

    if (existsSync(devSvelteKitPath)) {
        return devSvelteKitPath;
    }

    return resolve("node_modules", "@unding", "studio");
}

console.log(getSvelteKitPath())

function createSvelteKitChildProcess(...args) {
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

export async function dev() {
    createSvelteKitChildProcess('npm', ['run', 'dev']);
}

export async function build() {
    createSvelteKitChildProcess('npm', ['run', 'build']);
}
