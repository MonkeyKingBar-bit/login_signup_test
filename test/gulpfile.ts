const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const scss = require('gulp-sass')(require('sass'));

const SCSS_SRC = './src/assets/scss/**/*.scss';
const SCSS_DEST = './src/assets/css';

function styles() {
  return src(SCSS_SRC)
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true,
    }))
    .pipe(dest(SCSS_DEST));
}

function watching() {
  watch([SCSS_SRC], styles);
}

exports.styles = styles;
exports.watching = watching;
