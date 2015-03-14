var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var react = require('gulp-react');
var sass = require('gulp-sass');


gulp.task('default',['jshint','build','sass'],function() {
  gulp.watch(['app/**/**.jsx','app/**/**.js'],['jshint','build'])
  gulp.watch('app/sass/**', [ 'sass' ]);
});

gulp.task('build',function() {
  return browserify({
    entries: ['./app/js/app.js'],
    debug: true
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('build/js'));
});

gulp.task('sass',function() {
  gulp.src('app/sass/main.scss')
    .pipe(sass({ includePaths: [
      './app/sass',
      './app/fonts',
      './bower_components/bootstrap-sass-official/assets/stylesheets'
    ],
     errLogToConsole: true,
        sourceComments : 'normal'
    }))
    .pipe(gulp.dest('build/css'))
    .on('error',function(err) {
      if(err) console.log(''+err);
    });
});



gulp.task('jshint',function() {
  gulp.src('src/**/**.jsx').pipe(react()).pipe(jshint())
  .pipe(jshint.reporter('default'))
});
