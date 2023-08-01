import Block from "../../components/Special-Blocks"
import Page from "../../components/Component-Page"
import { DrawerSnippets } from "./Drawer-Snippets"

const getDrawers =  () => {
  const drawerComponents = []
  const drawerSnippets = Object.keys(DrawerSnippets)

  for(const key of drawerSnippets) {
    drawerComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ DrawerSnippets[key].preview }
        htmlCode={ DrawerSnippets[key].htmlCode }
        jsxCode={ DrawerSnippets[key].jsxCode } />
    )
  }

  return drawerComponents
}

const drawerPage = () => {
  return (
    <Page 
      name="Navigation Drawer"
      desc="Used to access different pages that slides from the side"
      components={ getDrawers() }
    />
  )
}

export default drawerPage