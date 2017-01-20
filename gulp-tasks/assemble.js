// 'use strict';
//
// var app = require('assemble')();
// const path = require('path');
// var ext = require('gulp-extname');
//
// app.option('layout', 'default');
//
// console.log(path.join(__dirname, '../app/assemble/layouts/**/*.hbs'));
//
// app.layouts();
// app.partials();
// app.data(p);
//
// app.task('default', function () {
//
// 	console.log(path.join(__dirname, '../app/assemble/**/*.hbs'));
//
//     app.src(path.join(__dirname, '../app/assemble/**/*.hbs'), { layout: 'default' })
//             .pipe(app.renderFile())
//             .pipe(ext())
//             .pipe(app.dest('./app'));
//
// });
//
// module.exports = app;
//
// //
// //
//
// const assemble = require('assemble')();
//
//
//
// module.exports = (gulp, callback) => {
//
//
//
// 	return gulp.src('./sass/main.scss')
// 		.pipe(compass({
// 			config_file: './config.rb',
// 			css: 'css',
// 			sass: 'sass'
// 		}));
// };
//
//

'use strict';

module.exports = {
	dep: ['assemble-load'],
	fn: function (gulp, callback) {

		console.log(arguments);

		const path = require('path');
		const extname = require('gulp-extname');

		return assemble.toStream('pages')
			.pipe(assemble.renderFile())
			.pipe(extname())
			.pipe(assemble.dest('../app'));

	}
}
