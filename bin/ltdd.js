#!/usr/bin/env node

'use strict';

var cwd = process.env.PWD || process.cwd();

var extend = require('extend');

var karma = require('karma').Server;
var karmaConfig = {
  configFile: cwd + '/js/karma.conf.js'
};

var lessons = require('./lessons');

var userArgs = process.argv.slice(2);

var course = userArgs[0];
var lesson = userArgs[1];

var lessonConfig = lessons[course][lesson];

var karmaProcess = new karma(extend(karmaConfig, {
  files: lessonConfig.files
})).start();

process.on('uncaughtException', function(err) {
  console.err(err.stack);
});
