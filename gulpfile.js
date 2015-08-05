var gulp = require('gulp');
var karma = require('karma').Server;

gulp.task('js', function(done) {
	new karma({
		configFile: __dirname + '/js/karma.conf.js'
	}, done).start();
});
