import ButtonBlock from "./Button-Block"
import { ButtonSnippets } from './Button-Snippets'

const getButtons =  () => { //get the button snippets keys and then push it inside an array returning an array of objects(react component)
  const buttonComponents = []
  const buttonSnippets = Object.keys(ButtonSnippets)

  for(const key of buttonSnippets) {
    buttonComponents.push(
      <ButtonBlock
        key={ key } //just a uniue key
        type={ key } //type of button
        preview={ ButtonSnippets[key].preview } //displays the button itself
        htmlCode={ ButtonSnippets[key].htmlCode } //html code snippet of the button
        jsxCode={ ButtonSnippets[key].jsxCode } /> //the jsx equivalent of the html snippet
    )
  }

  return buttonComponents
}

const ButtonsPage = () => {
  return (
    <>
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="card-secondary80 p-32 mb-4">
          <h1 className="font-bold">Buttons</h1>
          <h4>It allows the user to take actions</h4>
        </div>
        { getButtons() }
      </div>
    </div>
    </>
  )
}

export default ButtonsPage