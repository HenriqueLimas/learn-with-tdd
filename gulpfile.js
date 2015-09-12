var gulp = require('gulp');
var extend = require('extend');

var karma = require('karma').Server;

var jsLessonFiles = [
  '../utils/customMatchers.js',
];

gulp.task('js', function(done) {
  new karma({
    configFile: __dirname + '/js/karma.conf.js'
  }, done).start();
});

createTaskLesson('js', 'js:lesson1', jsLessonFiles.concat(['lesson-01/*.js']));
createTaskLesson('js', 'js:lesson2', jsLessonFiles.concat(['lesson-02/*.js']));
createTaskLesson('js', 'js:lesson3', jsLessonFiles.concat(['lesson-03/*.js']));
createTaskLesson('js', 'js:lesson4', jsLessonFiles.concat(['lesson-04/*.js']));
createTaskLesson('js', 'js:lesson5', jsLessonFiles.concat(['lesson-05/*.js']));
createTaskLesson('js', 'js:lesson6', jsLessonFiles.concat(['lesson-06/*.js']));
createTaskLesson('js', 'js:lesson7', jsLessonFiles.concat(['lesson-07/*.js']));
createTaskLesson('js', 'js:lesson8', jsLessonFiles.concat(['lesson-08/*.js']));
createTaskLesson('js', 'js:lesson9', jsLessonFiles.concat(['lesson-09/*.js']));
createTaskLesson('js', 'js:lesson10', jsLessonFiles.concat(['lesson-10/*.js']));

var angularLessonFiles = [
  '../utils/customMatchers.js',
  'lib/angular/angular.js'
];

gulp.task('angular', function(done) {
  new karma({
    configFile: __dirname + '/angular/karma.conf.js'
  }, done).start();
});

createTaskLesson('angular', 'angular:lesson1', angularLessonFiles.concat(['lesson-01/*.js']));
createTaskLesson('angular', 'angular:lesson2', angularLessonFiles.concat(['lesson-02/*.js']));

function createTaskLesson(lessonPath, task, files) {
  gulp.task(task, function(done) {
    new karma(extend({
      files: files
    }, {
      configFile: __dirname + '/' + lessonPath + '/karma.conf.js'
    }), done).start();
  });
}
