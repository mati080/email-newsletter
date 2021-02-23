const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('styles', () => {
    return gulp.src('./style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', () => {
    gulp.watch('./style/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});