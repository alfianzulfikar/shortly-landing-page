module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          dark: "hsl(257, 27%, 26%)",
        },
        secondary: "hsl(0, 87%, 67%)",
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayishviolet: "hsl(257, 7%, 63%)",
        },
      },
      backgroundColor: (theme) => ({
        primary: "hsl(180, 66%, 49%)",
        secondary: "hsl(0, 0%, 75%)",
        darkblue: "hsl(255, 11%, 22%)",
        darkviolet: "hsl(260, 8%, 14%)",
        hoverprimary: "hsl(180, 73%, 67%)",
      }),
      backgroundImage: {
        "boost-mobile": "url('/assets/images/bg-boost-mobile.svg')",
        "boost-desktop": "url('/assets/images/bg-boost-desktop.svg')",
        "shorten-mobile": "url('/assets/images/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('/assets/images/bg-shorten-desktop.svg')",
      },
      flex: {
        2: "2",
      },
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
