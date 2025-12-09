/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",      // root-level templates
    "./**/templates/**/*.html",   // app templates
    "./static/src/**/*.js"        // if you use Tailwind in JS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
