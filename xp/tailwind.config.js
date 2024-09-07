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
        'header-light': `
          radial-gradient(circle at 30% 0, rgba(255, 255, 255, 0.2), rgba(1, 2, 25, 0) 60%),
          radial-gradient(circle at 70% 0, rgba(255, 255, 255, 0.2), rgba(1, 2, 25, 0) 60%)
        `,
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
