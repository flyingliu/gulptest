var fs = require('fs')
var del = require('del');
var path = require('path')
var gulp = require('gulp')
var rename = require('gulp-rename')
var jade = require('gulp-jade')
var sass = require('gulp-sass');
var VueModule = require('gulp-vue-module')
var browserSync = require('browser-sync').create();
var reload = browserSync.reload
var deploy = require('gulp-gh-pages')
var runSequence = require('gulp-sequence')
var cp = require('child_process')
var harp = require('harp')
const babel = require('gulp-babel');

const DEV = "./src"
const PRO = "./dist"

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: PRO,
        },
        port: "99",
        ui: false,
        notify: false
    });
    gulp.watch(`${DEV}/**/*.scss`, ['sass']);
    gulp.watch(`${DEV}/**/*.js`, ['js']);
    gulp.watch(`${DEV}/**/*.jade`, ['jade']);
    gulp.watch(`${DEV}/*.html`, ['moveHtml']);
})

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function () {
    return gulp.src(`${DEV}/**/*.scss`)
        .pipe(sass())
        .pipe(gulp.dest(PRO))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('jade', function () {
    return gulp.src([`${DEV}/**/*.jade`, `${DEV}/*.jade`, ])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(PRO))
        .pipe(reload({
            stream: true
        }));
})

gulp.task('js', () =>
    gulp.src(`${DEV}/**/*.js`)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest(PRO))
    .pipe(reload({
        stream: true
    }))
);

gulp.task('move', function () {
    return gulp.src([`${DEV}/images/**`])
        .pipe(gulp.dest(`${PRO}/images`));
});

gulp.task('moveHtml', function () {
    return gulp.src([`${DEV}/*.html`])
        .pipe(gulp.dest(PRO));
});

gulp.task('clean', function() {
    return del(PRO);
});



gulp.task('default', ['clean'], function(cb) {
    runSequence(['moveHtml','move','js','jade','sass','serve'])(cb)
});

// ------------------------------------------------------

gulp.task('build', function (done) {
    cp.exec('harp compile . dist', {
            stdio: 'inherit'
        })
        .on('close', done)
})


gulp.task('deploy', ['build'], function () {
    gulp.src('./dist/src/**/*')
        .pipe(deploy());
});

gulp.task('vue', function () {
    return gulp.src('./src/**/*.vue')
        .pipe(VueModule({
            debug: true,
            loadCSSMethod: 'loadCSS'
        }))
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(gulp.dest('./src'))
        .pipe(browserSync.stream())
})





// =======

// var gulp = require('gulp')
// var browserSync = require('browser-sync').create()
// var sass = require('gulp-sass')

// // Static Server + watching scss/html files
// gulp.task('serve', ['sass'], function() {

//     browserSync.init({
//         server: "./src"
//     })

//     gulp.watch("src/**/*.scss", ['sass'])
//     gulp.watch("src/*.html").on('change', browserSync.reload)
// })

// // Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//     return gulp.src("./src/**/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("./src"))
//         .pipe(browserSync.stream())
// })

// gulp.task('default', ['serve'])