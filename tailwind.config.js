/** @type {import('tailwindcss').Config} */
import { almostMaterialPlugin } from './almost-material/almost-material'

const almostMaterialPalette = {
  primary: "#65c3c8",
   
  secondary: "#ef9fbc",
      
  surface: "#291334",
      
  info: "#3abff8",
      
  warning: "#fbbd23",
      
  success: "#36d399",
      
  error: "#f87272",
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: almostMaterialPalette
    },
    almostMaterial: almostMaterialPalette,
  },
  plugins: [almostMaterialPlugin],
}