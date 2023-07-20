//this function returns an object that will be used on addComponents() plugin function of tailwind css
//some day, i will clean up some mess here and organize all styles so that it will be easier to read
//stucked between using js variable for some styles or using a hard-coded value, dunno if it will impact performance but
//will definetely impact code readability

import { ShadeHexColor, LightOrDark } from "./misc"

const AddComponents = (color, shades) => {
  const easeInOut = "cubic-bezier(0.4, 0, 0.2, 1)"

  return (
    {
      //badge class
      //i need to rework badge class
      ".badge": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "fit-content",
        minHeight: "1.25rem",
        maxHeight: "1.25rem",
        paddingLeft: "0.75rem",
        paddingRight: "0.75rem",
        borderRadius: "9999px",
        borderWidth: "1px",

        fontSize: "0.875rem",
        fontWeight: "bold",
        lineHeight: "1.25rem",
        textTransform: "capitalize",

        backgroundColor: color,
        borderColor: color,
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),

        "&.badge-outline": { //badge-outlined
          fontWeight: "normal",

          backgroundColor: "transparent",
          borderColor: color,
          color: color,
        },

        "&.badge-dot": { //badge-dot
          minWidth: "0.875rem",
          maxWidth: "0.875rem",
          maxHeight: "0.875rem",
          minHeight: "0.875rem",

          padding: "0",
        },
  
        //sizes for badge
        "&.badge-sm": {
          minHeight: "1rem",
          maxHeight: "1rem",
          paddingLeft: "0.375rem",
          paddingRight: "0.375rem",

          fontSize: "0.625rem",
          lineHeight: "1rem",
        },

        "&.badge-md": { //default badge size
          minHeight: "1.25rem",
          maxHeight: "1.25rem",
          paddingLeft: "0.75rem",
          paddingRight: "0.75rem",

          fontSize: "0.875rem",
          lineHeight: "1.25rem",
        },
  
        "&.badge-lg": {
          minHeight: "1.5rem",
          maxHeight: "1.5rem",
          paddingLeft: "1.125rem",
          paddingRight: "1.125rem",

          fontSize: "1.125rem",
          lineHeight: "1.5rem",
        },
  
        "&.badge-xl": {
          minHeight: "1.75rem",
          maxHeight: "1.75rem",
          paddingLeft: "1.375rem",
          paddingRight: "1.375rem",

          fontSize: "1.375rem",
          lineHeight: "1.75rem",
        },
      },
  
  
  
      //btn class
      //this class is complicated for me, but all :active class does is display the style "when clicked"
      //I made the button height based on set max and min heights (instead of its own, like padding-based size), using this
      //method made all buttons uniformed, this is the same method used for input sizes
      ".btn": {
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        alignItems: "center", 
        justifyContent: "center",
        cursor: "pointer",

        width: "fit-content",
        minHeight: "3.25rem",
        maxHeight: "3.25rem",
        borderWidth: "1px",
        borderRadius: "9999px",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",

        fontSize: "1rem !important",
        fontWeight: "bold",
        textTransform: "capitalize",
        whiteSpace: "nowrap",

        backgroundColor: color,
        borderColor: color,
        color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",

        "&:hover:not([disabled])": {
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
          borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.1 : 0.1),
        },

        "&:active:not([disabled])": {
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
          borderColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? -0.3 : 0.3),
        },
  
        "&.btn-outline": { //btn-outlined
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
            backgroundColor: "rgba(0,0,0,0.05) !important",
            borderColor: "transparent !important",
            color: `${ color } !important`,
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
  
          //sizes for btn-circle
          "&.btn-sm": {
            minHeight: "2.5rem",
            maxHeight: "2.5rem",
            minWidth: "2.5rem",
            maxWidth: "2.5rem",
            fontSize: "1.375rem !important",
            "& > *": { fontSize: "1.375rem !important" }
          },

          "&.btn-md": { //default btn size
            minHeight: "3.25rem",
            maxHeight: "3.25rem",
            minWidth: "3.25rem",
            maxWidth: "3.25rem",
            fontSize: "1.5rem !important",
            "& > *": { fontSize: "1.5rem !important" }
          },

          "&.btn-lg": {
            minHeight: "3.75rem",
            maxHeight: "3.75rem",
            minWidth: "3.75rem",
            maxWidth: "3.75rem",
            fontSize: "1.625rem !important",
            "& > *": { fontSize: "1.625rem !important" }
          },

          "&.btn-xl": {
            minHeight: "4.5rem",
            maxHeight: "4.5rem",
            minWidth: "4.5rem",
            maxWidth: "4.5rem",
            fontSize: "2rem !important",
            "& > *": { fontSize: "2rem !important" }
          },
        },
  
        "&.btn-active": { //btn with active state
          backgroundColor: `${ color } !important`,
          borderColor: `${ color } !important`,
          color: `${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) } !important`,
        },
  
        "&:disabled": { //disabled btn
          backgroundColor: "rgba(0,0,0,0.075)",
          borderColor: "transparent",
          color: ShadeHexColor(color, shades[10]),
          opacity: "70%",
          cursor: "not-allowed",
        },
  
        //sizes for different buttons except btn-circle
        "&.btn-sm": {
          minHeight: "2.5rem",
          maxHeight: "2.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          gap: "0.25rem",
          fontSize: "0.875rem !important",
          "& > *": {
            fontSize: "1.375rem !important",
          }
        },

        "&.btn-md": {
          minHeight: "3.25rem",
          maxHeight: "3.25rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          gap: "0.5rem",
          fontSize: "1rem !important",
          "& > *": {
            fontSize: "1.5rem !important",
          }
        },
  
        "&.btn-lg": {
          minHeight: "3.75rem",
          maxHeight: "3.75rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          gap: "0.5rem",
          fontSize: "1.375rem !important",
          "& > *": {
            fontSize: "1.625rem !important",
          }
        },
  
        "&.btn-xl": {
          minHeight: "4.5rem",
          maxHeight: "4.5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          gap: "0.5rem",
          fontSize: "1.5rem !important",
          "& > *": {
            fontSize: "2rem !important",
          }
        },
      },
  
  
  
      //card class
      ".card": {
        width: "auto",
        height: "fit-content",
        borderRadius: "1.5rem",
        backgroundColor: "#FFFFFF",
        color: ShadeHexColor("#FFFFFF", LightOrDark("#FFFFFF") === 'light' ? shades[10] : shades[90]),

        "& > .card-body": { //for card body
          padding: "1.25rem",

          "& > .card-title": { fontWeight: "bold" },
  
          "& > .card-actions": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",

            paddingTop: "0.75rem",
          },

          "& > figure": { //image inside card body, it will look like the image has frame
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",

            width: "100%",
            height: "auto",
            borderRadius: "1rem",
            "& > img": {
              width: "100%",
              objectFit: "cover",

              "-o-user-select": "none",
              "-moz-user-select": "none",
              "-webkit-user-select": "none",
              "user-select": "none",
            }
          },
        },
  
        "& > figure": { //no frame image
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",

          width: "100%",
          height: "auto",
          borderRadius: "1.5rem",
          "& > img": {
            width: "100%",
            objectFit: "cover",

            "-o-user-select": "none",
            "-moz-user-select": "none",
            "-webkit-user-select": "none",
            "user-select": "none",
          }
        },
      },



      //checkbox class
      ".check": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        cursor: "pointer",
        position: "relative",
        appearance: "none",
        "-webkit-appearance": "none",

        minWidth: "1.25rem",
        maxWidth: "1.25rem",
        minHeight: "1.25rem",
        maxHeight: "1.25rem",
        borderWidth: "2px",
        borderRadius: "4px",
        borderColor: "#C7C7C7",

        transition: `border-width 100ms ${ easeInOut }, border-color 100ms ${ easeInOut }`,

        "&:checked": {
          borderWidth: "10px",
          borderColor: color,

          "&::after": { opacity: "1" },
        },
        
        "&::after": { //my own checkbox :>
          position: "relative",
          top: "-1px",

          height: "1.25rem",
          width: "1.25rem",

          opacity: "0",
          content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
        },

        "&:disabled": {//disabled checkbox
          backgroundColor: "#C7C7C7",
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:checked:disabled": {//checked and disabled checkbox
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:indeterminate": {//indeterminate checkbox
          backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
          borderColor: color,
          borderWidth: "4px",
          borderTopWidth: "9px",
          borderBottomWidth: "9px",

          "&::after": {
            content: "''",
          }
        },

        //checkbox sizes
        "&.check-sm": {
          minWidth: "0.875rem",
          maxWidth: "0.875rem",
          minHeight: "0.875rem",
          maxHeight: "0.875rem",

          "&:checked": {
            borderWidth: "7px",
          },
        
          "&::after": { //my own checkbox :>
            top: "-6px",

            width: "0.875rem",
            height: "0.875rem",

            content: `url('data:image/svg+xml; utf8, <svg width="10" height="10" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            borderWidth: "3px",
            borderTopWidth: "6px",
            borderBottomWidth: "6px",
  
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-md": { //default size for checkbox
          minWidth: "1.25rem",
          maxWidth: "1.25rem",
          minHeight: "1.25rem",
          maxHeight: "1.25rem",

          "&:checked": {
            borderWidth: "10px",
          },
        
          "&::after": { //my own checkbox :>
            top: "-1px",

            height: "1.25rem",
            width: "1.25rem",

            content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            borderWidth: "4px",
            borderTopWidth: "9px",
            borderBottomWidth: "9px",

            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-lg": {
          minWidth: "1.625rem",
          maxWidth: "1.625rem",
          minHeight: "1.625rem",
          maxHeight: "1.625rem",

          "&:checked": {
            borderWidth: "13px",
          },
        
          "&::after": { //my own checkbox :>
            top: "4px",

            width: "1.625rem",
            height: "1.625rem",

            content: `url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            borderTopWidth: "11px",
            borderBottomWidth: "11px",
  
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-xl": {
          minWidth: "2rem",
          maxWidth: "2rem",
          minHeight: "2rem",
          maxHeight: "2rem",

          "&:checked": {
            borderWidth: "16px",
          },
        
          "&::after": { //my own checkbox :>
            top: "6px",

            width: "2rem",
            height: "2rem",

            content: `url('data:image/svg+xml; utf8, <svg width="22" height="22" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            borderTopWidth: "14px",
            borderBottomWidth: "14px",
  
            "&::after": {
              content: "''",
            }
          },
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
          flexDirection: "column",

          width: "0%",
          paddingTop: "0",
          paddingBottom: "0",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
        "&::before, &::after": { //the line itself
          flex: "1",
          backgroundColor: "rgba(0,0,0,0.05)",
          content: "''",
          borderRadius: "9999px",
          padding: "1px",				
        },
      },



      //drawer class
      ".drawer": {
        display: "flex",
        flexDirection: "row-reverse",
        height: "100vh",

        "& > .drawer-page-content": { //wrapper for the page content
          width: "100%",
          overflowY: "auto",
        },

        "& > .drawer-sidebar": { //sidebar wrapper
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          opacity: "0",
          visibility: "hidden",
          zIndex: "98",

          transition: `opacity 250ms ${ easeInOut }, visibility 250ms ${ easeInOut }`,

          "& > .drawer-sidebar-content": {  //wrapper for the sidebar content
            position: "absolute",
            left: "-23rem",
            width: "23rem",
            height: "100vh",
            zIndex: "1",
            transition: `left 250ms ${ easeInOut }`,

            "& > *": {
              height: "100%",
              overflowY: "auto",
              //commented also, not sure if i will let the user do it
              // dropShadow: "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))",
            },
          },
          
          "&.drawer-compact > .drawer-sidebar-content": { //compact drawer!
            width: "23rem",
          },
          
          "&.drawer-fullscreen > .drawer-sidebar-content": { //fullscreen drawer!
            width: "100vw",
          },

          "& > .drawer-overlay": { //the transparent background
            position: "absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            cursor: "pointer",
          },
        },

        "& > input[type='checkbox'].drawer-toggle": { //the checkbox toggle for drawer
          position: "absolute",
          top: "-2.5rem",

          "&:checked ~ .drawer-sidebar": {
            opacity: "1",
            visibility: "visible",

            "& > .drawer-sidebar-content": {
              left: "0%",
            },
          }
        },

        //opened drawer
        "&.drawer-open": { // forever opened drawer :>
          "& > .drawer-content": {
            width: "100%",
            overflowY: "auto",
          },
  
          "& > .drawer-sidebar": { //drawer sidebar opened
            position: "static",
            height: "100vh",
            borderRightWidth: "1px",
            opacity: "1",
            visibility: "visible",
            zIndex: "0",
  
            "& > .drawer-sidebar-content": { //drawer sdebar content fitted to its content
              position: "static",
              width: "21rem",
              height: "100vh",
              zIndex: "0",
            },
  
            "& > .drawer-overlay": {
              visibility: "hidden",
            },
          },
        },

        //all about .rail
        "& > .rail": {
          "& + .drawer-toggle + .drawer-page-content": { //when nav rail is exisiting on bottom of the page
            height: "calc(100vh - 5.125rem)",
          },
          
          //left rail
          "&.rail-left": { //when nav rail is exisiting on left of the page
            "& + .drawer-toggle + .drawer-page-content": { //reset the height of the drawer-page-content to its initial value
              height: "initial",
            },

            "& ~ .drawer-sidebar": {
              left: "5.875rem", //when nav rail is on the left, move drawer-sidebar slightly to the right
    
              "& > .drawer-sidebar-content": { //wrapper for the sidebar content
                left: "-23rem",
                width: "23rem"
              },

              "&.drawer-compact > .drawer-sidebar-content": { //compact drawer!
                width: "23rem",
              },

              "&.drawer-fullscreen > .drawer-sidebar-content": { //fullscreen drawer!
                width: "calc(100vw - 5.875rem)",
              },
    
              "& > .drawer-overlay": { //the transparent background
                width: "calc(100vw - 5.875rem)",
              },
            }
          },

          //the checkbox toggle directly under rail
          "& ~ input[type='checkbox'].drawer-toggle:checked ~ .drawer-sidebar > .drawer-sidebar-content": {
            left: "0%",
          },
        },
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
          "--tw-drop-shadow": "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))", //drop shadow came from tailwind css dropshadow-md
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



      //input class
      ".input": {
        minHeight: "3.25rem",
        maxHeight: "3.25rem",
        paddingLeft: "1.25rem",
        paddingRight: "1.25rem",
        borderRadius: "9999px",
        borderWidth: "2px",
        fontSize: "1rem !important",
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",

        "&:focus": {
          outline: `2px solid ${ color }`,
          outlineOffset: "2px",

          "&.input-underlined": { outline: "none" },
        },

        "&.input-outline": { borderColor: color },

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

        //input different sizes
        "&.input-sm": {
          minHeight: "2.5rem",
          maxHeight: "2.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          fontSize: "0.875rem !important",
        },

        "&.input-md": {
          minHeight: "3.25rem",
          maxHeight: "3.25rem",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
          fontSize: "1rem !important",
        },

        "&.input-lg": {
          minHeight: "3.75rem",
          maxHeight: "3.75rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          fontSize: "1.375rem !important",
        },

        "&.input-xl": {
          minHeight: "4.5rem",
          maxHeight: "4.5rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          fontSize: "1.5rem !important",
        },
        
        "&:disabled": { opacity: "70%", cursor: "not-allowed" },
      },



      //menu class
      //much more complicated than button
      ".menu": {
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        fontWeight: "bold",
        textTransform: "capitalize",

        "& > *": { fontSize: "1rem" },
        color: color,

        "&.menu-horizontal": { //horizontal menu
          flexDirection: "row",

          "& > li": {
            "& > details": { //collapsible list under menu
              position: "relative",

              "& > ul, ol": { //sub ul and/or ol under li element
                position: "absolute",
                top: "calc(100% + 8px)",
                left: "0",
                // paddingTop: "0.5rem",
                // paddingBottom: "0.5rem",
                // paddingRight: "0.5rem",
                // paddingLeft: "2.25rem",
                padding: "0.5rem",
                marginLeft: "0",
                borderRadius: "1.5rem",
                color: ShadeHexColor("#FFFFFF", LightOrDark("#FFFFFF") === 'light' ? shades[10] : shades[90]),
                backgroundColor: "#FFFFFF",
                "--tw-drop-shadow": "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))", //drop shadow came from tailwind css dropshadow-md
                filter: "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",

                "&::before": { //line on the left side of sub-ul
                  width: "0",
                },
              },
            }
          },
        },
        
        "&.menu-rail": { //menu for rail
          alignItems: "center",
          gap: "0.5rem",

          "& > li": {
            "& > a, label": { //list items under menu
              minHeight: "initial",
              maxHeight: "initial",
              minWidth: "4.5rem",
              maxWidth: "4.5rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              paddingLeft: "0",
              paddingRight: "0",
              display: "grid",
              gridAutoFlow: "row",
              gridAutoColumns: "auto auto",
              gap: "0",
              justifyItems: "center",
              borderRadius: "0",
              fontSize: "0.75rem",
              textAlign: "center",
              whiteSpace: "wrap",
              cursor: "pointer",
              "-webkit-user-select": "none",
              "-ms-user-select": "none",
              "user-select": "none",
    
              "&:hover": { background: "none" }, // overriding the hover style

              "& > :first-child": {
                width: "80%",
                borderRadius: "2rem",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
              },
    
              "&:hover > :first-child": { background: "rgba(0,0,0,0.05)" },
    
              "&:active": { background: "transparent" }, // overriding the active style
    
              "&:active > :first-child": { background: "rgba(0,0,0,0.1)" },
    
              "&.menu-active": { backgroundColor: "transparent", color: color }, // overriding the --active style
    
              "&.menu-active > :first-child": { backgroundColor: color, color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) },
            },
          },
        },

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

        "& li": {
          "& > ul, ol": { //sub ul and/or ol under li element
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginLeft: "1.25rem",
            paddingLeft: "1rem",
  
            "&::before": { //line on the left side of sub-ul
              position: "absolute",
              left: "0",
              top: "1.25rem",
              bottom: "1.25rem",
              content: "''",
              width: "2px",
              backgroundColor: "#EBEBEB",
            },
          },

          "& > a, label": { //list items under menu
            minHeight: "3.25rem",
            maxHeight: "3.25rem",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "max-content auto max-content",
            gap: "1rem",
            alignItems: "center",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
            cursor: "pointer",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
  
            "&:hover": { background: "rgba(0,0,0,0.05)" },
  
            "&:active": { background: "rgba(0,0,0,0.1)" },
  
            "&.menu-active": { backgroundColor: color, color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) },
          },

          "& > details": { //collapsible list under menu
            "& > ul, ol": { //sub ul and/or ol under li element
              position: "relative",
              display: "flex",
              flexDirection: "column",
              marginLeft: "1.25rem",
              paddingLeft: "1rem",
    
              "&::before": { //line on the left side of sub-ul
                position: "absolute",
                left: "0",
                top: "1.25rem",
                bottom: "1.25rem",
                content: "''",
                width: "2px",
                backgroundColor: "#EBEBEB",
              },
            },

            "& > summary": { //the summary tag
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
              listStyle: "none",
              "&::-webkit-details-marker": { display: "none" },
    
              "&:hover": { background: "rgba(0,0,0,0.05)" },
    
              "&:active": { background: "rgba(0,0,0,0.1)" },
            },

            //summary styled when details is open
            "&[open] > summary": { background: "rgba(0,0,0,0.1)" }
          }
        },

        //menu sizes
        "&.menu-sm": {
          "& .menu-title": { //menu title in almost all wrapper elements
            minHeight: "1.75rem",
            maxHeight: "1.75rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            fontSize: "0.75rem",
          },
          "& li": {
            "& > a, label": { //list items under menu
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
  
            "& > details": { //collapsible list under menu
              "& > summary": { //the summary tag
                gap: "0.25rem",
                minHeight: "2.5rem",
                maxHeight: "2.5rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                fontSize: "0.875rem",
                "& > *": {
                  fontSize: "1.375rem",
                },
              },
            }
          },
        },

        //menu sizes
        "&.menu-md": {
          "& .menu-title": { //menu title in almost all wrapper elements
            minHeight: "2.5rem",
            maxHeight: "2.5rem",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            fontSize: "0.875rem",
          },
          "& li": {
            "& > a, label": { //list items under menu
              gap: "1rem",
              minHeight: "3.25rem",
              maxHeight: "3.25rem",
              paddingLeft: "1.25rem",
              paddingRight: "1.25rem",
              fontSize: "1rem",
              "& > *": {
                fontSize: "1.5rem",
              },
            },
  
            "& > details": { //collapsible list under menu
              "& > summary": { //the summary tag
                gap: "1rem",
                minHeight: "3.25rem",
                maxHeight: "3.25rem",
                paddingLeft: "1.25rem",
                paddingRight: "1.25rem",
                fontSize: "1rem",
                "& > *": {
                  fontSize: "1.5rem",
                }
              },
            }
          },
        },
        
        "&.menu-lg": {
          "& .menu-title": { //menu title in almost all wrapper elements
            minHeight: "3.25rem",
            maxHeight: "3.25rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            fontSize: "1.25rem",
          },
          "& li": {
            "& > a, label": { //list items under menu
              minHeight: "3.75rem",
              maxHeight: "3.75rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              fontSize: "1.375rem",
              "& > *": {
                fontSize: "1.625rem",
              }
            },
  
            "& > details": { //collapsible list under menu
              "& > summary": { //the summary tag
                minHeight: "3.75rem",
                maxHeight: "3.75rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                fontSize: "1.375rem",
                "& > *": {
                  fontSize: "1.625rem",
                }
              },
            }
          },
        },
        
        "&.menu-xl": {
          "& .menu-title": { //menu title in almost all wrapper elements
            minHeight: "4rem",
            maxHeight: "4rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            fontSize: "1.375rem",
          },
          "& li": {
            "& > a, label": { //list items under menu
              minHeight: "4.5rem",
              maxHeight: "4.5rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              fontSize: "1.5rem",
              "& > *": {
                fontSize: "2rem",
              }
            },
  
            "& > details": { //collapsible list under menu
              "& > summary": { //the summary tag
                minHeight: "4.5rem",
                maxHeight: "4.5rem",
                paddingLeft: "2rem",
                paddingRight: "2rem",
                fontSize: "1.5rem",
                "& > *": {
                  fontSize: "2rem",
                }
              },
            }
          },
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
        zIndex: "100",

        "& > .modal-content": { //wrapper for the content
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          width:"100%",
          height:"100%",
          transition: `transform 125ms ${ easeInOut }`,
          transform: "scale(0.9, 0.9)",

          "& > .modal-backdrop": { //the transparent background
            position:"absolute",
            top:"0",
            left:"0",
            width:"100vw",
            height:"100vh",
            zIndex: "-1",
          }
        }
      },

      "input[type='checkbox'].modal-toggle": { //the one that will trigger modal opening
        position: "absolute",
        top: "-100px",
        "&:checked+.modal": { opacity: "1", visibility: "visible" },
        "&:checked+.modal > .modal-content": { transform: "scale(1, 1)" },
      },



      //navbar class
      ".navbar": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        position: "sticky",
        top: "0",
        padding: "0.25rem",
        width: "100%",
        minheight: "4.75rem",
        maxheight: "4.75rem",
        fontWeight: "bold",
        zIndex: "97",
      },

      //navbar item positions
      //I put these all outside so that hidden utility class is not overridden
      ".navbar-start": {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        justifyContent: "flex-start",
        order: "0",
      },
      
      ".navbar-center": {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        justifyContent: "center",
        order: "1",
      },
      
      ".navbar-end": {
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        justifyContent: "flex-end",
        order: "2",
      },



      //rail class
      ".rail": {
        display: "flex",
        flexDirection: "row",

        position: "absolute",
        bottom: "0",
        left: "0",
        
        width: "100vw",
        minHeight: "initial",
        maxHeight: "initial",
        padding: "0.25rem",
        
        backgroundColor: "#ffffff",
        order: "1",
        // zIndex: "1",
        
        "& > .rail-top > ul, ol > .menu.menu-rail": { //rail-top
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        },
        
        "& > .rail-main > ul, ol > .menu.menu-rail": { //rail-main
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        },
        
        "& > .rail-bottom > ul, ol > .menu.menu-rail": { //rail-top
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        },

        //bottom rail
        "&.rail-bottom": {
          flexDirection: "row",
  
          position: "absolute",
          bottom: "0",
          left: "0",
          
          width: "100vw",
          minHeight: "initial",
          maxHeight: "initial",
          padding: "0.25rem",
          zIndex: "0",

          "& > .rail-top > ul, ol > .menu.menu-rail": { //rail-top
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          },
          
          "& > .rail-main > ul, ol > .menu.menu-rail": { //rail-main
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          },
          
          "& > .rail-bottom > ul, ol > .menu.menu-rail": { //rail-top
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          },
        },

        //left rail
        "&.rail-left": {
          position: "static",
          width: "auto",
          flexDirection: "column",
          minHeight: "100vh",
          maxHeight: "100vh",
          zIndex: "99",

          ".rail-top": { //rail-top
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            "& > ul, ol > .menu.menu-rail": {
              width: "initial",
              flexDirection: "column",
              justifyContent: "normal",
            },
          },
          
          ".rail-main": { //rail-main
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            "& > ul, ol > .menu.menu-rail": {
              width: "initial",
              flexDirection: "column",
              justifyContent: "normal",
            },
          },
          
          ".rail-bottom": { //rail-bottom
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            "& > ul, ol > .menu.menu-rail": {
              width: "initial",
              flexDirection: "column",
              justifyContent: "normal",
            },
          },
        },
      },

      //I put this outside also, same reason for navbar-top, etc
      ".rail-top": { //rail-top
        display: "flex",
        flexDirection: "row",
        flexGrow: "0",
        flexBasis: "0",
        alignItems: "center",
        justifyContent: "flex-start",
        order: "0",
      },
      
      ".rail-main": { //rail-top
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        alignItems: "center",
        justifyContent: "flex-start",
        order: "1",
      },
      
      ".rail-bottom": { //rail-bottom
        display: "flex",
        flexDirection: "row",
        flexGrow: "1",
        flexBasis: "0",
        alignItems: "center",
        justifyContent: "flex-end",
        order: "2",
      },



      //radio class
      ".radio": {
        appearance: "none",
        "-webkit-appearance": "none",
        minWidth: "1.25rem",
        maxWidth: "1.25rem",
        minHeight: "1.25rem",
        maxHeight: "1.25rem",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderColor: "#C7C7C7",
        borderRadius: "100%",
        cursor: "pointer",
        transition: `border-width 75ms ${ easeInOut }, borderColor 75ms ${ easeInOut }`,
        "&:checked": {
          borderColor: color,
          borderWidth: "6px",
        },

        //radio sizes
        "&.radio-sm": {
          minWidth: "0.875rem",
          maxWidth: "0.875rem",
          minHeight: "0.875rem",
          maxHeight: "0.875rem",

          "&:checked": {
            borderWidth: "4px",
          },
        },

        "&.radio-md": {
        minWidth: "1.25rem",
        maxWidth: "1.25rem",
        minHeight: "1.25rem",
        maxHeight: "1.25rem",

          "&:checked": {
            borderWidth: "6px",
          },
        },

        "&.radio-lg": {
          minWidth: "1.625rem",
          maxWidth: "1.625rem",
          minHeight: "1.625rem",
          maxHeight: "1.625rem",

          "&:checked": {
            borderWidth: "8px",
          },
        },

        "&.radio-xl": {
          minWidth: "2rem",
          maxWidth: "2rem",
          minHeight: "2rem",
          maxHeight: "2rem",

          "&:checked": {
            borderWidth: "10px",
          },
        },

        "&:disabled": {//disabled radio
          backgroundColor: "#C7C7C7",
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:checked:disabled": {//checked and disabled radio
          backgroundColor: "transparent",
          opacity: "70%",
          cursor: "not-allowed",
        },
      },



      //swap class
      ".swap": {
        position: "relative",
        display: "inline-grid",
        justifyItems: "center",
        alignContent: "center",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
        cursor: "pointer",

        //all elements will position in 1,1
        "& > *": {
          gridColumnStart: "1",
          gridRowStart: "1",
          // transition: `opacity 75ms ${ easeInOut }`,
        },

        //swap with fade transition
        "&.swap-fade": {
          "& > *": {
            transition: `opacity 125ms ${ easeInOut }`,
          },
        },

        //swap with rotate and fade transition
        "&.swap-rotate": {
          "& > *": {
            transition: `opacity 125ms ${ easeInOut }, transform 125ms ${ easeInOut }`,
          },

          "& > input[type='checkbox']": {
            appearance: "none",
            "-webkit-appearance": "none",
          
            "& ~ .swap-on": {
              opacity: "0",
              transform: "rotate(-45deg)"
            },
            "& ~ .swap-off": {
              opacity: "1",
              transform: "rotate(0deg)"
            },
  
            "&:checked": {
              "& ~ .swap-on": {
                opacity: "1",
                transform: "rotate(0deg)"
              },
              "& ~ .swap-off": {
                opacity: "0",
                transform: "rotate(45deg)"
              },
            }
          },
        },

        "& > input[type='checkbox']": {
          appearance: "none",
          "-webkit-appearance": "none",
        
          "& ~ .swap-on": {
            opacity: "0",
          },
          "& ~ .swap-off": {
            opacity: "1",
          },

          "&:checked": {
            "& ~ .swap-on": {
              opacity: "1",
            },
            "& ~ .swap-off": {
              opacity: "0",
            },
          }
        },
      },



      //switch class
      ".switch": {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        appearance: "none",
        "-webkit-appearance": "none",
        minWidth: "2.25rem",
        maxWidth: "2.25rem",
        minHeight: "1.25rem",
        maxHeight: "1.25rem",
        borderColor: ShadeHexColor(color, shades[99]),
        backgroundColor: ShadeHexColor(color, shades[99]),
        borderRadius: "9999px",
        cursor: "pointer",
        transition: `background-color 150ms ${ easeInOut }`,

        "&::after": {
          content: "''",
          position: "absolute",
          top: "3px",
          left: "3px",
          minWidth: "0.875rem",
          maxWidth: "0.875rem",
          minHeight: "0.875rem",
          maxHeight: "0.875rem",
          borderRadius: "100%",
          backgroundColor: ShadeHexColor(color, shades[10]),
          transition: `left 150ms ${ easeInOut }, background-color 150ms ${ easeInOut }`,
        },

        "&:checked": {
          backgroundColor: color,

          "&::after": {
            backgroundColor: ShadeHexColor(color, shades[99]),
            left: "calc(100% - 0.875rem - 3px)",
          }
        },

        //checkbox sizes
        "&.switch-sm": {
          minWidth: "1.625rem",
          maxWidth: "1.625rem",
          minHeight: "0.875rem",
          maxHeight: "0.875rem",

          "&::after": {
            minHeight: "0.5rem",
            maxHeight: "0.5rem",
            minWidth: "0.5rem",
            maxWidth: "0.5rem",
          },

          "&:checked": {
            "&::after": {
              left: "calc(100% - 0.5rem - 3px)",
            }
          },

          "&:indeterminate": {//indeterminate switch
            "&::after": {
              left: "calc(50% - 0.5rem/2)",
            }
          },
        },

        "&.switch-md": {
          minWidth: "2.25rem",
          maxWidth: "2.25rem",
          minHeight: "1.25rem",
          maxHeight: "1.25rem",

          "&::after": {
            minWidth: "0.875rem",
            maxWidth: "0.875rem",
            minHeight: "0.875rem",
            maxHeight: "0.875rem",
          },

          "&:checked": {
            "&::after": {
              left: "calc(100% - 0.875rem - 3px)",
            }
          },

          "&:indeterminate": {//indeterminate switch
            "&::after": {
              left: "calc(50% - 1.625rem/2)",
            }
          },
        },

        "&.switch-lg": {
          minWidth: "2.7375rem",
          maxWidth: "2.7375rem",
          minHeight: "1.625rem",
          maxHeight: "1.625rem",

          "&::after": {
            minHeight: "1.25rem",
            maxHeight: "1.25rem",
            minWidth: "1.25rem",
            maxWidth: "1.25rem",
          },

          "&:checked": {
            "&::after": {
              left: "calc(100% - 1.25rem - 3px)",
            }
          },

          "&:indeterminate": {//indeterminate switch
            "&::after": {
              left: "calc(50% - 1.25rem/2)",
            }
          },
        },

        "&.switch-xl": {
          minWidth: "3.45rem",
          maxWidth: "3.45rem",
          minHeight: "2rem",
          maxHeight: "2rem",

          "&::after": {
            minHeight: "1.625rem",
            maxHeight: "1.625rem",
            minWidth: "1.625rem",
            maxWidth: "1.625rem",
          },

          "&:checked": {
            "&::after": {
              left: "calc(100% - 1.625rem - 3px)",
            }
          },

          "&:indeterminate": {//indeterminate switch
            "&::after": {
              left: "calc(50% - 1.625rem/2)",
            }
          },
        },

        "&:disabled": {//disabled switch
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:checked:disabled": {//checked and disabled switch
          opacity: "70%",
          cursor: "not-allowed",
        },

        "&:indeterminate": {//indeterminate switch
          "&::after": {
            left: "calc(50% - 0.875rem/2)",
          }
        },
      }
    }
  )
}

export default AddComponents