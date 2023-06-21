import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ButtonSnippets } from './Button-Snippets';

export default function ActiveButton() {
  const tabs = {
    "preview": (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        <button className="btn active">Default</button>
        <button className="btn btn-primary active">Primary</button>
        <button className="btn btn-secondary active">Secondary</button>
        <button className="btn btn-surface active">Surface</button>
        <button className="btn btn-info active">Info</button>
        <button className="btn btn-warning active">Warning</button>
        <button className="btn btn-success active">Success</button>
        <button className="btn btn-error active">Error</button>
        <button className="btn btn-ghost active">Ghost</button>
        <button className="btn btn-link active">Link</button>
      </div>
    ),
    "html": (
      <SyntaxHighlighter className="card card-primary" language="cshtml" style={ darcula }>
        { ButtonSnippets.activeButton.htmlCode }
      </SyntaxHighlighter>
    ),
    "jsx": (
      <SyntaxHighlighter className="card card-primary" language="jsx" style={ darcula }>
        { ButtonSnippets.activeButton.jsxCode }
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
    {/* button active */}
    <div className="flex flex-col gap-4">
      {/* first row */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <h3 className="font-semibold">Active Button</h3>
        <div className="flex flex-row gap-2 items-center">
          <button className={"btn btn-surface btn-outlined btn-sm " + previewActive}
            onClick={ () => handleTabs("preview") }
            >Preview</button>
          <button className={"btn btn-surface btn-outlined btn-sm " + htmlActive}
            onClick={ () => handleTabs("html") }
            >HTML</button>
          <button className={"btn btn-surface btn-outlined btn-sm " + jsxActive}
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