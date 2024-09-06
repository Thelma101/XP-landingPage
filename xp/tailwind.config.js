/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-theme-color': '#040828',
        'main-bg': '#010219',
      },
      backgroundImage: {
         'header-light-1': 'linear-gradient(120deg, #010219, #010219, #1C387A, #010219, #010219, #010219, #010219 , #010219, #010219 , #010219)',
         'header-light-2': 'linear-gradient(100deg, #010219, #010219, #1C387A, #010219, #010219, #010219, #010219 , #010219, #010219 , #010219)',
         'header-light-3': 'linear-gradient(190deg, #010219,#1C387A ,#010219, #010219, #010219, #010219, #010219 , #010219, #010219 , #010219)',
         'header-light-4': 'linear-gradient(280deg, #010219,#1C387A ,#010219, #010219, #010219, #010219, #010219 , #010219, #010219 , #010219)',
         
      },
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.2px', 
      },
    },
  },
  plugins: [],
}
