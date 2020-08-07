const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const gcmq = require('gulp-group-css-media-queries')
const size = require('gulp-size')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const mode = require('gulp-mode')()

const paths = require('../paths')

const css = () => {
  return gulp
    .src(paths.src.css)
    .pipe(plumber())
    .pipe(mode.development(sourcemaps.init()))
    .pipe(
      sass({
        sourceMap: true,
        precision: 3,
        errLogToConsole: true,
      }).on('error', sass.logError),
    )
    .pipe(mode.production(gcmq()))
    .pipe(
      mode.production(
        postcss([
          autoprefixer(),
          cssnano(),
        ]),
      ),
    )
    .pipe(mode.development(sourcemaps.write()))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(paths.build.css))
    .pipe(rename({extname: ".min.css"}))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.build.css));
};

module.exports = css;
