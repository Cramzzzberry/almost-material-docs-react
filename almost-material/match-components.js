import ShadeHexColor from "./shadeHexColor"
import LightOrDark from "./lightOrDark"

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
  
        "&.btn-outlined": { //btn-outlined
          color: color,
          "&:hover": {
            backgroundColor: color,
            borderColor: color,
            color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
          },
        },
  
        "&.btn-ghost": { //btn-ghost
          color: color,
  
          "&.active": { //btn-active
            color: color,
          },
        },
  
        "&.active": { //btn with active state
          backgroundColor: color,
          borderColor: color,
          color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
          "&:hover:not([disabled])": {
            borderColor: color,
            backgroundColor: color,
          }
        },
  
        "&:disabled": { //disabled btn
          color: ShadeHexColor(color, shades[10]),
        },
      }),
  
  
      //card class
      "card": (color) => ({
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        backgroundColor: color,
      })
    }
  )
}

export default MatchComponents