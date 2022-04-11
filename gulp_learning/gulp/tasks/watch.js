module.exports = () =>
  $.gulp.task("watch", () => {
    for (let key in $.path.watch) {
      const path = $.path.watch[key];
      $.gulp.watch(path, $.gulp.series(key));
    }
  });
