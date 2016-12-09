var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var stylelint = require('stylelint');

module.exports = function (gulp, callback) {

	var processors = [
		stylelint(),
        autoprefixer(),
        cssnano({
			autoprefixer: false
		})
    ];

	return gulp.src('in.css')
        .pipe(postcss(processors, {syntax: scss}))
        .pipe(gulp.dest('out'));

}
