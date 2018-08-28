var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

var sassConfig = {
    inputDirectory: 'app/styles/sass/**/*.scss',
    outputDirectory: 'app/styles'

}

gulp.task('connect', function() {
    connect.server({
      root: 'app',
      livereload: true
    });
  });

  gulp.task('html', function () {
    gulp.src('./app/*.html')
      .pipe(connect.reload());
  });

gulp.task('css', function () {
    console.log(1);
    return gulp
        .src(sassConfig.inputDirectory)
        .pipe(concat('style.css'))
        .pipe(sass())
        .pipe(gulp.dest(sassConfig.outputDirectory))
        .pipe(connect.reload());

});

gulp.task('watch', function () {
    gulp.watch('app/styles/sass/**/*.scss', ['css']);
    gulp.watch('./app/*.html', ['html']);

});

gulp.task('default',['connect','watch'])
