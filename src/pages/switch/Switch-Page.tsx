import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { SwitchSnippets } from "./Switch-Snippets"

import useScript from "../../components/Use-Script"

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
  useScript("/src/pages/switch/script.js")

  return (
    <Page 
      name="Switch"
      desc="A toggle used for on and off purposes"
      components={ getSwitches() }
    />
  )
}

export default SwitchPage