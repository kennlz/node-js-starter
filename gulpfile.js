const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-mocha');

gulp.task('lint', () => {
	return gulp.src(['src/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});
gulp.task('build', ['lint'], () => {
	return gulp.src(['src/*.js'])
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});
gulp.task('test', ['build'], () => {

});
gulp.task('default', ['test'], () => {
	const stream = nodemon({
		script: 'dist/app.js',
		watch: 'src',
		env: { NODE_ENV: 'development' },
		tasks: ['test'],
	});
	stream
		.on('restart', () => {
			console.log('restarting');
		})
		.on('crash', () => {
			console.error('Application has crashed');
			stream.emit('restart', 10);
		});
});
