import { ShadeHexColor, LightOrDark } from "./misc"

const MatchComponents = (shades) => {
  return (
    {
      //badge class
      "badge": (color) => ({
        backgroundColor: color,
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
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
      }),
  
  

      //button class
      "btn": (color) => ({
        backgroundColor: color,
        borderColor: color,
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        "&:hover:not([disabled])": {
          borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
        },

        "&:active:not([disabled])": {
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
          borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
        },
  
        "&.btn-outlined": { //btn-outlined
          color: color,
          "&:hover": {
            backgroundColor: color,
            borderColor: color,
            color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
          },

          "&:active": {
            backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
            borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
          },
        },
  
        "&.btn-ghost": { //btn-ghost
          color: color,
  
          "&.btn-active": { //btn-active
            color: color,

            "&:active:not([disabled])": { //when clicked, retain their colors
              borderColor: "transparent",
              backgroundColor: "rgba(0,0,0,0.05)",
              color: color,
            },
          },
        },
  
        "&.btn-active": { //btn with active state
          backgroundColor: color,
          borderColor: color,
          color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
          "&:hover:not([disabled])": {
            borderColor: color,
            backgroundColor: color,
          },
        },
  
        "&:disabled": { //disabled btn
          color: ShadeHexColor(color, shades[10]),
        },
      }),
  
  
      
      //card class
      "card": (color) => ({
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        backgroundColor: color,
      }),



      //checkbox class
      "checkbox": (color) =>  ({
        "&:checked": {
          borderColor: color,
          backgroundColor: color,
        },
        "&:after": {
          content: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="1 3 22 22" width="1rem"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }" stroke-width="2"/></svg>')`,
        },
      }),



      //divider class
      "divider": (color) => ({
        "&:before, &:after": {
          backgroundColor: color,	
        }
      }),



      //input class
      "input": (color) => ({ 
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
        "&:focus": {
          outline: `2px solid ${ color }`,
          outlineOffset: "2px",
        },

        "&.input-bordered": {
          borderColor: color,
        },

        "&.input-underlined": {
          borderColor: color,
        },
      }),



      //menu class
      "menu": (color) => ({
        "& > li > a": { //list items under menu
          "&:hover": { background: "rgba(0,0,0,0.05)" },

          "&:active": { background: "rgba(0,0,0,0.1)" },

          "&.menu-active": { backgroundColor: color, color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) },
        },
      }),
    }
  )
}

export default MatchComponents