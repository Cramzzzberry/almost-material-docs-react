import { ShadeHexColor, LightOrDark } from "./misc"

const AddComponents = (color, shades) => {
  const easeInOut = "cubic-bezier(0.4, 0, 0.2, 1)"

  return (
    {
      //badge class
      ".badge": {
        display: "flex",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
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
        
        // "&.badge-dot": { //badge-dot
        //   padding: "0",
        //   backgroundColor: color,
        //   width: "0.5rem",
        //   height: "0.5rem",
        // },
  
        "&.badge-sm": { //badge-sm
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          fontSize: "0.75rem",
        },
  
        "&.badge-lg": { //badge-lg
          // paddingTop: "0.25rem",
          // paddingBottom: "0.25rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontSize: "1.375rem",
        },
      },
  
  
  
      //btn class
      ".btn": {
        backgroundColor: color,
        borderColor: color,
        display: "flex", 
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem", 
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
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
        // transition: `background-color 150ms ${ easeInOut }, border-color 300ms ${ easeInOut }`,
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        "&:hover:not([disabled])": {
          cursor: "pointer",
          borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
        },

        "&:active:not([disabled])": {
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
          borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
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

          "&:active": {
            backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
            borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
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

          "&:active:not([disabled])": {
            background: "rgba(0,0,0,0.1)",
          },
  
          "&.active": { //btn-active
            backgroundColor: "rgba(0,0,0,0.05)",
            borderColor: "transparent",
            color: color,
            "&:hover:not([disabled])": {
              borderColor: "transparent",
              backgroundColor: "rgba(0,0,0,0.05)",
            },

            "&:active:not([disabled])": { //when clicked, retain their colors
              borderColor: "transparent",
              backgroundColor: "rgba(0,0,0,0.05)",
              color: color,
            },
          },
        },
  
        "&.btn-circle": { //btn-circle
          padding: "0.75rem",
          borderRadius: "9999px",
          "&.btn-ghost": {
            padding: "0.75rem",
            borderRadius: "9999px",
            "&:hover:not([disabled])": {
              background: "rgba(0,0,0,0.05)",
            },

            "&:active:not([disabled])": {
              background: "rgba(0,0,0,0.1)",
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
            padding: "1rem",
            fontSize: "1.625rem",
            "& > *": {
              fontSize: "1.625rem",
            }
          },
  
          "&.btn-xl": {
            padding: "1.5rem",
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
          cursor: "not-allowed",
        },
  
        "&.btn-sm": { //btn-sm
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          gap: "0.25rem",
          fontSize: "0.875rem",
          "& > *": {
            fontSize: "1.375rem",
          }
        },
  
        "&.btn-lg": { //btn-lg
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          fontSize: "1.375rem",
          "& > *": {
            fontSize: "1.625rem",
          }
        },
  
        "&.btn-xl": { //btn-lg
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          fontSize: "1.5rem",
          "& > *": {
            fontSize: "2rem",
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
        borderRadius: "4px",
        cursor: "pointer",
        "&:checked": {
          borderColor: color,
          backgroundColor: color,
          "&:after": {
            display: "block",
          },
        },
        "&:after": {
          display: "none",
          height: "1.25rem",
          width: "1.25rem",
          content: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="1 3 22 22" width="1rem"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" stroke="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }" stroke-width="2"/></svg>')`,
        },
      },
  
  
  
      //divider class
      ".divider": {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "0",
        paddingRight: "0",
        "&.divider-horizontal": {
          width: "0%",
          flexDirection: "column",
          paddingTop: "0",
          paddingBottom: "0",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
        "&:before, &:after": {
          flex: "1",
          backgroundColor: "rgba(0,0,0,0.05)",
          content: "''",
          borderRadius: "9999px",
          padding: "1px",				
        },
      },



      //input class
      ".input": {
        paddingTop: "calc(0.75rem - 2px)",
        paddingBottom: "calc(0.75rem - 2px)",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        backgroundColor: "#ffffff",
        borderRadius: "9999px",
        borderWidth: "2px",
        borderColor: "#ffffff",
        "&:focus": {
          outline: `2px solid ${ color }`,
          outlineOffset: "2px",
          "&.input-underlined": {
            outline: "none",
          },
        },

        "&.input-bordered": {
          borderColor: color,
        },

        "&.input-ghost": {
          borderColor: "transparent",
          backgroundColor: "transparent",
        },

        "&.input-underlined": {
          borderWidth: "0px",
          borderBottomWidth: "2px",
          borderColor: color,
          backgroundColor: "transparent",
          borderRadius: "2px",
          paddingTop: "0.5rem",
          paddingBottom: "calc(0.5rem - 2px)",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",
        },

        "&.input-sm": {
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontSize: "0.875rem",
        },

        "&.input-lg": {
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          fontSize: "1.375rem",
        },

        "&.input-xl": {
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          fontSize: "1.5rem",
        },
  
        "&:disabled": {
          opacity: "70%",
          cursor: "not-allowed",
        },
      },



      //menu class
      ".menu": {
        position: "relative",
        "& > .menu-content": { //default position
          transformOrigin: "10% 10%",
          top: "calc(100% + 8px)",
          bottom: "auto",
          left: "auto",
          right: "auto",
          overflowY: "auto",
          position: "absolute",
          backgroundColor: "#ffffff",
          opacity: "1",
          borderRadius: "1.5rem",
          minWidth: "240px",
          visibility: "hidden",
          transition: `transform 75ms ${ easeInOut }, opacity 75ms ${ easeInOut }, visibility 38ms ${ easeInOut }`,
          transform: "scale(0.9, 0.9)",
          "--tw-drop-shadow": "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
          filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
        },

        "& > label:focus ~ .menu-content": {
          transform: "scale(1, 1)",
          opacity: "1",
          visibility: "visible",
        },

        "&:focus-within > .menu-content": { //this is important so that the menu doesnt close when you click the contents
          transform: "scale(1, 1)",
          opacity: "1",
          visibility: "visible",
        },

        "& > .menu-content > li > a": {
          display: "flex",
          padding: "1.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          flexDirection: "row",
          width: "100%",
        },

        "& > .menu-content > li > a:hover": {
          cursor: "pointer",
          backgroundColor: "rgba(0,0,0,0.06)",
          top: "calc(100% + 8px)",
        },

        "&.menu-top": { //top menu
          "& > .menu-content": {
            transformOrigin: "10% 90%",
            top: "auto",
            bottom: "calc(100% + 8px)",
          },
          "&.menu-end > .menu-content": {
            transformOrigin: "90% 90%",
            top: "auto",
            right: "0%",
          },
        },

        "&.menu-bottom": { //bottom menu
          "& > .menu-content": {
            top: "calc(100% + 8px)",
            bottom: "auto",
          },
          "&.menu-end > .menu-content": {
            transformOrigin: "90% 10%",
            top: "calc(100% + 8px)",
            right: "0%",
          },
        },

        "&.menu-left": { //left menu
          "& > .menu-content": {
            transformOrigin: "90% 10%",
            top: "0%",
            right: "calc(100% + 8px)"
          },
          "&.menu-end > .menu-content": {
            transformOrigin: "90% 90%",
            top: "auto",
            bottom: "0%",
            right: "calc(100% + 8px)",
          },
        },

        "&.menu-right": { //right menu
          "& > .menu-content": {
            transformOrigin: "10% 10%",
            top: "0%",
            left: "calc(100% + 8px)"
          },
          "&.menu-end > .menu-content": {
            transformOrigin: "10% 90%",
            top: "auto",
            bottom: "0%",
            left: "calc(100% + 8px)",
          },
        },
      }
    }
  )
}

export default AddComponents