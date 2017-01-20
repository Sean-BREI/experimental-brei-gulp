const gulp = require('gulp');
require('gulp-require-tasks')();

gulp.task('build', [
	'assemble'
]);

gulp.task('default', ['build']);
