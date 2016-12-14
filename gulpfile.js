'use strict';

const         gulp = require('gulp');
const         sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const  browserSync = require('browser-sync').create();

gulp.task('server', ['build'], function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./assets/css/**/*.sass', ['build']);
	gulp.watch(['./dest/**/*.*', './index.html']).on('change', browserSync.reload);

});

gulp.task('build', function () {
	return gulp.src('./assets/css/main.sass')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('./dest'));
});

gulp.task('default', ['server']);