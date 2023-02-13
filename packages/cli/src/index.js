import { execa } from 'execa';
import { join } from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;
const kitDir = join(__dirname, '../../studio');
const cwd = process.cwd();

export async function dev() {
    try {
        await execa('npm', ['run', 'dev'], {
            cwd: kitDir,
            env: {
                PROCESS_CWD: cwd
            }
        }).stdout.pipe(process.stdout);
    } catch (error) {
        console.log(error);
    }
}

export async function build() {
    try {
        await execa('npm', ['run', 'build'], {
            cwd: kitDir,
            env: {
                PROCESS_CWD: cwd
            }
        }).stdout.pipe(process.stdout);
    } catch (error) {
        console.log(error);
    }
}
