var gulp = require('gulp');
var config = require('../config');

gulp.task('watch',
  gulp.parallel(
    'pug:watch',
    'list-pages:watch',
    'postcss:watch',
    'webpack:watch',
    'copy:watch'
  )
);
