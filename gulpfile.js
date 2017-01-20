const gulp = require('gulp');
require('gulp-require-tasks')();

gulp.task('build', [
	'assemble',
	'update-scss'
]);

gulp.task('default', ['build']);
