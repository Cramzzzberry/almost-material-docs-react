import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Block = ({preview, htmlCode, jsxCode, componentName}) => {
  const tabContent = {
    "preview": (
      <div className="card min-h-[100px] my-2 p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        { preview }
      </div>
    ),
    "html": (
      <SyntaxHighlighter className="card !min-h-[100px] !flex !items-center" language="cshtml" style={ darcula }>
        { htmlCode }
      </SyntaxHighlighter>
    ),
    "jsx": (
      <SyntaxHighlighter className="card !min-h-[100px] !flex !items-center" language="jsx" style={ darcula }>
        { jsxCode }
      </SyntaxHighlighter>
    ),
  }
  const [previewActive, setPreviewActive] = useState("btn-active")
  const [htmlActive, setHtmlActive] = useState("btn-ghost")
  const [jsxActive, setJsxActive] = useState("btn-ghost")
  const [secondBlock, setSecondBlock] = useState(tabContent["preview"])

  const tabHandler = (activeTab) => {
    setPreviewActive(activeTab === "preview" ? "btn-active" : "btn-ghost")
    setHtmlActive(activeTab === "html" ? "btn-active" : "btn-ghost")
    setJsxActive(activeTab === "jsx" ? "btn-active" : "btn-ghost")
    setSecondBlock(tabContent[activeTab])
  }

  return (
    <>
    <div className="flex flex-col">
      {/* first block */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <h4 className="font-semibold">{ componentName }</h4>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <button className={"btn btn-sm " + previewActive}
            onClick={ () => tabHandler("preview") }
            >Preview</button>
          <button className={"btn btn-sm " + htmlActive}
            onClick={ () => tabHandler("html") }
            >HTML</button>
          <button className={"btn btn-sm " + jsxActive}
            onClick={ () => tabHandler("jsx") }
            >JSX</button>
        </div>
      </div>

      {/* second block */}
      { secondBlock }
    </div>
    </>
  )
}

export default Block