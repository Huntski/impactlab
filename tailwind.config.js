module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        'desktop': '1450px',
      },

      fontFamily: {
        headings: "'bc-alphapipe', Arial, Helvetica, sans-serif",
        content: "Poppins, Arial, Helvetica, sans-serif",
      }
    },
  },
  plugins: [],
}

