import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ButtonSnippets } from './Button-Snippets';

export default function ColoredButton() {
  const tabs = {
    "preview": (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-surface">Surface</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-error">Error</button>
      </div>
    ),
    "html": (
      <SyntaxHighlighter className="card card-primary" language="cshtml" style={ darcula }>
        { ButtonSnippets.coloredButton.htmlCode }
      </SyntaxHighlighter>
    ),
    "jsx": (
      <SyntaxHighlighter className="card card-primary" language="jsx" style={ darcula }>
        { ButtonSnippets.coloredButton.jsxCode }
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
    {/* buttons with colors */}
    <div className="flex flex-col gap-4">
      {/* first row */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <h3 className="font-semibold">Buttons w/ Colors</h3>
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