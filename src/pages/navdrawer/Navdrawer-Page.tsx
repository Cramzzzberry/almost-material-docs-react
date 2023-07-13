import Block from "../../components/Special-Blocks"
import Page from "../../components/Component-Page"
import { NavdrawerSnippets } from "./Navdrawer-Snippets"

const getNavdrawers =  () => {
  const navdrawerComponents = []
  const navdrawerSnippets = Object.keys(NavdrawerSnippets)

  for(const key of navdrawerSnippets) {
    navdrawerComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ NavdrawerSnippets[key].preview }
        htmlCode={ NavdrawerSnippets[key].htmlCode }
        jsxCode={ NavdrawerSnippets[key].jsxCode } />
    )
  }

  return navdrawerComponents
}

const NavdrawerPage = () => {
  return (
    <Page 
      name="Navigation Drawer"
      desc="Blah blah here"
      components={ getNavdrawers() }
    />
  )
}

export default NavdrawerPage