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
  
        "&.badge-sm": { paddingLeft: "0.5rem", paddingRight: "0.5rem", fontSize: "0.75rem" },
  
        "&.badge-lg": { paddingLeft: "1rem", paddingRight: "1rem", fontSize: "1.375rem" },
      },
  
  
  
      //btn class
      ".btn": {
        textTransform: "capitalize",
        backgroundColor: color,
        borderColor: color,
        display: "flex", 
        minHeight: "3.25rem",
        maxHeight: "3.25rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        width: "fit-content",
        whiteSpace: "nowrap",
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
  
          "&.btn-active": { //btn-active
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
          minHeight: "3.25rem",
          maxHeight: "3.25rem",
          minWidth: "3.25rem",
          maxWidth: "3.25rem",
          borderRadius: "9999px",
          "&.btn-ghost": {
            padding: "0.75rem",
            borderRadius: "9999px",
            "&:hover:not([disabled])": { background: "rgba(0,0,0,0.05)" },

            "&:active:not([disabled])": { background: "rgba(0,0,0,0.1)" },
          },
  
          "&.btn-sm": {
            minHeight: "2.5rem",
            maxHeight: "2.5rem",
            minWidth: "2.5rem",
            maxWidth: "2.5rem",
            fontSize: "1.375rem",
            "& > *": { fontSize: "1.375rem" } },
          "&.btn-lg": {
            minHeight: "3.75rem",
            maxHeight: "3.75rem",
            minWidth: "3.75rem",
            maxWidth: "3.75rem",
            fontSize: "1.625rem",
            "& > *": { fontSize: "1.625rem" }
          },
          "&.btn-xl": {
            minHeight: "4.5rem",
            maxHeight: "4.5rem",
            minWidth: "4.5rem",
            maxWidth: "4.5rem",
            fontSize: "2rem",
            "& > *": { fontSize: "2rem" }
          },
        },
  
        "&.btn-active": { //btn with active state
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
  
        "&.btn-sm": {
          minHeight: "2.5rem",
          maxHeight: "2.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          gap: "0.25rem",
          fontSize: "0.875rem",
          "& > *": {
            fontSize: "1.375rem",
          }
        },
  
        "&.btn-lg": {
          minHeight: "3.75rem",
          maxHeight: "3.75rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          fontSize: "1.375rem",
          "& > *": {
            fontSize: "1.625rem",
          }
        },
  
        "&.btn-xl": {
          minHeight: "4.5rem",
          maxHeight: "4.5rem",
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
        width: "auto",
        height: "fit-content",
        borderRadius: "1.5rem",
        color: ShadeHexColor("#FFFFFF", LightOrDark("#FFFFFF") === 'light' ? shades[10] : shades[90]),
        backgroundColor: "#FFFFFF",
        "& > .card-body": { //for card body
          padding: "1.25rem",

          "& > .card-title": { fontWeight: "bold" },
  
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

          "&::after": { display: "block" },
        },
        "&::after": {
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
        "&::before, &::after": {
          flex: "1",
          backgroundColor: "rgba(0,0,0,0.05)",
          content: "''",
          borderRadius: "9999px",
          padding: "1px",				
        },
      },



      //input class
      ".input": {
        minHeight: "3.25rem",
        maxHeight: "3.25rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        backgroundColor: "#ffffff",
        borderRadius: "9999px",
        borderWidth: "2px",
        borderColor: "#ffffff",
        "&:focus": {
          outline: `2px solid ${ color }`,
          outlineOffset: "2px",

          "&.input-underlined": { outline: "none" },
        },

        "&.input-bordered": { borderColor: color },

        "&.input-ghost": { borderColor: "transparent", backgroundColor: "transparent" },

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
          minHeight: "2.5rem",
          maxHeight: "2.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontSize: "0.875rem",
        },
        "&.input-lg": {
          minHeight: "3.75rem",
          maxHeight: "3.75rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          fontSize: "1.375rem",
        },
        "&.input-xl": {
          minHeight: "4.5rem",
          maxHeight: "4.5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          fontSize: "1.5rem",
        },
        
        "&:disabled": { opacity: "70%", cursor: "not-allowed" },
      },



      //dropdown class
      ".dropdown": {
        position: "relative",
        width: "fit-content",
        "& > .dropdown-content": { //default position
          transformOrigin: "10% 10%",
          top: "calc(100% + 8px)",
          bottom: "auto",
          left: "auto",
          right: "auto",
          overflowY: "auto",
          position: "absolute",
          opacity: "0",
          visibility: "hidden",
          transition: `transform 75ms ${ easeInOut }, opacity 75ms ${ easeInOut }, visibility 75ms ${ easeInOut }`,
          transform: "scale(0.85, 0.85)",
          "--tw-drop-shadow": "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
          filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",
        },

        "& > label:focus ~ .dropdown-content": { transform: "scale(1, 1)", opacity: "1", visibility: "visible" },

        "&:focus-within > .dropdown-content": { //this is important so that the dropdown doesnt close when you click the contents
          transform: "scale(1, 1)",
          opacity: "1",
          visibility: "visible",
        },

        "& > .dropdown-content > li > a": {
          display: "flex",
          padding: "1.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
          flexDirection: "row",
          width: "100%",
        },

        "& > .dropdown-content > li > a:hover": { cursor: "pointer", backgroundColor: "rgba(0,0,0,0.06)", top: "calc(100% + 8px)" },

        "&.dropdown-top": { //top dropdown
          "& > .dropdown-content": { transformOrigin: "10% 90%", top: "auto", bottom: "calc(100% + 8px)" },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "90% 90%", top: "auto", right: "0%" },
        },

        "&.dropdown-bottom": { //bottom dropdown
          "& > .dropdown-content": { top: "calc(100% + 8px)", bottom: "auto", },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "90% 10%", top: "calc(100% + 8px)", right: "0%" },
        },

        "&.dropdown-left": { //left dropdown
          "& > .dropdown-content": { transformOrigin: "90% 10%", top: "0%", right: "calc(100% + 8px)" },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "90% 90%", top: "auto", bottom: "0%", right: "calc(100% + 8px)" },
        },

        "&.dropdown-right": { //right dropdown
          "& > .dropdown-content": { transformOrigin: "10% 10%", top: "0%", left: "calc(100% + 8px)" },
          "&.dropdown-end > .dropdown-content": { transformOrigin: "10% 90%", top: "auto", bottom: "0%", left: "calc(100% + 8px)" },
        },
      },



      //menu class
      ".menu": {
        textTransform: "capitalize",
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        fontWeight: "600",
        "& > *": { fontSize: "1rem" },
        color: color,

        "&.menu-horizontal": { flexDirection: "row" },

        "& .menu-title": { //menu title in almost all wrapper elements
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          minHeight: "2.5rem",
          maxHeight: "2.5rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          color: "#ABABAB",
          fontSize: "0.875rem",
        },

        "& li > ul,ol": { //ul sub menus under li element
          position: "relative",
          display: "flex",
          flexDirection: "column",
          marginLeft: "1.25rem",
          paddingLeft: "1rem",

          //put line on the left side of sub-ul
          "&::before": {
            position: "absolute",
            left: "0",
            top: "1.25rem",
            bottom: "1.25rem",
            content: "''",
            width: "2px",
            backgroundColor: "#EBEBEB",
          },

          "& > li > a": { //list items under sub-menu
            minHeight: "3.25rem",
            maxHeight: "3.25rem",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "9999px",
            width: "100%",
            whiteSpace: "nowrap",
            cursor: "pointer",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
  
            "&:hover": { background: "rgba(0,0,0,0.05)" },
  
            "&:active": { background: "rgba(0,0,0,0.1)" },
  
            "&.menu-active": { backgroundColor: color, color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) },
          },
        },

        "& > li > a": { //list items under menu
          minHeight: "3.25rem",
          maxHeight: "3.25rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRadius: "9999px",
          width: "100%",
          whiteSpace: "nowrap",
          cursor: "pointer",
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",

          "&:hover": { background: "rgba(0,0,0,0.05)" },

          "&:active": { background: "rgba(0,0,0,0.1)" },

          "&.menu-active": { backgroundColor: color, color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) },
        },
      },



      //modal class
      ".modal": {
        position:"absolute",
        top:"0",
        left:"0",
        width:"100vw",
        height:"100vh",
        background:"rgba(0,0,0,0.2)",
        transition: `opacity 125ms ${ easeInOut }, visibility 125ms ${ easeInOut }`,
        opacity: "0",
        visibility: "hidden",
        zIndex: "9999",

        "& > .modal-content": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          width:"100%",
          height:"100%",
          transition: `transform 125ms ${ easeInOut }`,
          transform: "scale(0.9, 0.9)",

          "& > .modal-backdrop": {
            position:"absolute",
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
            zIndex: "-1",
          }
        }
      },

      "input[type='checkbox'].modal-toggle": {
        position: "absolute",
        top: "-100px",
        "&:checked+.modal": { opacity: "1", visibility: "visible" },
        "&:checked+.modal > .modal-content": { transform: "scale(1, 1)" },
      },



      //navbar class
      ".navbar": {
        display: "flex",
        position: "sticky",
        top: "0",
        padding: "0.25rem",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        minheight: "4.75rem",
        mxheight: "4.75rem",
      },



      //navdrawer class
      ".navdrawer": {
        display: "flex",
        flexDirection: "row-reverse",
        height: "100vh",

        "& > .navdrawer-content": {
          overflowY: "auto",
          width: "100%",
        },

        "& > .navdrawer-sidebar": {
          position: "absolute",
          top: "0",
          left: "0",
          // borderRightWidth: "1px",
          height: "100vh",
          opacity: "0",
          visibility: "hidden",
          transition: `opacity 250ms ${ easeInOut }, visibility 250ms ${ easeInOut }`,

          "& > .navdrawer-sidebar-content": { 
            position: "absolute",
            height: "100vh",
            left: "-23rem",
            width: "23rem",
            zIndex: "1",
            transition: `left 250ms ${ easeInOut }`,

            "& > *": {
              height: "100%",
              backgroundColor: "#FFFFFF",
              // dropShadow: "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))",
            },
          },

          "& > .navdrawer-overlay": {
            "position":"absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            cursor: "pointer",
          },
        },

        "& > input[type='checkbox'].navdrawer-toggle": {
          position: "absolute",
          top: "-2.5rem",
          "&:checked ~ .navdrawer-sidebar": {
            opacity: "1",
            visibility: "visible",
            "& > .navdrawer-sidebar-content": {
              left: "0%",
            },
          }
        },

        "&.navdrawer-open": { // forever opened drawer
          "& > .navdrawer-content": {
            overflowY: "auto",
            width: "100%",
          },
  
          "& > .navdrawer-sidebar": {
            position: "static",
            top: "0",
            left: "0",
            borderRightWidth: "1px",
            height: "100vh",
            opacity: "1",
            visibility: "visible",
  
            "& > .navdrawer-sidebar-content": { 
              position: "static",
              height: "100vh",
              left: "0",
              width: "21rem",
              zIndex: "0",
            },
  
            "& > .navdrawer-overlay": {
              visibility: "hidden",
            },
          },
        }
      },
    }
  )
}

export default AddComponents