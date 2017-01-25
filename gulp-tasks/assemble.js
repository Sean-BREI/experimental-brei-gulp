'use strict';

module.exports = {
	dep: ['assemble-load'],
	fn: function (gulp, callback) {

		let assemble = gulp.assemble;

		const extname = require('gulp-extname');

		return assemble.toStream('pages')
			.pipe(assemble.renderFile())
			.pipe(extname())
			.pipe(assemble.dest('app'));

	}
}
