var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var config = require('../config');
var server = require('./server');
var concatCss = require('gulp-concat-css'),
  cssnano = require('cssnano'),
  nested = require('postcss-nested'),
  short = require('postcss-short'),
  precss = require('precss');


gulp.task('postcss', function() {
  var plugins = [
    nested, precss, short, autoprefixer
  ];

  return gulp
    .src(config.src.postcss + '/*.css')
    .pipe(postcss(plugins))
    .pipe(concatCss('styles.css'))
    .pipe(postcss([cssnano()]))
    .on('error', config.errorHandler)
    .pipe(gulp.dest(config.dest.css));

});

gulp.task('postcss:watch', function() {
  gulp.watch(config.src.postcss + '/**/*.css', gulp.series('postcss')).on('change', () => server.reload());
});

