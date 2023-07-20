//this function returns an object that will be used on matchComponents() plugin function of tailwind css
//some day, i will also clean up some mess here and organize all styles so that it will be easier to read
//also stucked between using js variable for some styles or using a hard-coded value, dunno if it will impact performance but
//will definetely impact code readability

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
          maxHeight: "0.875rem",
          minHeight: "0.875rem",
          minWidth: "0.875rem",
          maxWidth: "0.875rem",
          padding: "0",
          backgroundColor: color,
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
  
          "&.btn-active": { //btn-ghost btn-active
            color: `${ color } !important`,
          },
        },
  
        "&.btn-active": { //btn with active state
          backgroundColor: `${ color } !important`,
          borderColor: `${ color } !important`,
          color: `${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) } !important`,
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
      "check": (color) =>  ({
        "&:checked": {
          borderColor: color,
        },
        
        "&::after": { //my own checkbox :>
          content: `url('data:image/svg+xml; utf8, <svg width="14" height="14" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
        },

        //checkbox sizes
        "&.check-sm": {
          "&::after": {
            content: `url('data:image/svg+xml; utf8, <svg width="10" height="10" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },

        "&.check-lg": {
          "&::after": {
            content: `url('data:image/svg+xml; utf8, <svg width="18" height="18" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },

        "&.check-xl": {
          "&::after": {
            content: `url('data:image/svg+xml; utf8, <svg width="22" height="22" viewBox="0 0 172 139" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="172" height="139" fill="none"/><rect x="19.6274" y="63" width="80" height="32" rx="8" transform="rotate(45 19.6274 63)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/><rect x="31" y="119.279" width="172" height="32" rx="8" transform="rotate(-45 31 119.279)" fill="${ ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]).replace("#", "%23") }"/></svg>')`,
          },
        },
      }),



      //divider class
      "divider": (color) => ({
        "&::before, &::after": {
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

        "&.input-outline": {
          borderColor: color,
        },

        "&.input-underlined": {
          backgroundColor: "transparent",
          borderColor: color,
        },
      }),



      //menu class
      "menu": (color) => ({
        color: ShadeHexColor(color, shades[10]),

        //horizontal menu
        "&.menu.menu-horizontal > li > details > ul, &.menu.menu-horizontal > li > details > ol": { //sub ul and/or ol under li element
          color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]),
        },
        
        //all about rail
        "&.menu.menu-rail > li > a, &.menu.menu-rail > li > label": { //list items under menu
          "&.menu-active": { backgroundColor: "transparent" }, // overriding the --active style
          "&.menu-active > :first-child": { backgroundColor: color, color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) },
        },

        "&.menu li > a, &.menu li > label": { //list items under menu
          "&.menu-active": { backgroundColor: color, color: ShadeHexColor(color, LightOrDark(color) === 'light' ? shades[10] : shades[90]) },
        },
      }),



      //radio class
      "radio": (color) => ({
        "&:checked": {
          borderColor: color,
        },
      }),



      //switch class
      "switch": (color) => ({
        borderColor: ShadeHexColor(color, shades[99]),
        backgroundColor: ShadeHexColor(color, shades[99]),

        "&::after": {
          backgroundColor: ShadeHexColor(color, shades[10]),
        },

        "&:checked": {
          backgroundColor: color,

          "&::after": {
            backgroundColor: ShadeHexColor(color, shades[99]),
          }
        },
      })
    }
  )
}

export default MatchComponents