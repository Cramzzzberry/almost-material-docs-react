import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { ProgressbarSnippets } from "./Progressbar-Snippets"

const getProgressbars =  () => {
  const progressbarComponents = []
  const progressbarSnippets = Object.keys(ProgressbarSnippets)

  for(const key of progressbarSnippets) {
    progressbarComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ ProgressbarSnippets[key].preview }
        htmlCode={ ProgressbarSnippets[key].htmlCode }
        jsxCode={ ProgressbarSnippets[key].jsxCode } />
    )
  }

  return progressbarComponents
}

const ProgressbarPage = () => {
  return (
    <Page 
      name="Progress Bar"
      desc="Blah blah here"
      components={ getProgressbars() }
    />
  )
}

export default ProgressbarPage