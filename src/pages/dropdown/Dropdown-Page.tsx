import Block from "../../components/Special-Blocks"
import Page from "../../components/Component-Page"
import { DropdownSnippets } from "./Dropdown-Snippets"

const getDropdowns =  () => {
  const dropdownComponents = []
  const dropdownSnippets = Object.keys(DropdownSnippets)

  for(const key of dropdownSnippets) {
    dropdownComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ DropdownSnippets[key].preview }
        htmlCode={ DropdownSnippets[key].htmlCode }
        jsxCode={ DropdownSnippets[key].jsxCode } />
    )
  }

  return dropdownComponents
}

const DropdownPage = () => {
  return (
    <Page 
      name="Dropdown Menu"
      desc="Gives user/s a list of contents, choices or navigation points that floats around the interactable element"
      components={ getDropdowns() }
    />
  )
}

export default DropdownPage