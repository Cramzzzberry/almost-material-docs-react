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
      desc="Blah blah here"
      components={ getCheckboxes() }
    />
  )
}

export default CheckboxPage