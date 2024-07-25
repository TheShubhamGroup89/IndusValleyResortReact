/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        times: ["Times New Roman", "serif"],
        Srisakdi: "cursive",
        serif: ["Cormorant Garamond", "serif"],
        glacial: ["Glacial Indifference", "sans-serif"],
        magnolia: ["Magnolia Script", "cursive"],
        "french-canon": ["IM FELL French Canon", "serif"],
        courgette: ["Courgette", "cursive"],
        'berkshire': ['Berkshire Swash', 'cursive'],
      },


      // keyframes: {
      //   slideIn: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(0)" },
      //   },
      //   slideOut: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      //   blink: {
      //     '0%, 100%': { borderColor: '#FFD700' }, // original yellow color
      //     '50%': { borderColor: '#FFEA70' }, // slightly lighter yellow color
      //   },
      // },
      // animation: {
      //   slideIn: "slideIn 1s forwards",
      //   slideOut: "slideOut 1s forwards",
      //   blink: 'blink 1s infinite', // blinking animation
      // },

      
    },
  },
  plugins: [],
};
