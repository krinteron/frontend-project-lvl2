#!/usr/bin/env node

//import commander from '../node_modules/commander';

const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .helpOption('-h, --help', 'output usage information')
  .parse(process.argv);