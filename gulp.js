'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var del = require('del');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var replace = require('gulp-replace');
var webpack = require('webpack-stream');

gulp.task("build", ["build-util"], function () {
    // gulp.task();

});

gulp.task("build-util", function () {
    //component
    var componentArr = ["radio", "select", "table", "nav"];
    componentArr.map(function (d) {
        gulp.src("src/component/" + d + "/*.js").pipe(gulp.dest("dist/util"));
    });

    //util
    gulp.src("src/util/*.js").pipe(gulp.dest("dist/util")).on("end", function () {
        //views js
        gulp.src(["src/view/*/*.js"]).pipe(gulp.dest("dist/webpack")).on("end", function () {
            var webpackConfig = require('./webpack.config.js');
            gulp.src("dist/webpack/*/main.js").pipe(webpack(webpackConfig)).pipe(rename({ basename: "bundle" })).pipe(gulp.dest("dist/webpack"));
        });

        //views html minify
        gulp.src(["src/view/welcome/*.html"]).pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest("dist/welcome"));
        //views css bundle and minify
        ["welcome"].map(function (d) {
            var srcArr = ["src/view/common/css/*.css"];
            gulp.src(srcArr).pipe(concatCss("bundle.css", { rebaseUrls: false })).pipe(cleanCSS({ compatibility: 'ie8' })).pipe(gulp.dest("dist/welcome"));
        });
        //icon
        gulp.src("src/icon/favicon.ico").pipe(gulp.dest("dist/welcome/image"));
        //image
        gulp.src("src/view/common/image/*").pipe(gulp.dest("dist/welcome/image"));
        //font
        gulp.src("src/view/common/font/*").pipe(gulp.dest("dist/welcome"));
    });
});

gulp.task("build-client", function () {

    //fontawesome
    // gulp.src("src/Common/Fontawesome/*/*")
    //     .pipe(gulp.dest("dist/" + project + "/client/fontawesome"));

});

//# sourceMappingURL=gulp.js.map