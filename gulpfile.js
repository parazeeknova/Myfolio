var gulp = require('gulp');
var copy = require('gulp-copy');

gulp.task('copy-bootstrap', function() {
    return gulp.src('node_modules/bootstrap/dist/**/*')
        .pipe(copy('dist', { prefix: 3 }));
});

// npx gulp copy-bootstrap ~ to run the task when bootstrap is updated