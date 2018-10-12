'use strict';

// Variables

// TODO: подумать, все ли опции нужны

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
var webp = require('gulp-webp');
var sass = require('gulp-sass');

// Task functions

var del = function () {
  return del('build');
}

var copy = function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/js/**'
  ]), {
    base: 'source'
  }
    .pipe(gulp.dest('build'));
}

var style = function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css/'))
    .pipe(minify())
    .pipe(remane('style.min.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.stream());
}

var html = function () {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest('build'));
}

var serve = function () {
  browserSync.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch('build/sass/**/*.scss', style);
  gulp.watch('build/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('build/img/**/*.svg').on('change', browserSync.reload);
  gulp.watch('build/*.html').on('change', browserSync.reload);
}

// Gulp tasks

gulp.task('build', gulp.series(del, copy, style, html));
gulp.task('serve', serve);
