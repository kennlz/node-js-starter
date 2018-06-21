const gulp = require('gulp');
const gls = require('gulp-live-server');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
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
gulp.task('default', ['build'], () => {

});

