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
  
        //sizes for badge
        "&.badge-sm": { paddingLeft: "0.5rem", paddingRight: "0.5rem", fontSize: "0.75rem" },
  
        "&.badge-lg": { paddingLeft: "1rem", paddingRight: "1rem", fontSize: "1.375rem" },
      },
  
  
  
      //btn class
      //this class is complicated for me, but all :active class does is display the style "when clicked"
      //I made the button height based on set max and min heights (instead of its own, like padding-based size), using this
      //method made all buttons uniformed, this is the same method used for input sizes
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
        fontWeight: "bold",
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
  
          //sizes for btn-circle
          "&.btn-sm": {
            minHeight: "2.5rem",
            maxHeight: "2.5rem",
            minWidth: "2.5rem",
            maxWidth: "2.5rem",
            fontSize: "1.375rem",
            "& > *": { fontSize: "1.375rem" }
          },

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
  
        //sizes for different buttons except btn-circle
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

          "& > figure": { //image inside card body, it will look like the image has frame
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
  
        "& > figure": { //no frame image
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
        position: "relative",
        display: "flex",
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
        borderRadius: "4px",
        cursor: "pointer",
        transition: `border-width 100ms ${ easeInOut }, border-color 100ms ${ easeInOut }`,
        "&:checked": {
          borderColor: color,
          borderWidth: "10px",

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

        //checkbox sizes
        "&.checkbox-sm": {
          minWidth: "0.875rem",
          maxWidth: "0.875rem",
          minHeight: "0.875rem",
          maxHeight: "0.875rem",

          "&:checked": {
            borderWidth: "7px",
          },
        
          "&::after": { //my own checkbox :>
            top: "-6px",
            height: "0.875rem",
            width: "0.875rem",
            content: `url('data:image/svg+xml; utf8, <svg width="10" height="10" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },

        "&.checkbox-lg": {
          minWidth: "1.625rem",
          maxWidth: "1.625rem",
          minHeight: "1.625rem",
          maxHeight: "1.625rem",

          "&:checked": {
            borderWidth: "13px",
          },
        
          "&::after": { //my own checkbox :>
            top: "4px",
            height: "1.625rem",
            width: "1.625rem",
            content: `url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },

        "&.checkbox-xl": {
          minWidth: "2rem",
          maxWidth: "2rem",
          minHeight: "2rem",
          maxHeight: "2rem",

          "&:checked": {
            borderWidth: "16px",
          },
        
          "&::after": { //my own checkbox :>
            top: "6px",
            height: "2rem",
            width: "2rem",
            content: `url('data:image/svg+xml; utf8, <svg width="22" height="22" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
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
          width: "0%",
          flexDirection: "column",
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

        //input different sizes
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



      //menu class
      ".menu": {
        textTransform: "capitalize",
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        fontWeight: "bold",
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

          "& > a": { //list items under menu
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
            // width: "100%", //commented because it is unnecessary
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
            "& > a": { //list items under menu
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
            "& > a": { //list items under menu
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
            fontSize: "1.125rem",
          },
          "& li": {
            "& > a": { //list items under menu
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
        zIndex: "9999",

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



      //navdrawer class
      ".navdrawer": {
        display: "flex",
        flexDirection: "row-reverse",
        height: "100vh",

        "& > .navdrawer-page-content": { //wrapper for the page content
          overflowY: "auto",
          width: "100%",
        },

        "& > .navdrawer-sidebar": {
          position: "absolute",
          top: "0",
          left: "0",
          // borderRightWidth: "1px", //commented, not sure if i will use it for opened drawer or i will let the user do this by using border-r
          height: "100vh",
          opacity: "0",
          visibility: "hidden",
          transition: `opacity 250ms ${ easeInOut }, visibility 250ms ${ easeInOut }`,

          "& > .navdrawer-sidebar-content": {  //wrapper for the sidebar content
            position: "absolute",
            height: "100vh",
            left: "-23rem",
            width: "23rem",
            zIndex: "1",
            transition: `left 250ms ${ easeInOut }`,

            "& > *": {
              height: "100%",
              overflowY: "auto",
              backgroundColor: "#FFFFFF",
              // dropShadow: "drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))", //commented also, not sure if i will let the user do it
            },
          },

          "& > .navdrawer-overlay": { //the transparent background
            "position":"absolute",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            cursor: "pointer",
          },
        },

        "& > input[type='checkbox'].navdrawer-toggle": { //the drawer....triggerer xD
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

        "&.navdrawer-open": { // forever opened drawer :>
          "& > .navdrawer-content": {
            overflowY: "auto",
            width: "100%",
          },
  
          "& > .navdrawer-sidebar": {
            position: "static",
            borderRightWidth: "1px",
            height: "100vh",
            opacity: "1",
            visibility: "visible",
  
            "& > .navdrawer-sidebar-content": { 
              position: "static",
              height: "100vh",
              width: "21rem",
              zIndex: "0",
            },
  
            "& > .navdrawer-overlay": {
              visibility: "hidden",
            },
          },
        },
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
        transition: `background-color 125ms ${ easeInOut }`,

        "&::after": {
          content: "''",
          position: "absolute",
          top: "3px",
          left: "3px",
          minHeight: "0.875rem",
          maxHeight: "0.875rem",
          minWidth: "0.875rem",
          maxWidth: "0.875rem",
          borderRadius: "100%",
          backgroundColor: ShadeHexColor(color, shades[10]),
          transition: `left 125ms ${ easeInOut }, background-color 125ms ${ easeInOut }`,
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
        },
      }
    }
  )
}

export default AddComponents