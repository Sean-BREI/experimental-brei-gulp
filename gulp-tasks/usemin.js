module.exports = (gulp, callback) => {

	const usemin = require('gulp-usemin');

	return gulp.src('./app/*.html')
		.pipe(usemin({}))
		.pipe(gulp.dest('./dist'));

}
