var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');

var jsSources = [
    'development/js/perfmatters.js'
];

gulp.task('log', function() {
    gutil.log('Website Optimization');
});

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('perfmatters.js'))
        .pipe(gulp.dest('production/js'))
});