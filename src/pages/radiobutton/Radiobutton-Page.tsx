import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { RadiobuttonSnippets } from "./Radiobutton-Snippets"

const getRadiobuttons =  () => {
  const radiobuttonComponents = []
  const radiobuttonSnippets = Object.keys(RadiobuttonSnippets)

  for(const key of radiobuttonSnippets) {
    radiobuttonComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ RadiobuttonSnippets[key].preview }
        htmlCode={ RadiobuttonSnippets[key].htmlCode }
        jsxCode={ RadiobuttonSnippets[key].jsxCode } />
    )
  }

  return radiobuttonComponents
}

const RadiobuttonPage = () => {
  return (
    <Page 
      name="Radio Button"
      desc="Denotes the current state of an element and used for single choice"
      components={ getRadiobuttons() }
    />
  )
}

export default RadiobuttonPage