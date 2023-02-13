#!/usr/bin/env node

import { program } from "commander";

import { dev, build } from '../index.js';

program
  .command('build')
  .action(build);

program
  .command('dev')
  .action(dev);

program.parse();
