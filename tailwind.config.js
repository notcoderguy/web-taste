module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,blade.php,html}',
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        'primary': '#3ebff8',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require("daisyui"),
  ],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#3ebff8",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#3ebff8",
          "base-100": "#000000",
          "base-200": "#3C3C3C",
          "base-300": "#4C4C4C",
          "base-content": "#FFFFFF",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
