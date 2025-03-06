/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./fuente/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {  //what is inside theme but outside extend, REPLACES tailwindcss styles
    fontFamily: {
      mali: ['Mali', 'sans-serif'],
      pacifico: ['Pacifico', 'sans-serif'],
      sans: ['Raleway', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {   //by adding here your styles, the default values for a theme option are preserved but also added new ones
      colors: {
        'custom-light-blue': '#4F93D9',  // Azul claro, más vivo
        'custom-dark-blue': '#1B3A57',   // Azul oscuro y profundo
        'custom-pink': '#F08080',        // Rosa cálido
        'custom-green': '#2D9C68',       // Verde vibrante
        'custom-gray': '#E4E4E4',        // Gris claro
        'custom-dark-gray': '#2A2A2A',   // Gris oscuro
        'granada': {
          lighter: '#cc7e7e',
          light: '#f69898',
          dark: '#a16464',
          darker: '#774a4a',
        },
        'aviso': {
          100: '#641220',
          200: '#6E1423',
          300: '#85182A',
          400: '#A11D33',
          500: '#A71E34',
          600: '#B21E35',
          700: '#BD1F36',
          800: '#C71F37',
          900: '#DA1E37',
          1000: '#E01E37',
        }
      },
      screens: {
        '3xl': '2000px',
      },      
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')    
  ],
}

