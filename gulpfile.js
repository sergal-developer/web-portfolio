var gulp = require('gulp'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify'),
  replace = require('gulp-replace'),
  postcss = require('gulp-postcss'),
  log = require('fancy-log'),
  del = require('del'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  chalk = require('chalk'),
  argv = require('yargs').argv,
  async = require('async'),
  zip = require('gulp-zip');

gulp.task(
  'styles-sass-compressor',
  gulp.series(function stylesSassCompressor() {
    return gulp
      .src('./resources/styles/main.scss')
      .pipe(sass({ outputStyle: 'compressed' }))
      .pipe(
        postcss([
          autoprefixer(optimizationConfig.autoprefixer),
          cssnano(optimizationConfig.cssnano),
        ])
      )
      .pipe(gulp.dest('./src/app/_common/styles/'));
  })
);

gulp.task(
  'fonts-css-compressor',
  gulp.series(function fontsCSSCompressor() {
    return gulp
      .src('./resources/fonts/**/*.css')
      .pipe(
        postcss([
          autoprefixer(optimizationConfig.autoprefixer),
          cssnano(optimizationConfig.cssnano),
        ])
      )
      .pipe(gulp.dest('./src/app/_common/fonts/'));
  })
);

gulp.task(
  'resources-styles-compressor',
  gulp.series(
    'styles-clean',
    'styles-copy-fonts',
    'fonts-css-compressor',
    'styles-sass-compressor'
  )
);

gulp.task(
  'plugins-js-compressor',
  gulp.series(function pluginsJSCompressor() {
    return gulp
      .src(plugins_config.scripts)
      .pipe(minify(optimizationConfig.uglifyjs))
      .pipe(concat('plugins.min.js'))
      .pipe(gulp.dest('./src/app/_common/plugins/scripts/tools/'));
  })
);

gulp.task(
  'components-copy-images',
  gulp.series(function componentsCopyImages() {
    return gulp
      .src('./src/app/**/*.{png,jpeg,jpg,ico,gif}')
      .pipe(rename({ dirname: '' }))
      .pipe(gulp.dest('__build__/image/'));
  })
);



//Global tasks
gulp.task(
  'resources-compressor',
  gulp.series(
    gulp.parallel('resources-styles-compressor')
  )
);
