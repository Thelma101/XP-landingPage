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
      // backgroundImage: {
      //   'header-dark': 'linear-gradient(90deg, #010219 10%, #1C387A 30%, #010219 70%)',
      //   'header-light': 'linear-gradient(to bottom, rgba(28, 56, 122, 0.3) 0%, rgba(28, 56, 122, 0.1) 5%, rgba(1, 2, 25, 0) 10%)',
      // },      

      backgroundImage: {
        'header-dark': 'linear-gradient(95deg, #010219 10%, #1C387A 20%, #010219 50%)',
        // 'header-light': 'linear-gradient(to bottom, rgba(28, 56, 122, 0.3), rgba(1, 2, 25, 0))',
        'header-light': 'linear-gradient(to bottom (#010219 10%, #1C387A 20%, #010219 50%)',
        'backgroundSize': '100% 10px', 
        'backgroundRepeat': 'no-repeat',
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
