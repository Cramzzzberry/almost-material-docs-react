//this function returns an object that will be used on addComponents() plugin function of tailwind css
//some day, i will clean up some mess here and organize all styles so that it will be easier to read
//stucked between using js variable for some styles or using a hard-coded value, dunno if it will impact performance but
//will definetely impact code readability

import { ShadeHexColor, LightOrDark } from "./misc"

const AddComponents = (color, shades) => {
  const easeInOut = "cubic-bezier(0.4, 0, 0.2, 1)"
  const labelsColor = ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90])

  return (
    {
      //::root
      ":root": {
      },


      //badge class
      //i need to rework badge class
      ".badge": {
        //badge related variables
        "--badge-height": "1.25rem",
        "--badge-padding-x": "0.75rem",
        "--badge-font-size": "0.875rem",

        minHeight: "var(--badge-height)",
        maxHeight: "var(--badge-height)",
        paddingLeft: "var(--badge-padding-x)",
        paddingRight: "var(--badge-padding-x)",
        
        fontSize: "var(--badge-font-size) !important",
        lineHeight: "var(--badge-height)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        width: "fit-content",
        borderRadius: "9999px",
        borderWidth: "1px",

        fontWeight: "bold",
        textTransform: "capitalize",

        backgroundColor: "#000000",
        borderColor: "#000000",
        color: ShadeHexColor("#000000", shades[90]),

        "&.badge-outline": { //badge-outlined
          fontWeight: "normal",

          backgroundColor: "transparent",
          borderColor: "#000000",
          color: "#000000",
        },

        "&.badge-dot": { //badge-dot
          "--badge-dot-size": "0.875rem",

          minWidth: "var(--badge-dot-size)",
          maxWidth: "var(--badge-dot-size)",
          maxHeight: "var(--badge-dot-size)",
          minHeight: "var(--badge-dot-size)",

          padding: "0",
        },
  
        //sizes for badge
        "&.badge-sm": {
          "--badge-height": "1rem",
          "--badge-padding-x": "0.375rem",
          "--badge-font-size": "0.625rem",
        },

        "&.badge-md": { //default badge size
          "--badge-height": "1.25rem",
          "--badge-padding-x": "0.75rem",
          "--badge-font-size": "0.875rem",
        },
  
        "&.badge-lg": {
          "--badge-height": "1.5rem",
          "--badge-padding-x": "1.125rem",
          "--badge-font-size": "1.125rem",
        },
  
        "&.badge-xl": {
          "--badge-height": "1.75rem",
          "--badge-padding-x": "1.375rem",
          "--badge-font-size": "1.375rem",
        },
      },
  
  
  
      //btn class
      //this class is complicated for me, but all :active class does is display the style "when clicked"
      //I made the button height based on set max and min heights (instead of its own, like padding-based size), using this
      //method made all buttons uniformed, this is the same method used for input sizes
      ".btn": {
        "--btn-height": "3.25rem",
        "--btn-padding-x": "1.25rem",
        "--btn-gap": "0.5rem",
        "--btn-font-size": "1rem !important",
        "--btn-icon-size": "1.5rem !important",

        minHeight: "var(--btn-height)",
        maxHeight: "var(--btn-height)",
        paddingLeft: "var(--btn-padding-x)",
        paddingRight: "var(--btn-padding-x)",
        gap: "var(--btn-gap)",
        fontSize: "var(--btn-font-size)",
        "& > *": {
          fontSize: "var(--btn-icon-size)",
        },

        display: "flex",
        flexDirection: "row",
        alignItems: "center", 
        justifyContent: "center",
        cursor: "pointer",

        width: "fit-content",
        borderWidth: "1px",
        borderRadius: "9999px",

        fontWeight: "bold",
        textTransform: "capitalize",
        whiteSpace: "nowrap",

        backgroundColor: "#000000",
        borderColor: "#000000",
        color: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]),
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",

        "&:hover:not([disabled])": {
          backgroundColor: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.1 : 0.1),
          borderColor: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.1 : 0.1),
        },

        "&:active:not([disabled])": {
          backgroundColor: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.3 : 0.3),
          borderColor: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? -0.3 : 0.3),
        },
  
        "&.btn-outline": { //btn-outlined
          backgroundColor: "transparent",
          borderColor: "#C7C7C7",
          color: ShadeHexColor("#000000", shades[10]),

          "&:hover": {
            backgroundColor: "#000000",
            borderColor: "#000000",
            color: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]),
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
          color: ShadeHexColor("#000000", shades[10]),
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
            color: `${ ShadeHexColor("#000000", shades[10]) } !important`,
          },
        },
  
        "&.btn-circle": { //btn-circle
          "--btn-circle-size": "3.25rem",
          "--btn-font-size": "1.5rem !important",

          minHeight: "var(--btn-circle-size)",
          maxHeight: "var(--btn-circle-size)",
          minWidth: "var(--btn-circle-size)",
          maxWidth: "var(--btn-circle-size)",
          
          fontSize: "var(--btn-font-size)",
          "& > *": { fontSize: "var(--btn-font-size)" },

          borderRadius: "100%",
  
          //sizes for btn-circle
          "&.btn-sm": {
            "--btn-circle-size": "2.5rem",
            "--btn-font-size": "1.375rem !important",
          },

          "&.btn-md": { //default btn size
            "--btn-circle-size": "3.25rem",
            "--btn-font-size": "1.5rem !important",
          },

          "&.btn-lg": {
            "--btn-circle-size": "3.75rem",
            "--btn-font-size": "1.625rem !important",
          },

          "&.btn-xl": {
            "--btn-circle-size": "4.5rem",
            "--btn-font-size": "2rem !important",
          },
        },
  
        "&.btn-active": { //btn with active state
          backgroundColor: `${ "#000000" } !important`,
          borderColor: `${ "#000000" } !important`,
          color: `${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]) } !important`,
        },
  
        "&:disabled": { //disabled btn
          backgroundColor: "rgba(0,0,0,0.075)",
          borderColor: "transparent",
          color: ShadeHexColor("#000000", shades[10]),
          opacity: "70%",
          cursor: "not-allowed",
        },
  
        //sizes for different buttons except btn-circle
        "&.btn-sm": {
          "--btn-height": "2.5rem",
          "--btn-padding-x": "1rem",
          "--btn-gap": "0.25rem",
          "--btn-font-size": "0.875rem !important",
          "--btn-icon-size": "1.375rem !important",
        },

        "&.btn-md": {
          "--btn-height": "3.25rem",
          "--btn-padding-x": "1.25rem",
          "--btn-gap": "0.5rem",
          "--btn-font-size": "1rem !important",
          "--btn-icon-size": "1.5rem !important",
        },
  
        "&.btn-lg": {
          "--btn-height": "3.75rem",
          "--btn-padding-x": "1.5rem",
          "--btn-gap": "0.5rem",
          "--btn-font-size": "1.375rem !important",
          "--btn-icon-size": "1.625rem !important",
        },
  
        "&.btn-xl": {
          "--btn-height": "4.5rem",
          "--btn-padding-x": "2rem",
          "--btn-gap": "0.5rem",
          "--btn-font-size": "1.5rem !important",
          "--btn-icon-size": "2rem !important",
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
        "--checkbox-size": "1.25rem",
        "--checkbox-border-width-checked": "10px",
        "--check-top": "1px",
        "--check-size": "1.25rem",
        "--check-indeterminate-border-x": "4px",
        "--check-indeterminate-border-y": "9px",

        minWidth: "var(--checkbox-size)",
        maxWidth: "var(--checkbox-size)",
        minHeight: "var(--checkbox-size)",
        maxHeight: "var(--checkbox-size)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        cursor: "pointer",
        position: "relative",
        appearance: "none",
        "-webkit-appearance": "none",

        borderWidth: "2px",
        borderRadius: "4px",
        borderColor: "#C7C7C7",

        transition: `border-width 100ms ${ easeInOut }, border-color 100ms ${ easeInOut }`,

        "&:checked": {
          borderWidth: "var(--checkbox-border-width-checked)",
          borderColor: "#000000",

          "&::after": { opacity: "1" },
        },
        
        "&::after": { //my own check :>
          top: "var(--check-top)",
          height: "var(--check-size)",
          width: "var(--check-size)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          position: "relative",

          opacity: "0",
          content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
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
          borderWidth: "var(--check-indeterminate-border-x), var(--check-indeterminate-border-y)",
          backgroundColor: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]),
          borderColor: "#000000",

          "&::after": {
            content: "''",
          }
        },

        //checkbox sizes
        "&.check-sm": {
          "--checkbox-size": "0.875rem",
          "--checkbox-border-width-checked": "7px",
          "--check-top": "-1px",
          "--check-size": "0.875rem",
          "--check-indeterminate-border-x": "3px",
          "--check-indeterminate-border-y": "6px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="10" height="10" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-md": { //default size for checkbox
          "--checkbox-size": "1.25rem",
          "--checkbox-border-width-checked": "10px",
          "--check-top": "1px",
          "--check-size": "1.25rem",
          "--check-indeterminate-border-x": "4px",
          "--check-indeterminate-border-y": "9px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-lg": {
          "--checkbox-size": "1.625rem",
          "--checkbox-border-width-checked": "13px",
          "--check-top": "3px",
          "--check-size": "1.625rem",
          "--check-indeterminate-border-x": "4px",
          "--check-indeterminate-border-y": "11px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
            "&::after": {
              content: "''",
            }
          },
        },

        "&.check-xl": {
          "--checkbox-size": "2rem",
          "--checkbox-border-width-checked": "16px",
          "--check-top": "3px",
          "--check-size": "2rem",
          "--check-indeterminate-border-x": "4px",
          "--check-indeterminate-border-y": "14px",
        
          "&::after": { 
            content: `url('data:image/svg+xml; utf8, <svg width="22" height="22" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },

          "&:indeterminate": {//indeterminate checkbox
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
        "--input-height": "3.25rem",
        "--input-padding-x": "1.25rem",
        "--input-font-size": "1rem !important",
        
        minHeight: "var(--input-height)",
        maxHeight: "var(--input-height)",
        paddingLeft: "var(--input-padding-x)",
        paddingRight: "var(--input-padding-x)",
        fontSize: "var(--input-font-size)",

        borderRadius: "9999px",
        borderWidth: "2px",
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
          "--input-height": "2.5rem",
          "--input-padding-x": "1rem",
          "--input-font-size": "0.875rem !important",
        },

        "&.input-md": {
          "--input-height": "3.25rem",
          "--input-padding-x": "1.25rem",
          "--input-font-size": "1rem !important",
        },

        "&.input-lg": {
          "--input-height": "3.75rem",
          "--input-padding-x": "1.5rem",
          "--input-font-size": "1.375rem !important",
        },

        "&.input-xl": {
          "--input-height": "4.5rem",
          "--input-padding-x": "2rem",
          "--input-font-size": "1.5rem !important",
        },
        
        "&:disabled": { opacity: "70%", cursor: "not-allowed" },
      },



      //menu class
      //much more complicated than button
      ".menu": {
        "--menu-title-height": "2.5rem",
        "--menu-padding-x": "1.25rem",
        "--menu-title-font-size": "0.875rem",

        "--menu-list-item-gap": "1rem",
        "--menu-list-item-height": "3.25rem",
        "--menu-list-item-font-size": "1rem",
        "--menu-list-item-icon-size": "1.5rem",

        display: "flex",
        flexDirection: "column",
        padding: "0.5rem",
        fontWeight: "bold",
        textTransform: "capitalize",

        "& > *": { fontSize: "1rem" },
        color: labelsColor,

        "&.menu-horizontal": { //horizontal menu
          flexDirection: "row",

          "& > li": {
            "& > details": { //collapsible list under menu
              position: "relative",

              "& > ul, & > ol": { //sub ul and/or ol under li element
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
                color: labelsColor,
                backgroundColor: ShadeHexColor(color, shades[100]),
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
          minHeight: "var(--menu-title-height)",
          maxHeight: "var(--menu-title-height)",
          padding: "0 var(--menu-padding-x)",
          fontSize: "var(--menu-title-font-size)",

          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "#ABABAB",
        },

        "& li": {
          "& > ul, & > ol": { //sub ul and/or ol under li element
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

          "& > a, & > label": { //list items under menu
            gap: "var(--menu-list-item-gap)",
            minHeight: "var(--menu-list-item-height)",
            maxHeight: "var(--menu-list-item-height)",
            padding: "0 var(--menu-padding-x)",
            fontSize: "var(--menu-list-item-font-size)",

            "& > *": {
              fontSize: "var(--menu-list-item-icon-size)",
            },

            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "max-content auto max-content",
            alignItems: "center",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
            cursor: "pointer",
            "-webkit-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none",
  
            "&:hover": { background: "rgba(0,0,0,0.05)" },
  
            "&:active": { background: "rgba(0,0,0,0.1)" },
  
            "&.menu-active": { backgroundColor: "#000000", color: ShadeHexColor("#000000", LightOrDark("#000000") === 'light' ? shades[10] : shades[90]) },
          },

          "& > details": { //collapsible list under menu
            "& > ul, & > ol": { //sub ul and/or ol under li element
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
              gap: "var(--menu-list-item-gap)",
              minHeight: "var(--menu-list-item-height)",
              maxHeight: "var(--menu-list-item-height)",
              padding: "0 var(--menu-padding-x)",
              fontSize: "var(--menu-list-item-font-size)",
  
              "& > *": {
                fontSize: "var(--menu-list-item-icon-size)",
              },

              display: "flex",
              flexDirection: "row",
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
          "--menu-title-height": "1.75rem",
          "--menu-padding-x": "1rem",
          "--menu-title-font-size": "0.75rem",

          "--menu-list-item-gap": "0.25rem",
          "--menu-list-item-height": "2.5rem",
          "--menu-list-item-font-size": "0.875rem",
          "--menu-list-item-icon-size": "1.375rem",
        },

        //menu sizes
        "&.menu-md": {
          "--menu-title-height": "2.5rem",
          "--menu-padding-x": "1.25rem",
          "--menu-title-font-size": "0.875rem",

          "--menu-list-item-gap": "1rem",
          "--menu-list-item-height": "3.25rem",
          "--menu-list-item-font-size": "1rem",
          "--menu-list-item-icon-size": "1.5rem",
        },
        
        "&.menu-lg": {
          "--menu-title-height": "3.25rem",
          "--menu-padding-x": "1.5rem",
          "--menu-title-font-size": "1.25rem",

          "--menu-list-item-gap": "1rem",
          "--menu-list-item-height": "3.75rem",
          "--menu-list-item-font-size": "1.375rem",
          "--menu-list-item-icon-size": "1.625rem",
        },
        
        "&.menu-xl": {
          "--menu-title-height": "4rem",
          "--menu-padding-x": "2rem",
          "--menu-title-font-size": "1.375rem",

          "--menu-list-item-gap": "1rem",
          "--menu-list-item-height": "4.5rem",
          "--menu-list-item-font-size": "1.5rem",
          "--menu-list-item-icon-size": "2rem",
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



      //progress class
      ".progress": {
        "--max": "1",
        "--value": "0",
        "--progress-height": "8px",

        height: "var(--progress-height)",

        position: "relative",
        display: "inline-block",
        width: "256px",
        borderRadius: "9999px",
        backgroundColor: "#FFFFFF",

        "&::after": {
          height: "var(--progress-height)",

          content: "''",
          position: "absolute",
          width: "clamp(0%, calc((var(--value)/var(--max)) * 100%), 100%)", //clamping for minimum and maximun values
          borderRadius: "9999px",
          backgroundColor: "#000000",
        },

        "&.progress-sm": {
          "--progress-height": "4px",
        },

        "&.progress-md": {
          "--progress-height": "8px",
        },

        "&.progress-lg": {
          "--progress-height": "12px",
        },

        "&.progress-xl": {
          "--progress-height": "16px",
        },
      },



      //rail class
      ".rail": {
        display: "flex",
        padding: "0.25rem",
        flexDirection: "column",
        order: "1",
        alignItems: "flex-start",
        minWidth: "5rem",
        maxWidth: "5rem",

        transition: `padding 250ms ${ easeInOut }, min-width 250ms ${ easeInOut }, max-width 250ms ${ easeInOut }`,

        "& > div.rail-top > .menu, & > div.rail-middle > .menu, & > div.rail-bottom > .menu": {
          "--menu-padding-x": "1.5rem", //initial value for animation purposes
          "--menu-list-item-gap": "2rem", //initial value for animation purposes

          padding: "0.5rem 0",
          overflowX: "hidden",
          width: "100%",
  
          "& li": {
            width: "100%",
  
            "& > a, & > label": { //list items under menu
              transition: `gap 250ms ${ easeInOut }`,
            },
  
            "& > details": { //collapsible list under menu
              "& > summary": { //the summary tag
                transition: `gap 250ms ${ easeInOut }`,
              },
            }
          },
        },
      },

      ".rail-top": {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
      },

      ".rail-middle": {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
      },

      ".rail-bottom": {
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        flexBasis: "100%",
      },

      "input[type='checkbox'].rail-toggle": {
        position: "absolute",
        top: "-100px",
        "&:checked + .rail": {
          minWidth: "23rem",
          maxWidth: "23rem",
          padding: "0.25rem 0.5rem",

          "& > div.rail-top > .menu, & > div.rail-middle > .menu, & > div.rail-bottom > .menu": {
            "--menu-list-item-gap": "1.25rem", //
          }
        }
      },



      //radio class
      ".radio": {
        "--radio-size": "1.25rem",
        "--radio-border-width-checked": "6px",

        minWidth: "var(--radio-size)",
        maxWidth: "var(--radio-size)",
        minHeight: "var(--radio-size)",
        maxHeight: "var(--radio-size)",

        "&:checked": {
          borderWidth: "var(--radio-border-width-checked)",
          borderColor: "#000000",
        },

        appearance: "none",
        "-webkit-appearance": "none",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderWidth: "2px",
        borderColor: "#C7C7C7",
        borderRadius: "100%",
        cursor: "pointer",
        transition: `border-width 75ms ${ easeInOut }, borderColor 75ms ${ easeInOut }`,

        //radio sizes
        "&.radio-sm": {
          "--radio-size": "0.875rem",
          "--radio-border-width-checked": "4px",
        },

        "&.radio-md": {
          "--radio-size": "1.25rem",
          "--radio-border-width-checked": "6px",
        },

        "&.radio-lg": {
          "--radio-size": "1.625rem",
          "--radio-border-width-checked": "8px",
        },

        "&.radio-xl": {
          "--radio-size": "2rem",
          "--radio-border-width-checked": "10px",
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
        // justifyItems: "center",
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
        "--switch-width": "2.25rem",
        "--switch-height": "1.25rem",
        "--switch-circle-size": "0.875rem",

        minWidth: "var(--switch-width)",
        maxWidth: "var(--switch-width)",
        minHeight: "var(--switch-height)",
        maxHeight: "var(--switch-height)",

        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        appearance: "none",
        "-webkit-appearance": "none",
        backgroundColor: ShadeHexColor(color, shades[10]),
        borderRadius: "9999px",
        cursor: "pointer",
        transition: `background-color 150ms ${ easeInOut }`,

        "&::after": {
          minHeight: "var(--switch-circle-size)",
          maxHeight: "var(--switch-circle-size)",
          minWidth: "var(--switch-circle-size)",
          maxWidth: "var(--switch-circle-size)",

          content: "''",
          position: "absolute",
          top: "3px",
          left: "3px",
          borderRadius: "100%",
          backgroundColor: ShadeHexColor(color, LightOrDark(ShadeHexColor(color, shades[10])) === 'light' ? shades[10] : shades[95]),
          transition: `left 150ms ${ easeInOut }, background-color 150ms ${ easeInOut }`,
        },

        "&:checked": {
          backgroundColor: color,

          "&::after": {
            backgroundColor: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[95]),
            left: "calc(100% - var(--switch-circle-size) - 3px)",
          }
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
            left: "calc(50% - var(--switch-circle-size)/2)",
          }
        },

        //checkbox sizes
        "&.switch-sm": {
          "--switch-width": "1.625rem",
          "--switch-height": "0.875rem",
          "--switch-circle-size": "0.5rem",
        },

        "&.switch-md": {
          "--switch-width": "2.25rem",
          "--switch-height": "1.25rem",
          "--switch-circle-size": "0.875rem",
        },

        "&.switch-lg": {
          "--switch-width": "2.7375rem",
          "--switch-height": "1.625rem",
          "--switch-circle-size": "1.25rem",
        },

        "&.switch-xl": {
          "--switch-width": "3.45rem",
          "--switch-height": "2rem",
          "--switch-circle-size": "1.625rem",
        },
      }
    }
  )
}

export default AddComponents