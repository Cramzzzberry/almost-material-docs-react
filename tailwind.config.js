/** @type {import('tailwindcss').Config} */
import { almostMaterialPlugin } from './almost-material/almost-material'

const almostMaterialPalette = {
  primary: "#65C3C8",
   
  secondary: "#EF9FBC",
      
  surface: "#291334",
      
  info: "#3ABFF8",
      
  success: "#36D399",
      
  warning: "#FBBD23",
      
  error: "#F87272",
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