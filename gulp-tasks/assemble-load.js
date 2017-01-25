'use strict';


module.exports = (gulp, callback) => {
	const path = require('path');
	const assemble = require('assemble')();

	assemble.helpers(path.join(__dirname, '/../app/assemble/helpers/*.js'));

	assemble.partials([
		path.join(__dirname, '/../app/assemble/includes/*.hbs'),
		path.join(__dirname, '/../app/assemble/modules/*.hbs'),
		path.join(__dirname, '/../app/assemble/partials/*.hbs')
	]);
	assemble.layouts(path.join(__dirname, '/../app/assemble/layouts/*.hbs'));
	assemble.data(path.join(__dirname, '/../app/assemble/fixtures/*.json'));
  	assemble.pages(path.join(__dirname, '/../app/assemble/*.hbs'));

	gulp.assemble = assemble;

	callback();

}
