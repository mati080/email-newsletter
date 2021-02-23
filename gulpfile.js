const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const inlineCss = require('gulp-inline-css');

gulp.task('styles', () => {
    return gulp.src('./style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('inline-css', function() {
    return gulp.src('./public/*.html')
        .pipe(inlineCss(
            {
                removeStyleTags: false
            }
        ))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
    gulp.watch('./style/**/*.scss', (done) => {
        gulp.series(['styles'])(done);
    });
});