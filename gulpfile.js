"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var jsminify = require("gulp-uglify");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var server = require("browser-sync").create();
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("sprite", function() {
  return gulp.src([
    "img/**/icon-*.svg",
    "img/**/logo-*.svg"
  ])
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
});

gulp.task("html", function() {
  return gulp.src("*.html")
  .pipe(posthtml([
    include()
  ]))
  .pipe(gulp.dest("build"));
});

gulp.task("jsminify", function() {
  return gulp.src("js/*.js")
  .pipe(jsminify())
  .pipe(rename({suffix: ".min"}))
  .pipe(gulp.dest("build/js"));
});

gulp.task("clean-js", function() {
  return del("build/js/*.min.js");
})

gulp.task("js", function(done) {
  run(
    "clean-js",
    "jsminify",
    done
  );
})

gulp.task("imagemin", function() {
  return gulp.src("img/**/*.{png,jpg,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("img"));
});

gulp.task("webp", function() {
  return gulp.src("img/**/*.{png,jpg}")
  .pipe(webp({quality: 90}))
  .pipe (gulp.dest("build/img"));
});

gulp.task("serve", function() {
  server.init({
    server: "build",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("*.html", ["html"]);
  gulp.watch("js/**/*js", ["js"]);
});

gulp.task("copy", function() {
  return gulp.src([
    "css/normalize.css",
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**"
  ], {
    base:"."
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "style",
    "sprite",
    "html",
    "js",
    done
  );
});

gulp.task("clean-docs", function() {
  return del([
    "docs/css/**",
    "docs/fonts/**",
    "docs/js/**",
    "docs/img/**",
    "docs/*.html"
  ])
});

gulp.task("copy-docs", function() {
  return gulp.src("build/**")
  .pipe(gulp.dest("docs"));
});

gulp.task("docs", function(done) {
  run(
    "clean-docs",
    "copy-docs",
    done
  );
});
