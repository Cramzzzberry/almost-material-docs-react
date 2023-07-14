/** @type {import('tailwindcss').Config} */
import { almostMaterialPlugin, AlmostMaterialPalette } from './almost-material/almost-material'

const myPalette = {
  primary: "#4fc1e9",
   
  secondary: "#ec87c0",
      
  tertiary: "#ac92ec",
      
  info: "#5d9cec",
      
  warning: "#ffce54",
      
  success: "#a0d468",
      
  error: "#ed5565",
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: AlmostMaterialPalette(myPalette)
    },
    almostMaterial: myPalette,
  },
  plugins: [almostMaterialPlugin],
}