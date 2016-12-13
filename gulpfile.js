const gulp = require('gulp');
require('gulp-require-tasks')();

gulp.task('build', [
	'compass'
]);

gulp.task('default', ['build']);
