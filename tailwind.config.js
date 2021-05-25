module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography')],
}
