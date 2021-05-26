module.exports = {
  purge: ['layouts/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            'ul > li::before': {
              display: 'none'  
            }
          },
        },
    },
  },
},
  variants: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/typography')],
}
