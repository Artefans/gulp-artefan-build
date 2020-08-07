const gulp = require('gulp');
const rigger = require('gulp-rigger');
const htmlmin = require('gulp-htmlmin');
const cachebust = require('gulp-cache-bust');
const mode = require('gulp-mode')();
const webpHTML = require('gulp-webp-html');
const fileinclude = require('gulp-file-include');
const paths = require('../paths');

const html = () => {
  return gulp
    .src(paths.src.html)
    .pipe(fileinclude())
    .pipe(rigger())
    .pipe(mode.production(htmlmin({
      collapseWhitespace: true,
    })))
    .pipe(mode.production(cachebust({
      type: 'timestamp',
    })))
    .pipe(webpHTML())
    .pipe(gulp.dest(paths.build.html));
};

module.exports = html;
