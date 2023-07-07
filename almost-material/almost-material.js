/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin")

import { ShadeHexColor } from "./misc"

import AddComponents from "./add-components"
import MatchComponents from "./match-components"

//shade presets for palettes
const shades = {
	0: "-1",
	10: "-0.75",
	20: "-0.5",
	30: "-0.25",
	40: "0",
	50: "0.17",
	60: "0.34",
	70: "0.51",
	80: "0.68",
	90: "0.85",
	95: "0.93",
	99: "0.98",
	100: "1",
}

//creates a palette based on the shades given and the palette that will be used
const AlmostMaterialPalette = (palette) => {
	let colorsAndShades = {} //an object for storing all color shades of the userPalette

	for(const color of Object.keys(palette)) {
		colorsAndShades[`${color}-0`] = ShadeHexColor(palette[color], shades[0])
		colorsAndShades[`${color}-10`] = ShadeHexColor(palette[color], shades[10])
		colorsAndShades[`${color}-20`] = ShadeHexColor(palette[color], shades[20])
		colorsAndShades[`${color}-30`] = ShadeHexColor(palette[color], shades[30])
		colorsAndShades[`${color}`] = ShadeHexColor(palette[color], shades[40])
		colorsAndShades[`${color}-50`] = ShadeHexColor(palette[color], shades[50])
		colorsAndShades[`${color}-60`] = ShadeHexColor(palette[color], shades[60])
		colorsAndShades[`${color}-70`] = ShadeHexColor(palette[color], shades[70])
		colorsAndShades[`${color}-80`] = ShadeHexColor(palette[color], shades[80])
		colorsAndShades[`${color}-90`] = ShadeHexColor(palette[color], shades[90])
		colorsAndShades[`${color}-95`] = ShadeHexColor(palette[color], shades[95])
		colorsAndShades[`${color}-99`] = ShadeHexColor(palette[color], shades[99])
		colorsAndShades[`${color}-100`] = ShadeHexColor(palette[color], shades[100])
	}

	return colorsAndShades
}

const almostMaterialPlugin = plugin(
  
	function({addComponents, matchComponents, theme, addBase}) {

		const userPalette = theme("almostMaterial") //get the palette from tailwind config
		const defaultColor = "#000000"

		addComponents(AddComponents(defaultColor, shades))

		matchComponents(MatchComponents(shades), { values: AlmostMaterialPalette(userPalette) })

		addBase({
			// or whichever color you"d like
			"html": {
				color: ShadeHexColor(userPalette.primary, shades[10])
			},

			"@font-face": {
				fontFamily: "'openSans'",
				fontWeight: "normal",
				src: "url('/almost-material/src/Inter-Variable.ttf') format('truetype')",
			},

			"body": {
				backgroundColor: ShadeHexColor(userPalette.primary, shades[99]),
				fontFamily: "'openSans'",
			},
			
			"h1": {
				fontSize: "6rem",
				lineHeight: "1",
			},
			
			"h2": {
				fontSize: "3.75rem",
				lineHeight: "1",
			},
			
			"h3": {
				fontSize: "2.25rem",
				lineHeight: "2.5rem",
			},
			
			"h4": {
				fontSize: "1.5rem",
				lineHeight: "2rem",
			},
			
			"h5": {
				fontSize: "1.25rem",
				lineHeight: "1.75rem",
			},

			"h6": {
				fontSize: "1.125rem",
				lineHeight: "1.75rem",
			},
			
			"::-webkit-scrollbar": {
				width: "8px",
				height: "8px",
			},
			
			"::-webkit-scrollbar-track": {
				borderRadius: "4px",
			},
			
			"::-webkit-scrollbar-thumb": {
				background: "gray",
				borderRadius: '4px',
			},
		});
	}
)

export { almostMaterialPlugin, AlmostMaterialPalette }