import { ShadeHexColor, LightOrDark } from "./misc"

const AddBase = (shades) => {
  return {
    "html": {
      fontSize: "1rem",
    },

    "@font-face": {
      fontFamily: "'Inter'",
      fontWeight: "normal",
      src: "url('/almost-material/src/Inter-Variable.ttf') format('truetype')",
    },

    "body": {
      color: ShadeHexColor("#000000", shades[10]),
      backgroundColor: ShadeHexColor("#000000", shades[99]),
      fontFamily: "'Inter'",
    },
    
    "h1": {
      fontSize: "6rem",
      lineHeight: "7rem",
    },
    
    "h2": {
      fontSize: "3.75rem",
      lineHeight: "4.25rem",
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
    
    //scrollbars
    "::-webkit-scrollbar": {
      width: "4px",
      height: "4px",
    },
    
    "::-webkit-scrollbar-track": {
      borderRadius: "4px",
    },
    
    "::-webkit-scrollbar-thumb": {
      background: "#999999",
      borderRadius: '4px',
    },
  }
}

const themeStyles = (palette, shades) => {
  let themeStyleSheet = {}

	for(const color of Object.keys(palette)) {
		themeStyleSheet[`body[data-theme="${ color }"]`] = {
      color: ShadeHexColor(palette[color], shades[10]),
      backgroundColor: ShadeHexColor(palette[color], shades[95]),

      //placeholders
      "::placeholder": {
        color: ShadeHexColor(palette[color], shades[10]),
        opacity: "0.5",
      },
  
      ":-ms-input-placeholder": {
        opacity: "0.5",
      },
  
      "::-ms-input-placeholder": {
        opacity: "0.5",
      },

  
  
  
      //card class
      "& .card": {
        backgroundColor: ShadeHexColor(palette[color], shades[90]),
        color: ShadeHexColor(ShadeHexColor(palette[color], shades[90]), LightOrDark(ShadeHexColor(palette[color], shades[90])) === 'light' ? shades[10] : shades[90]),
      },



      //drawer class
      "& .drawer": {
        "& > .drawer-sidebar": { //sidebar wrapper
          "& > .drawer-sidebar-content": {  //wrapper for the sidebar content
            "& > *": {
              backgroundColor: ShadeHexColor(palette[color], shades[90]),
            },

            "& .menu": {
              color: ShadeHexColor(ShadeHexColor(palette[color], shades[90]), LightOrDark(ShadeHexColor(palette[color], shades[90])) === 'light' ? shades[10] : shades[90]),
      
              "&.menu-horizontal": { //horizontal menu
                "& > li": {
                  "& > details": { //collapsible list under menu
                    "& > ul, & > ol": { //sub ul and/or ol under li element
                      color: ShadeHexColor(ShadeHexColor(palette[color], shades[90]), LightOrDark(ShadeHexColor(palette[color], shades[90])) === 'light' ? shades[10] : shades[90]),
                      backgroundColor: ShadeHexColor(palette[color], shades[90]),
                    },
                  }
                },
              },
      
              "& .menu-title": { //menu title in almost all wrapper elements
                color: ShadeHexColor(palette[color], shades[10]),
              },
      
              "& li": {
                "& > ul, & > ol": {
                  "&::before": { //line on the left side of sub-ul
                    backgroundColor: ShadeHexColor(palette[color], shades[10]),
                    opacity: "0.25"
                  },
                },  
      
                "& > a, & > label": { //list items under menu
                  "&.menu-active": { backgroundColor: palette[color], color: ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]) },
                },
      
                "& > details": { //collapsible list under menu
                  "& > ul, & > ol": { //sub ul and/or ol under li element
                    "&::before": { //line on the left side of sub-ul
                      backgroundColor: "#EBEBEB",
                    },
                  },
                }
              },
            },
          },
        },
      },



      //divider class
      "& .divider": {
        "&::before, &::after": { //the line itself
          backgroundColor: ShadeHexColor(palette[color], shades[10]),
          opacity: "0.25"
        },
      },



      //dropdown class
      "& .dropdown": {
        "& .card": {backgroundColor: ShadeHexColor(palette[color], shades[99])}
      },



      //menu class
      ".menu": {
        "& .menu-title": { //menu title in almost all wrapper elements
          color: ShadeHexColor(palette[color], shades[10]),
          opacity: "0.5"
        },

        "& li": {
          "& > ul, & > ol": {
            "&::before": { //line on the left side of sub-ul
              backgroundColor: ShadeHexColor(palette[color], shades[10]),
              opacity: "0.25"
            },
          },

          "& > details": { //collapsible list under menu
            "& > ul, & > ol": { //sub ul and/or ol under li element
              "&::before": { //line on the left side of sub-ul
                backgroundColor: ShadeHexColor(palette[color], shades[10]),
                opacity: "0.25"
              },
            },
          }
        },
      },



      //navbar class
      "& .navbar": {
        backgroundColor: ShadeHexColor(palette[color], shades[80]),

        "&.navbar-bottom": { //bottom nav bar
          "& > .menu": {
            color: ShadeHexColor(ShadeHexColor(palette[color], shades[80]), shades[10]),

            "& > li": {
              "& > a, & > label": { //list items under menu
                "&.menu-active": { 
                  backgroundColor: "transparent",
                  color: ShadeHexColor(ShadeHexColor(palette[color], shades[80]), shades[10]),

                  "& > *:first-child": {
                    backgroundColor: palette[color],
                    color: ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]),
                  },
                },
              },
            }
          },
        }
      },



      //rail class
      "& .rail": {
        backgroundColor: ShadeHexColor(palette[color], shades[80]),
        
        "& > div.rail-top, & > div.rail-middle, & > div.rail-bottom": {
          "& > .btn": {
            color: ShadeHexColor(palette[color], shades[10]),
          },

          "& > .menu": {
            color: ShadeHexColor(ShadeHexColor(palette[color], shades[80]), shades[10]),
    
            "& li": {
              "& > a, & > label": { //list items under menu
                "&.menu-active": { backgroundColor: palette[color], color: ShadeHexColor(palette[color], LightOrDark(palette[color]) === 'light' ? shades[10] : shades[90]) },
              },
            },
          },
        },
      },
    }
	}

	return themeStyleSheet
}

export default { AddBase, themeStyles } 