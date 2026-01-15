/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Pre-configured NativeWind content paths
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "primary": "#11d421",
        "background-light": "#f6f8f6",
        "background-dark": "#102212",
      },
      fontFamily: {
        "display": ["Manrope_400Regular", "Manrope_500Medium", "Manrope_600SemiBold", "Manrope_700Bold", "Manrope_800ExtraBold"]
      },
      borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
    },
  },
  plugins: [],
}
