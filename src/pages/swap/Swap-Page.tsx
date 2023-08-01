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
      desc="Swaps two elements to represent states in more detail"
      components={ getSwaps() }
    />
  )
}

export default SwapPage