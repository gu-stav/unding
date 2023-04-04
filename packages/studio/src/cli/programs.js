import * as dotenv from 'dotenv';
import ora from 'ora';

dotenv.config();

export async function start() {
    const spinner = ora('Starting server');

    //const port = await startServer();

    spinner.text = `Sever started on http://localhost:${port}`;
    spinner.succeed();
}

export async function dev() {}
export async function build() {}
