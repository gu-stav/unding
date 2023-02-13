#!/usr/bin/env node

import { program } from "commander";

import { dev, build, preview } from '../index.js';

program
  .command('build')
  .action(build);

program
  .command('dev')
  .action(dev);

program
  .command('preview')
  .action(preview);

program.parse();
