import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { NavbarSnippets } from "./Navbar-Snippets"

const getNavbars =  () => {
  const navbarComponents = []
  const navbarSnippets = Object.keys(NavbarSnippets)

  for(const key of navbarSnippets) {
    navbarComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ NavbarSnippets[key].preview }
        htmlCode={ NavbarSnippets[key].htmlCode }
        jsxCode={ NavbarSnippets[key].jsxCode } />
    )
  }

  return navbarComponents
}

const NavbarPage = () => {
  return (
    <Page 
      name="Navigation Bar"
      desc="Blah blah here"
      components={ getNavbars() }
    />
  )
}

export default NavbarPage