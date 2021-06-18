#!/usr/bin/env node

//import commander from '../node_modules/commander';
import genDiff from '../src/index.js';

//const { Command } = require('commander');
import { Command } from 'commander';
const program = new Command();
import process from 'process';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2));
  })
  .parse(process.argv);