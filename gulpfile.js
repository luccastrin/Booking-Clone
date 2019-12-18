'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', watch);

gulp.task('sass', compilaSass);

function compilaSass() {
  return gulp
    .src('_src/scss/**/*.scss')
    .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
    .pipe(gulp.dest('_src/css'))
}

function watch() {
  gulp.watch('_src/scss/**/*.scss', compilaSass);
}