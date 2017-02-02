"use strict";

var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');


// server connect
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    });
});

// css
gulp.task('css', function() {
    return gulp.src('scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 12 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(rename("bundle.min.css"))
        .pipe(gulp.dest('app/styles/'))
        .pipe(connect.reload())
        .pipe(notify('Done!'));
});

//html
gulp.task('html', function() {
    gulp.src('app/index.html')
        .pipe(connect.reload());
});

// watch
gulp.task('watch', function() {
    gulp.watch('css/*.css', ['css']);
    gulp.watch('app/*.html', ['html']);
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);