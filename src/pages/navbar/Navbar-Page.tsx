import Block from "../../components/Special-Blocks"
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
      desc="Provides quick access to other pages/navigation points. It sits on top or at the bottom of the page"
      components={ getNavbars() }
    />
  )
}

export default NavbarPage