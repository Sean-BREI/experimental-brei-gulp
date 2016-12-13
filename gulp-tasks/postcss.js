const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const stylelint = require('stylelint');

module.exports = (gulp, callback) => {

	const processors = [
		stylelint(),
        autoprefixer(),
        cssnano({
			autoprefixer: false
		})
    ];

	return gulp.src('in.css')
        .pipe(postcss(processors, { syntax: scss }))
        .pipe(gulp.dest('out'));

};
