/** @type {import('tailwindcss').Config} */
import { almostMaterialPlugin } from './almost-material/almost-material'

const almostMaterialPalette = {
  primary: "#1c4f82",
   
  secondary: "#7d919b",
      
  surface: "#23282f",
      
  info: "#0092d6",
      
  success: "#6cb288",
      
  warning: "#daad58",
      
  error: "#ab3d30",
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