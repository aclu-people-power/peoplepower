var gulp = require('gulp');
var csslint = require('gulp-csslint');
var access = require('gulp-accessibility');
 
gulp.task('css', function() {
  gulp.src(['./src/css/*.css', '!./src/css/skeleton.css', '!./src/css/normalize.css'])
    .pipe(csslint({
        'adjoining-classes': false
    }))
    .pipe(csslint.formatter());
}); 
gulp.task('accessibility', function() {
  return gulp.src('./src/*.html')
    .pipe(access({
      force: true
    }))
    .on('error', console.log);
});

