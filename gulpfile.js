'use strict';

var
  gulp       = require('gulp'),
  sass       = require('gulp-sass'),
  gutil      = require('gulp-util'),
  deploy     = require('gulp-gh-pages'),
  browserify = require('browserify'),
  babelify   = require('babelify'),
  source     = require('vinyl-source-stream'),
  buffer     = require('vinyl-buffer'),
  uglify     = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  moduleShim = require('browserify-shim')
;

/*
 * Transpile es6 code to es5 using Babel and browserify
 */
gulp.task('transpile', function() {
  return browserify('source/js/main.js', { debug : true })
    .transform('babelify', { presets: ['es2015'] })
    .transform(moduleShim)
    .bundle()
    .on('error', function(err) {
      gutil.log(err.stack);
      this.emit('end');
    })
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build'));
});

/*
 * Copy non-browserify vendor dependencies to the build directory
 */
gulp.task('vendor',  function() {
  return gulp.src('./source/vendor/**/*')
    .pipe(gulp.dest('./build/vendor'));
});

/*
 * Copy resource files to the build directory
 */
gulp.task('resources',  function() {
  return gulp.src('./resources/**/*')
    .pipe(gulp.dest('./build/resources'));
});

/*
 * Copy HTML files over
 */
gulp.task('html', function() {
  return gulp.src('source/**/*.html')
    .pipe(gulp.dest('./build'));
});

/*
 * Convert SASS files to CSS
 */
gulp.task('sass', function() {
  return gulp.src('source/sass/**/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});

/*
 * Build the project and push contents of '/build' directory to the 'deploy-prod' branch
 */
gulp.task('deploy', ['build'], function() {
  return gulp.src('./build/**/*')
    .pipe(deploy());
});

/*
 * Watch for when JS, HTML, or SCSS files change so they can be updated
 */
gulp.task('watch', function() {
  gulp.watch('source/**/*.js', ['transpile']);
  gulp.watch('source/**/*.html', ['html']);
  gulp.watch('source/**/*.scss', ['sass']);
  gulp.watch('source/vendor/**/*', ['vendor']);
  gulp.watch('resources/**/*', ['resources']);
});

gulp.task('build', ['transpile', 'sass', 'html', 'vendor', 'resources']);
gulp.task('default', ['build']);
