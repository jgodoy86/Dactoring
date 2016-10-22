var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 9000
  });
});

gulp.task('sass', function () {
  sass('sass/**/*.scss', {
    style: 'compressed'
  })
  .pipe(gulp.dest('assets/css/'))
  .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('templates/**/*.html')
      .pipe(connect.reload());
});

gulp.task('index', function () {
  gulp.src('index.html')
      .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('js/**/*.js')
      .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('templates/**/*.html', ['html']);
  gulp.watch('index.html', ['index']);
  gulp.watch('js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'html', 'index', 'js', 'connect', 'watch']);