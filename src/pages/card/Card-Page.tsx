import Block from "../../components/Special-Blocks"
import Page from "../../components/Component-Page"
import { CardSnippets } from "./Card-Snippets"

const getCards =  () => {
  const cardComponents = []
  const cardSnippets = Object.keys(CardSnippets)

  for(const key of cardSnippets) {
    cardComponents.push(
      <Block 
        key={ key }
        componentName={ key }
        preview={ CardSnippets[key].preview }
        htmlCode={ CardSnippets[key].htmlCode }
        jsxCode={ CardSnippets[key].jsxCode }
      />
    )
  }

  return cardComponents
}

const CardPage = () => {
  return (
    <Page 
      name="Card"
      desc="Used to contain a group of elements"
      components={ getCards() }
    />
  )
}

export default CardPage