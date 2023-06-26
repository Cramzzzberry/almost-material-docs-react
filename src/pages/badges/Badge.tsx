import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Badge = (props) => {
  const tabs = {
    "preview": (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        { props.preview }
      </div>
    ),
    "html": (
      <SyntaxHighlighter className="card card-primary" language="cshtml" style={ darcula }>
        { props.htmlCode }
      </SyntaxHighlighter>
    ),
    "jsx": (
      <SyntaxHighlighter className="card card-primary" language="jsx" style={ darcula }>
        { props.jsxCode }
      </SyntaxHighlighter>
    ),
  }
  const [previewActive, setPreviewActive] = useState("btn-surface active")
  const [htmlActive, setHtmlActive] = useState("btn-ghost")
  const [jsxActive, setJsxActive] = useState("btn-ghost")
  const [secondRow, setSecondRow] = useState(tabs["preview"])

  const handleTabs = (activeTab) => {
    setPreviewActive(activeTab === "preview" ? "btn-surface active" : "btn-ghost")
    setHtmlActive(activeTab === "html" ? "btn-surface active" : "btn-ghost")
    setJsxActive(activeTab === "jsx" ? "btn-surface active" : "btn-ghost")
    setSecondRow(tabs[activeTab])
  }

  return (
    <>
    <div className="flex flex-col gap-4">
      {/* first row */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <h3 className="font-semibold">{ props.type }</h3>
        <div className="flex flex-row gap-2 items-center">
          <button className={"btn btn-sm " + previewActive}
            onClick={ () => handleTabs("preview") }
            >Preview</button>
          <button className={"btn btn-sm " + htmlActive}
            onClick={ () => handleTabs("html") }
            >HTML</button>
          <button className={"btn btn-sm " + jsxActive}
            onClick={ () => handleTabs("jsx") }
            >JSX</button>
        </div>
      </div>

      {/* second row */}
      { secondRow }
    </div>
    </>
  )
}

export default Badge