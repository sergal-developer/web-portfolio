const gulp = require('gulp');
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const nodemon = require('nodemon');
const gnodemon = require('gulp-nodemon');
const open = require('gulp-open');
const es = require('event-stream');

const config = {
  dest: './docs',
  sassFiles: './src/**/*.scss',
  htmlFiles: './src/**/*.html',
  assersFiles: './src/asserts/**/*',
  tsFiles: './src/**/*.ts',
}

gulp.task('clear', () => {
  return (gulp.src(config.dest, {read: true, allowEmpty: true})
    .pipe(clean()));
});

gulp.task('html', () => {
  return gulp.src(config.htmlFiles)
        .pipe(gulp.dest(config.dest));
});

gulp.task('asserts', () => {
  return gulp.src(config.assersFiles, { base: './src'})
        .pipe(gulp.dest(config.dest));
});

gulp.task('styles', () => {
  return gulp.src(config.sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.dest));
});

gulp.task("scripts", () => {
  var tsconfig = require('./tsconfig.json');
  return gulp.src(config.tsFiles)
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(gulp.dest(config.dest));
});

gulp.task('watchers-dev', () => {
  gulp.watch([config.sassFiles], gulp.series('styles'));
  gulp.watch([config.tsFiles], gulp.series('scripts'));
  gulp.watch([config.htmlFiles], gulp.series('html'));
  return;
});

gulp.task('server', () => {
  gulp.series('dev');
  gnodemon({
      script: 'index.js',
      watch: ['./src/**/*'],
      env: {'NODE_ENV': process.env.NODE_ENV !== 'production'
      ? process.env.NODE_ENV || 'development' : 'development'}
  })
  .on('start', ['watchers-dev'])
  .on('change', ['watchers-dev'])
  .on('restart', function () {
    console.log('restarted!');
  });
});

gulp.task('build', 
  gulp.series('html', 'asserts', 'styles', 'scripts'));

gulp.task('dev', 
  gulp.series('build', 'server' ));

  