import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { InputFieldSnippets } from "./Input-Field-Snippets"

const getinputFields =  () => {
  const inputFieldComponents = []
  const inputFieldSnippets = Object.keys(InputFieldSnippets)

  for(const key of inputFieldSnippets) {
    inputFieldComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ InputFieldSnippets[key].preview }
        htmlCode={ InputFieldSnippets[key].htmlCode }
        jsxCode={ InputFieldSnippets[key].jsxCode } />
    )
  }

  return inputFieldComponents
}

const InputFieldPage = () => {
  return (
    <Page 
      name="Input Fields"
      desc="Provides access to respond via text and/or other means of responses"
      components={ getinputFields() }
    />
  )
}

export default InputFieldPage