#!/usr/bin/env node

'use strict';

var spawn = require('child_process').spawn;
var cwd = process.env.PWD || process.cwd();

var userArgs = process.argv.slice(2);

var course = userArgs[0];
var lesson = userArgs[1];

var taskName = course + ':' + lesson;
var gulpProcess = spawn('gulp', [taskName], {
  stdio: 'inherit',
  cwd: cwd
});

gulpProcess.on('close', function(code) {
  process.exit(code);
});

process.on('uncaughtException', function(err) {
  console.err(err.stack);
  gulpProcess.kill('SIGHUP');
});
