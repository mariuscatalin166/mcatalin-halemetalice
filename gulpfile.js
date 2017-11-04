const gulp = require('gulp')
      sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('styles', () => {
  return gulp.src('css-gallery/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css-gallery'));
});

gulp.task('watch', () => {
  gulp.watch('./css/**/*.scss', ['styles'])
});

gulp.task('watch', () => {
  gulp.watch('./css-gallery/**/*.scss', ['styles'])
});

gulp.task('default', ['styles']);