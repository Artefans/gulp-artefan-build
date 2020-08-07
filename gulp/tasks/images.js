const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const size = require('gulp-size');
const webp = require('gulp-webp');
const paths = require('../paths');


const images = () => {
  return gulp
    .src(paths.src.images)
    .pipe(imagemin({
      mozjpeg: {
        quality: 75,
        progressive: true
      },
      optipng: {
        optimizationLevel: 3
      },
      svgo: {
        plugins: [{
          removeViewBox: true
        }, {
          cleanupIDs: false
        }],
      },
    }))
    .pipe(size({
      showFiles: true
    }))
    .pipe(gulp.dest(paths.build.images))
    .pipe(webp())
    .pipe(gulp.dest(paths.build.images));
};

module.exports = images;