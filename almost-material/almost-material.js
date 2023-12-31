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
const tonePercent = {
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

		const customPalette = theme("almostMaterial") //get the palette from tailwind config
		customPalette.defaultColor = shadeHexColor(customPalette.primary, tonePercent[10])
		addComponents(
			{
				// badge components
				".badge": {
					display: "flex",
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
					fontSize: "16px",
					height: "fit-content",
					backgroundColor: customPalette.defaultColor,
					color: shadeHexColor(customPalette.defaultColor, lightOrDark(customPalette.defaultColor) === 'light' ? tonePercent[10] : tonePercent[90]),
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					borderRadius: "9999px",
					"-webkit-user-select": "none",
					"-ms-user-select": "none",
					"user-select": "none",
					"&.badge-outlined": {
						backgroundColor: "transparent",
						color: customPalette.defaultColor,
						borderWidth: "1px",
						borderColor: customPalette.defaultColor,
					},

					"&.badge-dot": {
						padding: "0",
						backgroundColor: customPalette.defaultColor,
						width: "0.5rem",
						height: "0.5rem",
					},

					"&.badge-sm": {
						paddingLeft: "1rem",
						paddingRight: "1rem",
						fontSize: "0.875rem",
						lineHeight: "1.25rem",
					},

					"&.badge-lg": {
						paddingTop: "0.25rem",
						paddingBottom: "0.25rem",
						paddingLeft: "2rem",
						paddingRight: "2rem",
						fontSize: "1.125rem",
						lineHeight: "1.75rem",
					},
				},





				// button components
				".btn": {
					backgroundColor: customPalette.defaultColor,
					borderColor: customPalette.defaultColor,
					display: "flex", 
					paddingTop: "1rem",
					paddingBottom: "1rem", 
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
					height: "fit-content",
					color: shadeHexColor(customPalette.defaultColor, tonePercent[90]),
					flexDirection: "row", 
					justifyContent: "center", 
					alignItems: "center", 
					borderRadius: "9999px", 
					gap: "0.5rem",
					fontWeight: "600",
					"-webkit-user-select": "none",
					"-ms-user-select": "none",
					"user-select": "none",
					"&:hover:not([disabled])": {
						cursor: "pointer",
						backgroundColor: shadeHexColor(customPalette.defaultColor, 0.05),
					},

					"&.btn-outlined": {
						backgroundColor: "transparent",
						borderColor: "#C7C7C7",
						color: customPalette.defaultColor,
						borderWidth: "1px",
						"&:hover": {
							backgroundColor: customPalette.defaultColor,
							borderColor: customPalette.defaultColor,
							color: shadeHexColor(customPalette.defaultColor, tonePercent[90]),
							opacity: "1",
						}
					},

					"&.btn-ghost": {
						paddingTop: "0.5rem",
						paddingBottom: "0.5rem", 
						paddingLeft: "1.5rem",
						paddingRight: "1.5rem", 
						backgroundColor: "transparent",
						color: customPalette.defaultColor,
						borderRadius: "12px",
						fontWeight: "600",
						"&:hover:not([disabled])": {
							background: "rgba(0,0,0,0.05)",
						},

						"&.active": {
							backgroundColor: "rgba(0,0,0,0.05)",
							color: customPalette.defaultColor,
							"&:hover:not([disabled])": {
								backgroundColor: "rgba(0,0,0,0.05)",
							}
						},
					},
					
					"&.btn-link": {
						padding: "0",
						color: customPalette.defaultColor,
						backgroundColor: "transparent",
						textDecoration: "underline",
						"&:hover:not([disabled])": {
							backgroundColor: "transparent",
							color: shadeHexColor(customPalette.defaultColor, 0.2),
						},

						"&.active": {
							backgroundColor: "transparent",
							color: shadeHexColor(customPalette.defaultColor, 0.2),
							"&:hover:not([disabled])": {
								backgroundColor: "transparent",
								color: shadeHexColor(customPalette.defaultColor, 0.2),
							}
						},
					},

					"&.btn-rounded": {
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

					"&.active": {
						backgroundColor: customPalette.defaultColor,
						borderColor: customPalette.defaultColor,
						color: shadeHexColor(customPalette.defaultColor, tonePercent[90]),
						"&:hover:not([disabled])": {
							backgroundColor: customPalette.defaultColor,
						}
					},

					"&:disabled": {
						backgroundColor: "rgba(0,0,0,0.075)",
						color: shadeHexColor(customPalette.defaultColor, tonePercent[10]),
						opacity: "70%",
					},

					"&.btn-sm": {
						paddingTop: "0.5rem",
						paddingBottom: "0.5rem",
						paddingLeft: "1rem",
						paddingRight: "1rem",
						fontSize: "0.875rem",
						"& > *": {
							fontSize: "1rem",
						}
					},

					"&.btn-lg": {
						paddingTop: "1.5rem",
						paddingBottom: "1.5rem",
						paddingLeft: "2rem",
						paddingRight: "2rem",
						fontSize: "1.25rem",
						"& > *": {
							fontSize: "1.75rem",
						}
					},
				},





				//card components
				".card": {
					height: "auto",
					flexDirection: "column",
					overflow: "hidden",
					borderRadius: "1.5rem",
					backgroundColor: shadeHexColor(customPalette.defaultColor, tonePercent[90]),
					transitionProperty: "background-color, border-color, color, fill, stroke",
					transitionDuration: "150ms",
					"& > .card-headline" : {
						padding: "1.25rem",
						whiteSpace: "normal",
					},

					"& > .card-actions": {
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

					"&.card-hover:hover": {
						backgroundColor: shadeHexColor(customPalette.defaultColor, tonePercent[0]),
						color: shadeHexColor(customPalette.defaultColor, lightOrDark(customPalette.defaultColor) === 'light' ? tonePercent[10] : tonePercent[90]),
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
				},





				//divider components
				".divider": {
					display: "flex",
					alignItems: "center",
				},
				".divider::before, .divider::after": {
					flex: "1",
					backgroundColor: customPalette.defaultColor,
					content: "''",
					borderRadius: "9999px",
					padding: "0.5px",				
				},





				// drawer components
				// ".drawer": {
				// 	position: "fixed", 
				// 	top: "0", 
				// 	left: "-100%", 
				// 	zIndex: "20", 
				// 	width: "100%", 
				// 	height: "100vh", 
				// 	transitionDelay: "500ms",
				// },

				// ".drawer-toggle": {
				// 	position: "absolute", 
				// 	top: "-2.5rem", 
				// 	visibility: "hidden", 
				// },

				// ".drawer .drawer-overlay": {
				// 	position: "fixed", 
				// 	transitionProperty: "background-color, border-color, color, fill, stroke", 
				// 	transitionDuration: "500ms", 
				// 	width: "100%", 
				// 	height: "100%", 
				// 	cursor: "pointer", 
				// 	background: "rgba(0,0,0,0.0)",
				// },

				// ".drawer-toggle:checked + .drawer .drawer-overlay": {
				// 	background: "rgba(0,0,0,0.2)",
				// },

				// ".drawer > .drawer-side": {
				// 	position: "fixed", 
				// 	left: "-360px",
				// 	paddingLeft: "1rem",
				// 	paddingRight: "1rem", 
				// 	paddingTop: "1.5rem",
				// 	paddingBottom: "1.5rem", 
				// 	backgroundColor: shadeHexColor(customPalette.primary, tonePercent[95]), 
				// 	transitionProperty: "all", 
				// 	transitionDuration: "500ms", 
				// 	height: "100vh", 
				// 	borderTopRightRadius: "1rem",
				// 	borderBottomRightRadius: "1rem", 
				// 	width: "360px",
				// 	overflowY: "auto", 
				// },

				// ".drawer-toggle:checked + .drawer > .drawer-side": {
				// 	left: "0",
				// },

				// ".drawer-toggle:checked + .drawer": {
				// 	left: "0",
				// 	transitionDelay: "0ms",
				// },

				// ".drawer .drawer-side > ul > li > a": {
				// 	display: "flex", 
				// 	paddingTop: "1rem",
				// 	paddingBottom: "1rem", 
				// 	paddingLeft: "1.5rem",
				// 	paddingRight: "1.5rem", 
				// 	flexDirection: "row", 
				// 	alignItems: "center", 
				// 	borderRadius: "9999px", 
				// 	gap: "1rem",
				// 	fontWeight: "600",
				// 	"&:hover": {
				// 		backgroundColor: "rgba(0,0,0,0.06)",
				// 	}
				// },

				// ".drawer .drawer-side > ul > li > a.active": {
				// 	color: shadeHexColor(customPalette.primary, lightOrDark(customPalette.primary) === 'light' ? tonePercent[10] : tonePercent[100]),
				// 	backgroundColor: customPalette.primary,
				// },





				// navbar components
				".navbar": {
					display: "flex",
					position: "sticky",
					top: "0",
					paddingLeft: "1.5rem",
					paddingRight: "1.5rem",
					height: "4rem",
					maxHeight: "4rem",
					backgroundColor: shadeHexColor(customPalette.primary, tonePercent[95]),
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
				// badge components
				"badge": (color) => ({
					backgroundColor: color,
					color: shadeHexColor(color, lightOrDark(color) === 'light' ? tonePercent[10] : tonePercent[90]),
					"&.badge-outlined": {
						borderColor: color,
						color: color,
					},

					"&.badge-dot": {
						backgroundColor: color,
					},
				}),





				//button components
				"btn": (color) => ({
					backgroundColor: color,
					borderColor: color,
					color: shadeHexColor(color, lightOrDark(color) === 'light' ? tonePercent[10] : tonePercent[90]),
					"&:hover:not([disabled])": {
						backgroundColor: shadeHexColor(color, lightOrDark(color) === 'light' ? -0.05 : 0.05),
					},

					"&.btn-outlined": {
						backgroundColor: "transparent",
						color: color,
						"&:hover:not([disabled])": {
							borderColor: color,
							backgroundColor: color,
							color: shadeHexColor(color, lightOrDark(color) === 'light' ? tonePercent[10] : tonePercent[90]),
							opacity: "1",
						}
					},

					"&.btn-text": {
						backgroundColor: "transparent",
						borderColor: "transparent",
						color:  color, 
						"&:hover:not([disabled])": {
							background: "rgba(0,0,0,0.05)",
						}
					},

					"&.btn-link": {
						color:  color,
						backgroundColor: "transparent",
						"&:hover:not([disabled])": {
							color: shadeHexColor(color, lightOrDark(color) === 'light' ? -0.2 : 0.2),
						}
					},

					"&.btn-rounded": {
						padding: "1rem",
						borderRadius: "9999px",
						"&.btn-ghost": {
							padding: "1rem",
							borderRadius: "9999px",
							backgroundColor: "transparent",
							borderColor: "transparent",
							color: color,
							"&:hover:not([disabled])": {
								background: "rgba(0,0,0,0.05)",
							},
						}
					},

					"&.active": {
						backgroundColor: color,
						borderColor: color,
						color: shadeHexColor(color, lightOrDark(color) === 'light' ? tonePercent[10] : tonePercent[90]),
						"&:hover:not([disabled])": {
							backgroundColor: color,
						}
					},

					"&:disabled": {
						color: shadeHexColor(color, tonePercent[10]),
					},
				}),




				
				//card components
				"card": (color) => ({
					backgroundColor: shadeHexColor(color, tonePercent[90]),
					color: shadeHexColor(color, tonePercent[10]),
					"&.card-hover:hover": {
						backgroundColor: color,
						color: shadeHexColor(color, lightOrDark(color) === 'light' ? tonePercent[10] : tonePercent[90]),
					}
				}),
			},
			{
				values: customPalette
			}
		)




		addBase({
			// or whichever color you"d like
			"html": {
				color: shadeHexColor(customPalette.primary, tonePercent[10])
			},

			"@font-face": {
				fontFamily: "'openSans'",
				fontWeight: "normal",
				src: "url('/almost-material/OpenSans-VariableFont.ttf') format('truetype')",
			},

			"body": {
				backgroundColor: shadeHexColor(customPalette.primary, tonePercent[99]),
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