import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { IndicatorSnippets } from "./Indicator-Snippets"

const getIndicators =  () => {
  const indicatorComponents = []
  const indicatorSnippets = Object.keys(IndicatorSnippets)

  for(const key of indicatorSnippets) {
    indicatorComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ IndicatorSnippets[key].preview }
        htmlCode={ IndicatorSnippets[key].htmlCode }
        jsxCode={ IndicatorSnippets[key].jsxCode } />
    )
  }

  return indicatorComponents
}

const indicatorPage = () => {
  return (
    <Page 
      name="Indicator"
      desc="It positions an element to an indicator state"
      components={ getIndicators() }
    />
  )
}

export default indicatorPage