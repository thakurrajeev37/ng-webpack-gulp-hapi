var gulp = require('gulp');
var jade = require('gulp-jade');
var server = require( 'gulp-develop-server' );
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

gulp.task('views', function() {
    return gulp.src('app/client/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist/templates'));
});

gulp.task('jade', function() {
    return gulp.src('app/client/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'));
});

gulp.task("webpack", function() {
    return gulp.src('client/app/modules/app.js')
        .pipe( gulpWebpack(webpackConfig, webpack) )
        .pipe(gulp.dest('dist/'))
});
gulp.task('watch', function(){
    gulp.watch('app/client/index.jade', ['jade']);
    gulp.watch('app/client/templates/**/*.jade', ['views'])
})

gulp.task( 'server:start', function() {
    server.listen( { path: './app/server/server' } );
});

gulp.task('default',['jade', 'views', 'webpack', 'server:start', 'watch']);