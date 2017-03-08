var gulp = require('gulp');
var csslint = require('gulp-csslint');
var access = require('gulp-accessibility');
 
gulp.task('default', ['css-lint', 'accessibility-check']);
gulp.task('css-lint', function() {
  gulp.src(['./src/css/*.css', '!./src/css/skeleton.css', '!./src/css/normalize.css'])
    .pipe(csslint({
        'adjoining-classes': false
    }))
    .pipe(csslint.formatter());
}); 
gulp.task('accessibility-check', function() {
  return gulp.src('./src/*.html')
    .pipe(access({
      force: true
    }))
    .on('error', console.log);
});

