'use strict';

// Variables

var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var include = require('posthtml-include');
var minify = require('gulp-csso');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var posthtml = require('gulp-posthtml');
var rename = require('gulp-rename');
var run = require('run-sequence'); //maybe need to delete at final development stage
var sass = require('gulp-sass');

// Task functions

var style = function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('source/css/'))
    .pipe(browserSync.stream());
}

var serve = function () {
  browserSync.init({
    server: 'source/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch('source/sass/**/*.scss', style);
  gulp.watch('source/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('source/*.html').on('change', browserSync.reload);
}

// Gulp tasks

gulp.task('build', style);
gulp.task('serve', serve);
