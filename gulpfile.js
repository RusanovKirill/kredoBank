// Require all tasks in gulp/tasks, including subfolders
require('require-dir')('./gulp/tasks', { recurse: true });

var gulp = require('gulp');

gulp.task('default',
  gulp.series(
    'server',
    'watch',
    'build:dev',
  )
);
