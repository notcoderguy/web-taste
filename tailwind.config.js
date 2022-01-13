module.exports = {
  content: [
    './public/**/*.{vue,js,ts,jsx,tsx,blade.php,html}',
    './node_modules/@themesberg/flowbite/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
