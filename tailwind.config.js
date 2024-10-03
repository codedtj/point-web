// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#081524",
          500: "#0f2137",
          300: "#1e293b"
        },
        secondary: "#0ba5e9",
        tertiaty: "#f1f5f9"
      },
    },
  },
  plugins: [],
}
