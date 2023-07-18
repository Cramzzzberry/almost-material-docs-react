import Block from "../../components/Special-Blocks"
import Page from "../../components/Component-Page"
import { RailSnippets } from "./Rail-Snippets"

const getRails =  () => {
  const railComponents = []
  const railSnippets = Object.keys(RailSnippets)

  for(const key of railSnippets) {
    railComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ RailSnippets[key].preview }
        htmlCode={ RailSnippets[key].htmlCode }
        jsxCode={ RailSnippets[key].jsxCode } />
    )
  }

  return railComponents
}

const RailPage = () => {
  return (
    <Page 
      name="Navigation Rail"
      desc="Blah blah here"
      components={ getRails() }
    />
  )
}

export default RailPage