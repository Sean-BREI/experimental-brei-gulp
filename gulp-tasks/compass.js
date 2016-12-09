var compass = require('gulp-compass');
var path = require('path');

module.exports = function (gulp, callback) {

	return gulp.src('./app/sass/main.scss')
			   .pipe(compass({
				   config_file: 'config.rb',
				   css: '/app/css',
				   sass: '/app/sass'
			   }).on('err', function (err) {
		            console.log(err);
		        }));

}
