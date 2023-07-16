import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { CheckboxSnippets } from "./Checkbox-Snippets"

import useScript from "../../components/Use-Script"

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
  useScript("/src/pages/checkbox/script.js")

  return (
    <Page 
      name="Checkbox"
      desc="Blah blah here"
      components={ getCheckboxes() }
    />
  )
}

export default CheckboxPage