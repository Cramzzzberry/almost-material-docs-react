import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { DividerSnippets } from "./Divider-Snippets"

const getDividers =  () => {
  const dividerComponents = []
  const dividerSnippets = Object.keys(DividerSnippets)

  for(const key of dividerSnippets) {
    dividerComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ DividerSnippets[key].preview }
        htmlCode={ DividerSnippets[key].htmlCode }
        jsxCode={ DividerSnippets[key].jsxCode } />
    )
  }

  return dividerComponents
}

const DividerPage = () => {
  return (
    <Page 
      name="Divider"
      desc="Blah blah here"
      components={ getDividers() }
    />
  )
}

export default DividerPage