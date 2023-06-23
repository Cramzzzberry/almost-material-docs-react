import Button from "./Button"
import { ButtonSnippets } from './Button-Snippets'

const getButtons =  () => { //get the button snippets keys and then push it inside an array returning an array of objects(react component)
  const buttonComponents = []
  const buttonSnippets = Object.keys(ButtonSnippets)

  for(const key of buttonSnippets){
    buttonComponents.push(<Button key={ key } type={ key } />)
  }

  return buttonComponents
}

const ButtonsPage = () => {
  return (
    <>
    <div className="card card-secondary p-32 mb-4">
      <h1 className="font-bold">Buttons</h1>
      <h4>It allows the user to take actions</h4>
    </div>

    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        { getButtons() }
      </div>
    </div>
    </>
  )
}

export default ButtonsPage