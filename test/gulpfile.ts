const { src, dest, watch } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';

function styles() {
  return src(SCSS_SRC)
    .pipe(scss().on('error', scss.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(dest(SCSS_DEST));
}

function watching() {
  watch([SCSS_SRC], styles);
}

exports.styles = styles;
exports.watching = watching;
