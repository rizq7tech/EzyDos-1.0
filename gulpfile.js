var gulp = require('gulp');1

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', ['sass', 'templatecache']);
