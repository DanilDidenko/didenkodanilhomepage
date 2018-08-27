var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload');

var sassConfig = {
    inputDirectory: 'app/styles/sass/**/*.scss',
    outputDirectory: 'app/styles'

}
gulp.task('css', function () {
    console.log(1);
    return gulp
        .src(sassConfig.inputDirectory)
        .pipe(concat('style.css'))
        .pipe(sass())
        .pipe(gulp.dest(sassConfig.outputDirectory))

});

gulp.task('watch', function () {
    gulp.watch('app/styles/sass/**/*.scss', ['css']);
});
