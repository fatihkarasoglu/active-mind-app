/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        OpenSansBold: ["OpenSans-Bold", "serif"],
        OpenSansBoldItalic: ["OpenSans-BoldItalic", "serif"],
        OpenSansLight: ["OpenSans-Light", "serif"],
        OpenSansLightItalic: ["OpenSans-LightItalic", "serif"],
        OpenSansMedium: ["OpenSans-Medium", "serif"],
        OpenSansMediumItalic: ["OpenSans-MediumItalic", "serif"],
        OpenSansSemiBold: ["OpenSans-SemiBold", "serif"],
        OpenSansSemiBoldItalic: ["OpenSans-SemiBoldItalic", "serif"],
        OpenSansExtraBold: ["OpenSans-ExtraBold", "serif"],
        OpenSansExtraBoldItalic: ["OpenSans-ExtraBoldItalic", "serif"],
        OpenSansItalic: ["OpenSans-Italic", "serif"],
        OpenSansRegular: ["OpenSans-Regular", "serif"],
      },
    },
  },
  plugins: [],
};
