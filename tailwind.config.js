/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fonts:[
        'PlayfairDisplay' ,['Playfair Display' , 'serif']
       ],
      colors:{
        skyblue: '#87CEEB',
        gray: '#E5E5E5',
        blue :'#50C2C9',
        lightblue:'#8FD1D7',
        


      },
    },
  },
  plugins: [],
}
