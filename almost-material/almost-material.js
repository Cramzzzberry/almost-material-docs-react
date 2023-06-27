const plugin = require("tailwindcss/plugin")

// this is used to change the luminosity of a color
function shadeHexColor(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

// used to check the luminosity of a color
function lightOrDark(color) {
	var r, g, b, hsp;

	// Check the format of the color, HEX or RGB?
	if (color.match(/^rgb/)) {
		// If HEX --> store the red, green, blue values in separate variables
		color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
	
		r = color[1];
		g = color[2];
		b = color[3];
	} 
	else {
		// If RGB --> Convert it to HEX: http://gist.github.com/983661
		color = +("0x" + color.slice(1).replace( 
			color.length < 5 && /./g, "$&$&"
		)
				);

		r = color >> 16;
		g = color >> 8 & 255;
		b = color & 255;
	}
  
	// HSP equation from http://alienryderflex.com/hsp.html
	hsp = Math.sqrt(
		0.299 * (r * r) +
		0.587 * (g * g) +
		0.114 * (b * b)
	);
  
	// Using the HSP value, determine whether the color is light or dark
	if (hsp>127.5) {
		return "light";
	} 
	else {
		return "dark";
	}
}

//shade presets for palettes
const shadesInPercent = {
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

const almostMaterialPlugin = plugin(
  
	function({addComponents, matchComponents, theme, addBase}) {

		const userPalette = theme("almostMaterial") //get the palette from tailwind config
		userPalette.default = shadeHexColor(userPalette.primary, shadesInPercent[10])

		let colorsAndShades = {} //an object for storing all color shades of the userPalette

		for(const color of Object.keys(userPalette)) {
			colorsAndShades[`${color}0`] = shadeHexColor(userPalette[color], shadesInPercent[0])
			colorsAndShades[`${color}10`] = shadeHexColor(userPalette[color], shadesInPercent[10])
			colorsAndShades[`${color}20`] = shadeHexColor(userPalette[color], shadesInPercent[20])
			colorsAndShades[`${color}30`] = shadeHexColor(userPalette[color], shadesInPercent[30])
			colorsAndShades[`${color}`] = shadeHexColor(userPalette[color], shadesInPercent[40])
			colorsAndShades[`${color}50`] = shadeHexColor(userPalette[color], shadesInPercent[50])
			colorsAndShades[`${color}60`] = shadeHexColor(userPalette[color], shadesInPercent[60])
			colorsAndShades[`${color}70`] = shadeHexColor(userPalette[color], shadesInPercent[70])
			colorsAndShades[`${color}80`] = shadeHexColor(userPalette[color], shadesInPercent[80])
			colorsAndShades[`${color}90`] = shadeHexColor(userPalette[color], shadesInPercent[90])
			colorsAndShades[`${color}95`] = shadeHexColor(userPalette[color], shadesInPercent[95])
			colorsAndShades[`${color}99`] = shadeHexColor(userPalette[color], shadesInPercent[99])
			colorsAndShades[`${color}100`] = shadeHexColor(userPalette[color], shadesInPercent[100])
		}

		addComponents(
			{
				".divider": {
					display: "flex",
					alignItems: "center",
				},
				".divider::before, .divider::after": {
					flex: "1",
					backgroundColor: userPalette.default,
					content: "''",
					borderRadius: "9999px",
					padding: "0.5px",				
				},
				".navbar": {
					display: "flex",
					position: "sticky",
					top: "0",
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
					height: "4rem",
					maxHeight: "4rem",
					backgroundColor: shadeHexColor(userPalette.primary, shadesInPercent[95]),
					fontSize: "1.5rem",
					lineHeight: "2rem",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				},
			}
		)

		matchComponents(
			{
				//badge components
				"badge": (color) => ({
					display: "flex",
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
					fontSize: "16px",
					height: "fit-content",
					backgroundColor: color,
					color: shadeHexColor(color, lightOrDark(color) === 'light' ? shadesInPercent[10] : shadesInPercent[90]),
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "9999px",
					borderWidth: "1px",
					borderColor: color,
					"&.badge-outlined": { //badge-outlined
						backgroundColor: "transparent",
						color: color,
						borderColor: color,
					},

					"&.badge-dot": { //badge-dot
						padding: "0",
						backgroundColor: color,
						width: "0.5rem",
						height: "0.5rem",
					},

					"&.badge-sm": { //badge-sm
						paddingLeft: "1rem",
						paddingRight: "1rem",
						fontSize: "0.875rem",
						lineHeight: "1.25rem",
					},

					"&.badge-lg": { //badge-lg
						paddingTop: "0.25rem",
						paddingBottom: "0.25rem",
						paddingLeft: "2rem",
						paddingRight: "2rem",
						fontSize: "1.125rem",
						lineHeight: "1.75rem",
					},
				}),


				//button components
				"btn": (color) => ({
					backgroundColor: color,
					borderColor: color,
					display: "flex", 
					paddingTop: "1rem",
					paddingBottom: "1rem", 
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
					height: "fit-content",
					color: shadeHexColor(color, lightOrDark(color) === 'light' ? shadesInPercent[10] : shadesInPercent[90]),
					flexDirection: "row", 
					justifyContent: "center", 
					alignItems: "center", 
					borderRadius: "9999px", 
					gap: "0.5rem",
					fontWeight: "600",
					borderWidth: "1px",
					"-webkit-user-select": "none",
					"-ms-user-select": "none",
					"user-select": "none",
					"&:hover:not([disabled])": {
						cursor: "pointer",
						borderColor: shadeHexColor(color, lightOrDark(color) === 'light' ? -0.1 : 0.1),
						backgroundColor: shadeHexColor(color, lightOrDark(color) === 'light' ? -0.1 : 0.1),
					},

					"&.btn-outlined": { //btn-outlined
						backgroundColor: "transparent",
						borderColor: "#C7C7C7",
						color: color,
						"&:hover": {
							backgroundColor: color,
							borderColor: color,
							color: shadeHexColor(color, lightOrDark(color) === 'light' ? shadesInPercent[10] : shadesInPercent[90]),
							opacity: "1",
						},
					},

					"&.btn-ghost": { //btn-ghost
						// paddingTop: "0.5rem",
						// paddingBottom: "0.5rem", 
						// paddingLeft: "1.5rem",
						// paddingRight: "1.5rem", 
						backgroundColor: "transparent",
						borderColor: "transparent",
						color: color,
						// borderRadius: "12px",
						"&:hover:not([disabled])": {
							borderColor: "transparent",
							background: "rgba(0,0,0,0.05)",
						},

						"&.active": { //btn-active
							backgroundColor: "rgba(0,0,0,0.05)",
							borderColor: "transparent",
							color: color,
							"&:hover:not([disabled])": {
								borderColor: "transparent",
								backgroundColor: "rgba(0,0,0,0.05)",
							}
						},
					},

					"&.btn-circle": { //btn-circle
						padding: "1rem",
						borderRadius: "9999px",
						"&.btn-ghost": {
							padding: "1rem",
							borderRadius: "9999px",
							"&:hover:not([disabled])": {
								background: "rgba(0,0,0,0.05)",
							},
						},

						"&.btn-sm": {
							padding: "0.5rem",
							fontSize: "0.875rem",
							"& > *": {
								fontSize: "0.875rem",
							}
						},

						"&.btn-lg": {
							padding: "1.25rem",
							fontSize: "2rem",
							"& > *": {
								fontSize: "2rem",
							}
						},
					},

					"&.active": { //btn with active state
						backgroundColor: color,
						borderColor: color,
						color: shadeHexColor(color, lightOrDark(color) === 'light' ? shadesInPercent[10] : shadesInPercent[90]),
						"&:hover:not([disabled])": {
							borderColor: color,
							backgroundColor: color,
						}
					},

					"&:disabled": { //disabled btn
						backgroundColor: "rgba(0,0,0,0.075)",
						borderColor: "transparent",
						color: shadeHexColor(color, shadesInPercent[10]),
						opacity: "70%",
					},

					"&.btn-sm": { //btn-sm
						paddingTop: "0.5rem",
						paddingBottom: "0.5rem",
						paddingLeft: "1rem",
						paddingRight: "1rem",
						fontSize: "0.875rem",
						"& > *": {
							fontSize: "1rem",
						}
					},

					"&.btn-lg": { //btn-lg
						paddingTop: "1.5rem",
						paddingBottom: "1.5rem",
						paddingLeft: "2rem",
						paddingRight: "2rem",
						fontSize: "1.25rem",
						"& > *": {
							fontSize: "1.75rem",
						}
					},
				}),


				//card components
				"card": (color) => ({
					height: "auto",
					flexDirection: "column",
					overflow: "hidden",
					borderRadius: "1.5rem",
					color: shadeHexColor(color, lightOrDark(color) === 'light' ? shadesInPercent[10] : shadesInPercent[90]),
					backgroundColor: color,
					"& > .card-textblock" : {
						padding: "1.25rem",
						whiteSpace: "normal",
					},

					"& > .card-actionblock": {
						display: "flex",
						padding: "1.25rem",
						flexDirection: "row",
						alignItems: "center",
						gap: "0.5rem",
					},

					"& > .card-thumbnail": {
						overflow: "hidden",
						backgroundPosition: "center",
						backgroundSize: "cover",
						borderRadius: "1rem",
						height: "240px",
					},

					"& > input[type='checkbox']": {
						position: "absolute",
						top: "-2.5rem",
						visibility: "hidden",						
					},

					"& > .card-collapse": {
						height: "auto",
						display: "grid",
						gridTemplateRows: "0fr",
						transitionProperty: "all",
						transitionDuration: "400ms",
						transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
						"& > div": {
							overflow: "hidden",
						}				
					},

					"& > input[type='checkbox']:checked + .card-headline + .card-collapse": {
						gridTemplateRows: "1fr",
					}
				})
			},
			{ values: colorsAndShades }
		)





		addBase({
			// or whichever color you"d like
			"html": {
				color: shadeHexColor(userPalette.primary, shadesInPercent[10])
			},

			"@font-face": {
				fontFamily: "'openSans'",
				fontWeight: "normal",
				src: "url('/almost-material/NotoSans-Regular.ttf') format('truetype')",
			},

			"body": {
				backgroundColor: shadeHexColor(userPalette.primary, shadesInPercent[99]),
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

export { almostMaterialPlugin }