/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        Softred: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        Darkdesaturatedcyan: "hsl(167, 40%, 24%)",
        Darkblue: "hsl(198, 62%, 26%)",
        Darkmoderatecyan: "hsl(168, 34%, 41%)",
        Verydarkdesaturatedblue: "hsl(212, 27%, 19%)",
        Verydarkgrayishblue: "hsl(213, 9%, 39%)",
        Darkgrayishblue: "hsl(232, 10%, 55%)",
        Grayishblue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },

     fontFamily: {
      barlow: "'Barlow', sans-serif",
      fraunces: "'Fraunces', serif;"
     },

     backgroundPosition: {
      centerbottom: "center bottom",
     }

    },
  },
  plugins: [],
};
