import ShadeHexColor from "./shadeHexColor"
import LightOrDark from "./lightOrDark"

const AddComponents = (color, shades) => {
  return (
    {
      //badge class
      ".badge": {
        display: "flex",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        fontSize: "16px",
        height: "fit-content",
        width: "fit-content",
        backgroundColor: color,
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "9999px",
        borderWidth: "1px",
        borderColor: color,
        fontWeight: "bold",
        "&.badge-outlined": { //badge-outlined
          backgroundColor: "transparent",
          color: color,
          borderColor: color,
          fontWeight: "normal",
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
      },
  
  
  
      //btn class
      ".btn": {
        backgroundColor: color,
        borderColor: color,
        display: "flex", 
        paddingTop: "1rem",
        paddingBottom: "1rem", 
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        height: "fit-content",
        width: "fit-content",
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
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
          borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
        },
  
        "&.btn-outlined": { //btn-outlined
          backgroundColor: "transparent",
          borderColor: "#C7C7C7",
          color: color,
          "&:hover": {
            backgroundColor: color,
            borderColor: color,
            color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
            opacity: "1",
          },
        },
  
        "&.btn-ghost": { //btn-ghost
          backgroundColor: "transparent",
          borderColor: "transparent",
          color: color,
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
          color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
          "&:hover:not([disabled])": {
            borderColor: color,
            backgroundColor: color,
          }
        },
  
        "&:disabled": { //disabled btn
          backgroundColor: "rgba(0,0,0,0.075)",
          borderColor: "transparent",
          color: ShadeHexColor(color, shades[10]),
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
      },
  
  
  
      //card class
      ".card": {
        height: "auto",
        overflow: "hidden",
        borderRadius: "1.5rem",
        color: ShadeHexColor("#FFFFFF", LightOrDark("#FFFFFF") === 'light' ? shades[10] : shades[90]),
        backgroundColor: "#FFFFFF",
        "& > .card-body": {
          padding: "1.25rem",

          "& > .card-title": {
            fontWeight: "bold",
          },
  
          "& > .card-actions": {
            paddingTop: "0.75rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
          },

          "& > figure": {
            width: "100%",
            height: "auto",
            display: "flex",
            borderRadius: "1rem",
            overflow: "hidden",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            "& > img": {
              "-o-user-select": "none",
              "-moz-user-select": "none",
              "-webkit-user-select": "none",
              "user-select": "none",
              objectFit: "cover",
              width: "100%",
            }
          },
        },
  
        "& > figure": {
          width: "100%",
          height: "auto",
          display: "flex",
          borderRadius: "1.5rem",
          overflow: "hidden",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          "& > img": {
            "-o-user-select": "none",
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
            objectFit: "cover",
            width: "100%",
          }
        },
      },



      //checkbox class
      ".checkbox": {
        appearance: "none",
        "-webkit-appearance": "none",
        height: "1.25rem",
        width: "1.25rem",
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderColor: "#C7C7C7",
        borderRadius: "9999px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        "&:checked": {
          borderColor: color,
          backgroundColor: color,
        },
        "&:after": {
          content: "url('/almost-material/check_black_24dp.svg')",
          display: "none",
        },
        "&:checked:after": {
          display: "block",
        }
      },
  
  
  
      //divider class
      ".divider": {
        display: "flex",
        alignItems: "center",
      },
      ".divider::before, .divider::after": {
        flex: "1",
        backgroundColor: color,
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
        backgroundColor: ShadeHexColor(color, shades[95]),
        fontSize: "1.5rem",
        lineHeight: "2rem",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
    }
  )
}

export default AddComponents