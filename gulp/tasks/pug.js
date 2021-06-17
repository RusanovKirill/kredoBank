var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
var frontMatter = require('gulp-front-matter');
var prettify = require('gulp-prettify');
var pug = require('gulp-pug');
var config = require('../config');
var server = require('./server');

function renderHtml(onlyChanged) {
  return gulp
    .src([config.src.templates + '/[^_]*.pug'])
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(gulpif(onlyChanged, changed(config.dest.html, { extension: '.html' })))
    .pipe(frontMatter({ property: 'data' }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(prettify({
      indent_size: 2,
      wrap_attributes: 'auto', // 'force'
      preserve_newlines: true,
      // unformatted: [],
      end_with_newline: true
    }))
    .pipe(gulp.dest(config.dest.html));
}

gulp.task('pug', function() {
  return renderHtml();
});

gulp.task('pug:changed', function() {
  return renderHtml(true);
});

gulp.task('pug:watch', function() {
  gulp.watch([config.src.templates + '/**/_*.pug'], gulp.series('pug')).on('change', server.reload);
  gulp.watch([config.src.templates + '/**/[^_]*.pug'], gulp.series('pug:changed')).on('change', server.reload);
});
