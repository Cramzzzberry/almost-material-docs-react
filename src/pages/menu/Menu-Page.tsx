import Block from "../../components/Special-Blocks"
import Page from "../../components/Component-Page"
import { MenuSnippets } from "./Menu-Snippets"

const getMenus =  () => {
  const menuComponents = []
  const menuSnippets = Object.keys(MenuSnippets)

  for(const key of menuSnippets) {
    menuComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ MenuSnippets[key].preview }
        htmlCode={ MenuSnippets[key].htmlCode }
        jsxCode={ MenuSnippets[key].jsxCode } />
    )
  }

  return menuComponents
}

const MenuPage = () => {
  return (
    <Page 
      name="Menu"
      desc="Blah blah here"
      components={ getMenus() }
    />
  )
}

export default MenuPage