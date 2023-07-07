import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { BadgeSnippets } from "./Badge-Snippets"

const getBadges =  () => {
  const badgeComponents = []
  const badgeSnippets = Object.keys(BadgeSnippets)

  for(const key of badgeSnippets) {
    badgeComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ BadgeSnippets[key].preview }
        htmlCode={ BadgeSnippets[key].htmlCode }
        jsxCode={ BadgeSnippets[key].jsxCode } />
    )
  }

  return badgeComponents
}

const BadgePage = () => {
  return (
    <Page 
      name="Badge"
      desc="Blah blah here"
      components={ getBadges() }
    />
  )
}

export default BadgePage