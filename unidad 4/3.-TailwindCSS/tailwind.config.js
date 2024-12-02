/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./fuente/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {  //what is inside theme but outside extend, REPLACES tailwindcss styles
    fontFamily: {
      montse: ['Montserrat', 'sans-serif'],
      sans: ['Raleway', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {   //by adding here your styles, the default values for a theme option are preserved but also added new ones
      colors: {
        'azul': '#1fb6ff',  //now any class regarding new color is creates: text-azul, bg-azul, border-azul, text-playa-principal, bg-playa-calido...
        'morado': '#7e5bef',
        'rosa': '#ff49db',
        'naranja': '#ff7849',
        'verde': '#13ce66',
        'amarillo': '#ffc82c',
        'gris-oscuro': '#273444',
        'gris': '#8492a6',
        'gris-claro': '#d3dce6',
        'granada': {
          lighter: '#cc7e7e',
          light: '#f69898',
          dark: '#a16464',
          darker: '#774a4a',
        },
        'playa': {
          principal: '#CCB8C1',
          calido: '#F4E0D5',
          rosita: '#E1C5DC',
          cielo: '#8D9FC6',
          mar: '#2E3B65',
        },
        'info':{
          100: '#EDF2FB',
          200: '#E2EAFC',
          300: '#D7E3FC',
          400: '#CCDBFD',
          500: '#C1D3FE',
          600: '#B6CCFE',
          700: '#ABC4FF',
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

