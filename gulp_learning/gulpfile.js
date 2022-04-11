// const gulp = require("gulp");
// const pug = require("gulp-pug");
// gulp.src("./app/src/index.pug").pipe(pug()).pipe(gulp.dest("./app/dist/"));
// global.hello = "Hello World";
// const func = require("./test");
// func();
global.$ = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(),
  bs: require("browser-sync").create(),
  path: {
    serverDir: "./app/dist",
    src: {
      html: "./app/src/*.{pug,html}",
      img: "./app/src/images/**/*.{jpg,png,jpeg,jfif,tiff,webp}",
      font: "./app/src/fonts/**/*.ttf",
      css: "./app/src/scss/**/*.scss",
    },
    dist: {
      html: "./app/dist/",
      img: "./app/dist/images/",
      font: "./app/dist/fonts/",
      css: "./app/dist/styles/",
    },
    watch: {
      html: ["./app/src/*.{pug,html}", "./app/src/components/*.{pug,html}"],
      img: "./app/src/images/**/*.{jpg,png,jpeg,jfif,tiff,webp}",
      font: "./app/src/fonts/**/*.ttf",
      css: "./app/src/scss/**/*.scss",
    },
  },
};
require("./gulp/config").forEach((task) => require(task)());
$.gulp.series(
  $.gulp.parallel("html", "img", "css", "font", "server", "watch")
)();
