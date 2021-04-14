const gulp =  require("gulp"),
              sass = require("gulp-sass"),
              sassLint = require("gulp-sass-lint"),
              sourcemaps = require("gulp-sourcemaps"),
              autoprefixer = require("gulp-autoprefixer"),
              concat = require("gulp-concat"),
              browserSync = require("browser-sync").create(),
              reload = browserSync.reload;

function html() {
  return gulp.src("./src/**/*.html").pipe(gulp.dest("./dist"));
}

function images() {
  return gulp
    .src("./src/images/**/*.+(png|jpg|gif|svg|ico|xml|txt|json)")
    .pipe(gulp.dest("./dist/images/"));
}

function js() {
  return gulp.src("./src/js/**/*.js").pipe(gulp.dest("./dist/js/"));
}

function style() {
  return gulp
    .src([
      // setup
      // './src/styles/**/*.scss',
      `./src/styles/styles.scss`,
    ])

    .pipe(
      sassLint({
        rules: {
          "no-extends": 1,
          "no-color-keywords": 2,
          "class-name-format": [
            1,
            {
              convention: "hyphenatedbem",
            },
          ],
          indentation: [
            1,
            {
              character: "space",
              size: 4,
            },
          ],
        },
      })
    )

    .pipe(concat(`styles.scss`))

    .pipe(sassLint.format())

    .pipe(sourcemaps.init())

    .pipe(sass().on("error", sass.logError))

    .pipe(autoprefixer("last 2 versions"))

    .pipe(gulp.dest("./dist/styles/"))

    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
  });

  gulp.watch("./src/**/*.html", html);
  gulp.watch("./src/**/*.html").on("change", reload);
  gulp.watch("./src/images/**/*.+(png|jpg|gif|svg|ico|xml|txt|json)", images);
  gulp
    .watch("./src/images/**/*.+(png|jpg|gif|svg|ico|xml|txt|json)")
    .on("change", reload);
  gulp.watch("./src/**/*.js", js);
  gulp.watch("./src/**/*.js").on("change", reload);
  gulp.watch("./src/styles/**/*.scss", style);
  gulp.watch("./src/js/**/*.js").on("change", reload);
}

const build = gulp.series(html, images, js, style, watch);

exports.html = html;
exports.images = images;
exports.js = js;
exports.style = style;
exports.watch = watch;
exports.build = build;
exports.default = build;
