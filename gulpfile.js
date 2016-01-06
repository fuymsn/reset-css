var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('default', function(){
    gulp.src('./src/*.css')
        .pipe(uglifycss({
            //"max-line-len": 80
        }))
        .pipe(rename(function(path){
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./build/'));
});