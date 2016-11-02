var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("public/stylesheets/*.css", ['css']);
    gulp.watch("/*.html").on('change', reload);
});

gulp.task('default', ['serve']);

gulp.task('start', function () {
    nodemon({
        script: 'app.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});