import CardBlock from "./Card-Block"
import { CardSnippets } from "./Card-Snippets"

const getCards =  () => {
  const badgeComponents = []
  const badgeSnippets = Object.keys(CardSnippets)

  for(const key of badgeSnippets) {
    badgeComponents.push(
      <CardBlock
        key={ key }
        type={ key }
        preview={ CardSnippets[key].preview }
        htmlCode={ CardSnippets[key].htmlCode }
        jsxCode={ CardSnippets[key].jsxCode } />
    )
  }

  return badgeComponents
}

const CardsPage = () => {
  return (
    <>
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="card-secondary80 p-32 mb-4">
          <h1 className="font-bold">Cards</h1>
          <h4>Used to contain a group of related elements</h4>
        </div>
        { getCards() }
      </div>
    </div>
    </>
  )
}

export default CardsPage