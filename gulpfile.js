var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));

const config = {
  dest: './docs'
}


//Global tasks
gulp.task(
  'resources-compressor',
  function buildStyles() {
    return gulp.src('./sources/**/*.scss')
      .pipe(sass({ style: 'expanded' }))
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest(config.dest));
  }
);
