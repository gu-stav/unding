import * as dotenv from 'dotenv';
import { join, resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'url';
import ora from 'ora';
import { ensureSymlink } from 'fs-extra';

dotenv.config();

function getSvelteKitPath() {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const devSvelteKitPath = resolve(join(__dirname, '../../studio'));

    if (existsSync(devSvelteKitPath)) {
        return devSvelteKitPath;
    }

    return resolve("node_modules", "@unding", "studio");
}

async function linkStudio() {
    const cwd = process.cwd();
    const cmsStudioPath = getSvelteKitPath();

    const routesSourceDir = join(cmsStudioPath, 'src', 'routes');
    const routesTargetDir = join(cwd, 'src', 'routes', 'unding');

    await ensureSymlink(routesSourceDir, routesTargetDir);
}

export async function start() {
    const spinner = ora('Starting server');

    //const port = await startServer();

    spinner.text = `Sever started on http://localhost:${port}`;
    spinner.succeed();
}

export async function dev() {
    await linkStudio();
}

export async function build() {
    await linkStudio();
}
