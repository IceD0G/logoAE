//=====before it, instal npm install --save-dev gulp gulp-sass browser-sync
//===reload openserver  proxy: 'OS'
//reload localsorage server: {baseDir: './'}

const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function css() {
  //npm i gulp-clean-css
  return gulp.src('./css/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'))
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.style = style
exports.watch = watch
exports.css = css
