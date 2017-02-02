  "use strict";

  var gulp = require('gulp');
  var uncss = require('gulp-uncss');

  gulp.task('default', function() {
      return gulp.src('bower_components/bootstrap/dist/css/bootstrap.css')
          .pipe(uncss({
              html: ['app/index.html']
          }))
          .pipe(gulp.dest('app/styles'));
  });