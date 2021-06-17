var gulp = require('gulp');
var config = require('../config');

function build(cb) {
  gulp.series(
    'clean',
    gulp.parallel(
      'postcss',
      'pug',
    ),
    'webpack',
    'copy',
    'list-pages',
  )(cb);
}

gulp.task('build', function(cb) {
  config.setEnv('production');
  config.logEnv();
  build(cb);
});

gulp.task('build:dev', function(cb) {
  config.setEnv('development');
  config.logEnv();
  build(cb);
});
