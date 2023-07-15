import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Block = ({preview, htmlCode, jsxCode, componentName}) => {
  const tabContent = {
    "preview": preview,
    "html": (
      <SyntaxHighlighter className="card card-primary-80" language="cshtml" style={ darcula }>
        { htmlCode }
      </SyntaxHighlighter>
    ),
    "jsx": (
      <SyntaxHighlighter className="card card-primary-80" language="jsx" style={ darcula }>
        { jsxCode }
      </SyntaxHighlighter>
    ),
  }
  const [previewActive, setPreviewActive] = useState("btn-primary btn-active")
  const [htmlActive, setHtmlActive] = useState("btn-ghost")
  const [jsxActive, setJsxActive] = useState("btn-ghost")
  const [secondBlock, setSecondBlock] = useState(tabContent["preview"])

  const tabHandler = (activeTab) => {
    setPreviewActive(activeTab === "preview" ? "btn-primary btn-active" : "btn-ghost")
    setHtmlActive(activeTab === "html" ? "btn-primary btn-active" : "btn-ghost")
    setJsxActive(activeTab === "jsx" ? "btn-primary btn-active" : "btn-ghost")
    setSecondBlock(tabContent[activeTab])
  }

  return (
    <>
    <div className="flex flex-col gap-4">
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