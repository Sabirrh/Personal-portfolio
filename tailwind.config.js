/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // Next.js 13+ App Dir
    './pages/**/*.{js,ts,jsx,tsx}',     // Pages Dir
    './components/**/*.{js,ts,jsx,tsx}', // Components
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        Ovo: ['Ovo', 'serif'],
      },
      boxShadow:{
        'black-custom': '4px 4px 0 #000',
        'white-custom': '4px 4px 0 #fff'
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}

