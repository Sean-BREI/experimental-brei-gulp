module.exports = {
	dep: ['update-scss', 'compass'],
	fn: function (gulp, callback) {

		// oh ye path, our lord and savior
		const path = require('path');

		const autoprefixer = require('autoprefixer');
		const cssnano = require('cssnano');
		const stylelint = require('stylelint');
		const postcss = require('gulp-postcss');

		const processors = [
			stylelint(),
	        autoprefixer(),
	        cssnano({
				autoprefixer: false
			})
	    ];

		return gulp.src(path.join(__dirname, '/../app/css/main.css'))
	        .pipe(postcss([
				// stylelint(),
		        autoprefixer(),
		        cssnano({
					autoprefixer: false
				})
		    ]))
	        .pipe(gulp.dest(path.join(__dirname, '/../app/.tmp/css')));

	}

};
