var gulp = require('gulp');
var csslint = require('gulp-csslint');
 
gulp.task('css', function() {
  gulp.src(['./src/css/*.css', '!./src/css/skeleton.css', '!./src/css/normalize.css'])
    .pipe(csslint({
        'adjoining-classes': false
    }))
    .pipe(csslint.formatter());
}); 
