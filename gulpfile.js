var gulp = require('gulp');
var extend = require('extend');

var karma = require('karma').Server;

var karmaConfig = {
  configFile: __dirname + '/js/karma.conf.js'
};

gulp.task('js', function(done) {
  new karma(karmaConfig, done).start();
});

createTaskLesson('js:lesson1', ['lesson-01/*.js']);
createTaskLesson('js:lesson2', ['lesson-02/*.js']);
createTaskLesson('js:lesson3', ['lesson-03/*.js']);
createTaskLesson('js:lesson4', ['lesson-04/*.js']);
createTaskLesson('js:lesson5', ['lesson-05/*.js']);
createTaskLesson('js:lesson6', ['lesson-06/*.js']);
createTaskLesson('js:lesson7', ['lesson-07/*.js']);
createTaskLesson('js:lesson8', ['lesson-08/*.js']);
createTaskLesson('js:lesson9', ['lesson-09/*.js']);
createTaskLesson('js:lesson10', ['lesson-10/*.js']);

function createTaskLesson(task, files) {
  gulp.task(task, function(done) {
    new karma(extend({
      files: files
    }, karmaConfig), done).start();
  });
}