const gulp = require('gulp');
require('gulp-require-tasks')();

gulp.task('build', [
	'assemble',
	'postcss',
	'usemin'
]);

gulp.task('default', ['build']);
