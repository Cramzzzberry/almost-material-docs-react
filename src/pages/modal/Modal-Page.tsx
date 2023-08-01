import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { ModalSnippets } from "./Modal-Snippets"

const getModals =  () => {
  const modalComponents = []
  const modalSnippets = Object.keys(ModalSnippets)

  for(const key of modalSnippets) {
    modalComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ ModalSnippets[key].preview }
        htmlCode={ ModalSnippets[key].htmlCode }
        jsxCode={ ModalSnippets[key].jsxCode } />
    )
  }

  return modalComponents
}

const ModalPage = () => {
  return (
    <Page 
      name="Modal"
      desc="A pop up window that disables other interactions except itself"
      components={ getModals() }
    />
  )
}

export default ModalPage