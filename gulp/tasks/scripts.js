const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename')
const paths = require('../paths');

const scripts = () => {
  return src(paths.src.js)
    .pipe(plumber())
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(dest(paths.build.js))
    .pipe(uglify())
    .pipe(rename({extname: ".min.js"}))
    .pipe(dest(paths.build.js));
};

module.exports = scripts;
