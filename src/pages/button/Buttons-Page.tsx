import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { ButtonSnippets } from './Button-Snippets'

const getButtons =  () => { //get the button snippets keys and then push it inside an array returning an array of objects(react component)
  const buttonComponents = []
  const buttonSnippets = Object.keys(ButtonSnippets)

  for(const key of buttonSnippets) {
    buttonComponents.push(
      <Block
        key={ key } //just a uniue key
        componentName={ key } //type of button
        preview={ ButtonSnippets[key].preview } //displays the button itself
        htmlCode={ ButtonSnippets[key].htmlCode } //html code snippet of the button
        jsxCode={ ButtonSnippets[key].jsxCode } //jsx equivalent of the button
      />
    )
  }

  return buttonComponents
}

const ButtonsPage = () => {
  return (
    <Page 
      name="Buttons"
      desc="It allows the user to take actions"
      components={ getButtons() }
    />
  )
}

export default ButtonsPage