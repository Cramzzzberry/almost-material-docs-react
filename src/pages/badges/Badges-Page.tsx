import BadgeBlock from "./Badge-Block"
import { BadgeSnippets } from "./Badge-Snippets"

const getBadges =  () => {
  const badgeComponents = []
  const badgeSnippets = Object.keys(BadgeSnippets)

  for(const key of badgeSnippets) {
    badgeComponents.push(
      <BadgeBlock
        key={ key }
        type={ key }
        preview={ BadgeSnippets[key].preview }
        htmlCode={ BadgeSnippets[key].htmlCode }
        jsxCode={ BadgeSnippets[key].jsxCode } />
    )
  }

  return badgeComponents
}

const BadgesPage = () => {
  return (
    <>
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="card card-primary80 p-32 mb-4">
          <h1 className="font-bold">Badges</h1>
          <h4>Blah blah here</h4>
        </div>
        { getBadges() }
      </div>
    </div>
    </>
  )
}

export default BadgesPage