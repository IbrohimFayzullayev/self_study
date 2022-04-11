module.exports = () =>
  $.gulp.task("server", () => {
    $.bs.init({
      server: $.path.serverDir,
    });
  });
