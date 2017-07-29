var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var VueModule = require('gulp-vue-module');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var deploy = require('gulp-gh-pages');
var cp = require('child_process');
var harp = require('harp')


gulp.task('vue', function() {
    return gulp.src('./src/**/*.vue')
        .pipe(VueModule({
            debug: true
        }))
        .pipe(rename({ extname: ".js" }))
        .pipe(gulp.dest("./dist"));
});

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function() {
    harp.server("./src/", {
        port: 9000
    }, function() {
        browserSync({
            proxy: "localhost:9000",
            open: false,
            notify: {
                styles: ['opacity: 0', 'position: absolute']
            }
        });
        gulp.watch(["./src/**/*.css", "./src/**/*.scss", "*.less"], function() {
            reload();
        });
        gulp.watch(["./src/*.html", "*.ejs", "./src/*.jade", "*.js", "*.json", "*.md"], function() {
            reload();
        });
    })
});

gulp.task('sass', function() {
    return gulp.src("src/**/*.scss")
        .pipe(sass())
        .pipe(browserSync.stream());
});


/**
 * Build the Harp Site
 */
gulp.task('build', function(done) {
    cp.exec('harp compile . dist', { stdio: 'inherit' })
        .on('close', done)
});

/**
 * Browser-sync task, only cares about compiled CSS
 */
gulp.task('browser-sync', function() {
    browserSync({
        proxy: "localhost:9000"
    });
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function() {
    gulp.src("./dist/**/*")
        .pipe(deploy());
});


gulp.task('default', ['vue', 'serve']);



// =======


// var gulp = require('gulp');
// var browserSync = require('browser-sync').create();
// var sass = require('gulp-sass');

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./src"
//     });

//     gulp.watch("src/**/*.scss", ['sass']);
//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("./src/**/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("./src"))
//         .pipe(browserSync.stream());
// });

// gulp.task('default', ['serve']);