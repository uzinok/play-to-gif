var gulp = require("gulp"),
    less = require("gulp-less"),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require("gulp-csso"),
    server = require("browser-sync");

gulp.task("less", function () {
  return gulp.src("src/less/playTG.less")
    .pipe(less())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions']
    }))
    .pipe(csso())
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});
