var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('sass', function() {
  gulp.src('app/scss/styles.scss')
  .pipe(sass({style: 'expanded'}))
  .pipe(gulp.dest('./assets'))
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});