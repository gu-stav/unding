#!/usr/bin/env node

import { program } from "commander";

import { dev, build, start } from './programs.js';

program
  .command('build')
  .action(build);

program
  .command('dev')
  .action(dev);

program
  .command('start')
  .action(start);

program.parse();
