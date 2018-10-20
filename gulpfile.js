'use strict';

// Variables

var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var del = require('del');
var gulp = require('gulp');
var include = require('posthtml-include');
var htmlmin = require('gulp-htmlmin');
var minCss = require('gulp-csso');
var minJs = require('gulp-uglify');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var posthtml = require('gulp-posthtml');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

// Task functions

var clean = function () {
  return del('build');
}

var copy = function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'));
}

var svgUpdate = function () {
  return gulp.src('source/img/*.svg')
    .pipe(gulp.dest('build/img'));
}

var scripts = function () {
  return gulp.src('source/js/*.js')
    .pipe(minJs())
    .pipe(gulp.dest('build/js/'));
}

var style = function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('build/css/'))
    .pipe(minCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css/'))
    .pipe(browserSync.stream());
}

var html = function () {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
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
  gulp.watch('source/sass/**/*.scss', style);
  gulp.watch('source/img/*.svg', gulp.series(svgUpdate, html)).on('change', browserSync.reload);
  gulp.watch('source/js/*.js', scripts).on('change', browserSync.reload);
  gulp.watch('source/*.html', html).on('change', browserSync.reload);
}

// Gulp tasks

gulp.task('build', gulp.series(clean, copy, scripts, style, html));
gulp.task('serve', serve);
