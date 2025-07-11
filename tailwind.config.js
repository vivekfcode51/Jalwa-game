/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       screens: {
      'xs2': '375px',
      'xs1': '390px',
      'xs': '400px',
      'xsm': '500px',
      'sm': '640px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1836px',
    },
    extend: {

      keyframes: {
        translateAnimation: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--x-target), var(--y-target))' },
        },
        pulseFadeOut: {
          '0%': { opacity: 1, transform: 'scale(0)' },
          '100%': { opacity: 0, transform: 'scale(1)' },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 1s ease-in-out",
        translateAnimation: 'translateAnimation 2s ease-in-out forwards',
        'pulse-fade': 'pulseFadeOut 2s ease-in-out infinite',
      },
      fontFamily: {
        roboto: [' roboto, sans-serif;'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '11px',
        xsm: '13.86px',
        sm: '16px',
        lg: '18px',
      },
      colors: {
        bg1: "#F7F8FF",
        bg2: "#FC7C76",
        bg3: "#6EA8F4",
        bg4: "#374992",
        bg5: "#05012B",
        bg6: "#92A8E3",
        bg7: "#E3EFFF",
        yellow: "#DD9138",
        green: "#17B15E",
        voilet: "#9B48DB",
        red: "#22275b",
        redLight: "#374992",
        redLight1: "#011341",
        blackLight: "#707070",
        gray: "#666666",
        lightGray: "#768096",
        gold: "#ff8310",
        chocolate: "#B1835A",
        border1: "#eaeaea",
        border2: "#022c68",
        inputBg: "#F0F0F5",
        gray2: "#CDCFDD",
        /// my color for all globle bet 
        customred: "#FF0000",
        customlightBlue: "#022C68",
        customdarkBlue: "#2B3270",
        customdarkBluej: "#011341",

    ///   from-customlightbtn to-customdarkBluebtn
        customlightbtn: "#00ECBE",
        customdarkBluebtn: "#297DF2",
        blackAviator1: "#0E0E0E",
        blackAviator2: "#1B1C1D",
        blackAviator3: "#0C0C0C",
        blackAviator4: "#2C2D30",
        blackAviatorText: "#6D6F78",
        redAviator: "#CF2030",
        greenAviator: "#29AA09",
        greenBorderAviator: "#B1F1A4",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      }, ['responsive', 'hover'])
    }
  ],
};
