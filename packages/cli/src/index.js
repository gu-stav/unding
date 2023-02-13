import { execa } from 'execa';
import { join } from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;
const kitDir = join(__dirname, '../../studio');
const cwd = process.cwd();

function createSvelteKitChildProcess(...args) {
    try {
        const { stdout, stderr } = execa(...args, {
            cwd: kitDir,
            env: {
                PROCESS_CWD: cwd
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
