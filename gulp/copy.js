var gulp = require("gulp");

gulp.task("copy", function () {
  return gulp.src([
    "src/img/*.+(jpg|gif)*",
  ], {
      base: "src"
    })
    .pipe(gulp.dest("build"));
});
