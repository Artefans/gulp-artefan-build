let project = "dist"
let source = "src"

module.exports = {
  src: {
    html: [`${source}/*.html`, `!${source}/_*.html`],
    css: `${source}/scss/style.scss`,
    js: `${source}/js/*.js`,
    images: `${source}/images/**/*`,
    fonts: `${source}/fonts/**/*.ttf`
  },
  watch: {
    html: `${source}/**/*.html`,
    css: `${source}/scss/**/*.scss`,
    js: `${source}/js/**/*.js`,
    images: `${source}/images/**/*.{jpg,png,scg,gif,ico,webp}`,
    fonts: `${source}/fonts/**/*`,
  },
  build: {
    html: `${project}/`,
    css: `${project}/css/`,
    js: `${project}/js/`,
    images: `${project}/images/`,
    fonts: `${project}/fonts/`
  },
  clean: 'dist/'
}
