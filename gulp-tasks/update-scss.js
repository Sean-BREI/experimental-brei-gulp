module.exports = (gulp, callback) => {

	const path = require('path');
	const exec = require('child_process').exec;

	exec('node updateScss.js', {
		cwd: path.join(__dirname, '/../app/lib')
	},
	function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		callback(err);
	});

}
