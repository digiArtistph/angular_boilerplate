var gulp = require('gulp'),
   karma = require('karma').Server;

gulp.task('scripts', function() {
   console.log('Hello World!');
});

gulp.task('test', function(done) {
   new karma({
      configFile: __dirname + "/my.conf.js",
      singleRun: false,
   }, done).start();
});
