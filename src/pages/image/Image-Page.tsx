import Block from "../../components/Special-Blocks"
import Page from "../../components/Component-Page"
import { ImageSnippets } from "./Image-Snippets"

const getImages =  () => {
  const imageComponents = []
  const imageSnippets = Object.keys(ImageSnippets)

  for(const key of imageSnippets) {
    imageComponents.push(
      <Block
        key={ key }
        componentName={ key }
        preview={ ImageSnippets[key].preview }
        htmlCode={ ImageSnippets[key].htmlCode }
        jsxCode={ ImageSnippets[key].jsxCode } />
    )
  }

  return imageComponents
}

const ImagePage = () => {
  return (
    <Page 
      name="Image Container"
      desc="Used for containing images, the images are centered and cropped depending on the given size"
      components={ getImages() }
    />
  )
}

export default ImagePage