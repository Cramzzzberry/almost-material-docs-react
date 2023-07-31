/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin")

import { ShadeHexColor } from "./misc"

import { AddBase, themeStyles } from "./add-base"
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
		colorsAndShades[`${color}-40`] = ShadeHexColor(palette[color], shades[40])
		colorsAndShades[`${color}-50`] = ShadeHexColor(palette[color], shades[50])
		colorsAndShades[`${color}-60`] = ShadeHexColor(palette[color], shades[60])
		colorsAndShades[`${color}-70`] = ShadeHexColor(palette[color], shades[70])
		colorsAndShades[`${color}-80`] = ShadeHexColor(palette[color], shades[80])
		colorsAndShades[`${color}-90`] = ShadeHexColor(palette[color], shades[90])
		colorsAndShades[`${color}-95`] = ShadeHexColor(palette[color], shades[95])
		colorsAndShades[`${color}-99`] = ShadeHexColor(palette[color], shades[99])
		colorsAndShades[`${color}-100`] = ShadeHexColor(palette[color], shades[100])
		colorsAndShades[`${color}`] = ShadeHexColor(palette[color], shades[40])
	}

	return colorsAndShades
}

const almostMaterialPlugin = plugin(
  
	function({addComponents, matchComponents, theme, addBase}) {

		const userPalette = theme("almostMaterial") //get the palette from tailwind config
		addComponents(AddComponents(shades))

		matchComponents(MatchComponents(shades), { values: AlmostMaterialPalette(userPalette) })

		addBase({...AddBase(shades), ...themeStyles(AlmostMaterialPalette(userPalette), shades)});
	}
)

export { almostMaterialPlugin, AlmostMaterialPalette }