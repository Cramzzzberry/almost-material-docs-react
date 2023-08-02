import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { CheckboxSnippets } from "./Checkbox-Snippets"

const getCheckboxes =  () => {
  const checkboxComponents = []
  const checkboxSnippets = Object.keys(CheckboxSnippets)

  for(const key of checkboxSnippets) {
    checkboxComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ CheckboxSnippets[key].preview }
        htmlCode={ CheckboxSnippets[key].htmlCode }
        jsxCode={ CheckboxSnippets[key].jsxCode } />
    )
  }

  return checkboxComponents
}

const CheckboxPage = () => {
  return (
    <Page 
      name="Checkbox"
      desc="Denotes the current state of an element and used for multiple choices"
      components={ getCheckboxes() }
    />
  )
}

export default CheckboxPage