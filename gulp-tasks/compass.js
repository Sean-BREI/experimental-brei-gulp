const compass = require('gulp-compass');
const path = require('path');

module.exports = (gulp, callback) => {
	return gulp.src('./sass/main.scss')
		.pipe(compass({
			config_file: './config.rb',
			css: 'css',
			sass: 'sass'
		}));
};
