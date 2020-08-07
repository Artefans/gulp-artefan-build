const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const paths = require('../paths');

const fonts = () => {
  gulp.src(paths.src.fonts)
  .pipe(ttf2woff())
  .pipe(gulp.dest(paths.build.fonts));
  return gulp.src(paths.src.fonts)
  .pipe(ttf2woff2())
  .pipe(gulp.dest(paths.build.fonts));
};

module.exports = fonts;
