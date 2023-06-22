import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ButtonSnippets } from './Button-Snippets';

export default function LinkButton() {
  const tabs = {
    "preview": (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn btn-circle">
          <span className="material-icons-round">
            search
          </span>
        </button>
        <button className="btn btn-circle btn-outlined">
          <span className="material-icons-round">
            search
          </span>
        </button>
        <button className="btn btn-circle btn-ghost">
          <span className="material-icons-round">
            search
          </span>
        </button>
      </div>
    ),
    "html": (
      <SyntaxHighlighter className="card card-primary" language="cshtml" style={ darcula }>
        { ButtonSnippets.circleButton.htmlCode }
      </SyntaxHighlighter>
    ),
    "jsx": (
      <SyntaxHighlighter className="card card-primary" language="jsx" style={ darcula }>
        { ButtonSnippets.circleButton.jsxCode }
      </SyntaxHighlighter>
    )
  }
  const [previewActive, setPreviewActive] = useState("active")
  const [htmlActive, setHtmlActive] = useState("")
  const [jsxActive, setJsxActive] = useState("")
  const [secondRow, setSecondRow] = useState(tabs["preview"])

  const handleTabs = (activeTab) => {
    setPreviewActive(activeTab === "preview" ? "active" : "")
    setHtmlActive(activeTab === "html" ? "active" : "")
    setJsxActive(activeTab === "jsx" ? "active" : "")
    setSecondRow(tabs[activeTab])
  }

  return (
    <>
    {/* icon button */}
    <div className="flex flex-col gap-4">
      {/* first row */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <h3 className="font-semibold">Circle Button</h3>
        <div className="flex flex-row gap-2 items-center">
          <button className={"btn btn-surface btn-ghost btn-sm " + previewActive}
            onClick={ () => handleTabs("preview") }
            >Preview</button>
          <button className={"btn btn-surface btn-ghost btn-sm " + htmlActive}
            onClick={ () => handleTabs("html") }
            >HTML</button>
          <button className={"btn btn-surface btn-ghost btn-sm " + jsxActive}
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