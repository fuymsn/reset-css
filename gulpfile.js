var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('css-min', function(){
    gulp.src('./src/*.css')
        .pipe(uglifycss({
            //"max-line-len": 80
        }))
        .pipe(rename(function(path){
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function(){
    var watcher = gulp.watch('./src/*.css', ['css-min']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

