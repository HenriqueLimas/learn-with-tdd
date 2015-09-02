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

console.log(lessons[course].logo);
console.log('\n');
console.log(lessons[course].welcome);
console.log('\n');
console.log(lessons[course][lesson].lessonNumber);
console.log('\n');
console.log('Today we gonna learn: ' + lessons[course][lesson].title);
console.log('\n');

var karmaProcess = new karma(extend(karmaConfig, {
  files: lessonConfig.files
})).start();

process.on('uncaughtException', function(err) {
  console.err(err.stack);
});
