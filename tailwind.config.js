module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'lato':['Lato']
    },
    container:{
      center:true,
      padding:'2rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}