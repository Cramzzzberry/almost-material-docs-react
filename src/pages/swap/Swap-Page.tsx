import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { SwapSnippets } from "./Swap-Snippets"

const getSwaps =  () => {
  const swapComponents = []
  const swapSnippets = Object.keys(SwapSnippets)

  for(const key of swapSnippets) {
    swapComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ SwapSnippets[key].preview }
        htmlCode={ SwapSnippets[key].htmlCode }
        jsxCode={ SwapSnippets[key].jsxCode } />
    )
  }

  return swapComponents
}

const SwapPage = () => {
  return (
    <Page 
      name="Swap"
      desc="Blah blah here"
      components={ getSwaps() }
    />
  )
}

export default SwapPage