import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { SwitchSnippets } from "./Switch-Snippets"

const getSwitches =  () => {
  const switchComponents = []
  const switchSnippets = Object.keys(SwitchSnippets)

  for(const key of switchSnippets) {
    switchComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ SwitchSnippets[key].preview }
        htmlCode={ SwitchSnippets[key].htmlCode }
        jsxCode={ SwitchSnippets[key].jsxCode } />
    )
  }

  return switchComponents
}

const SwitchPage = () => {
  return (
    <Page 
      name="Switch"
      desc="Blah blah here"
      components={ getSwitches() }
    />
  )
}

export default SwitchPage