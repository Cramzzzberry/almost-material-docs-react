import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BadgeBlock = (props) => {
  const tabContent = {
    "preview": (
      <div className="card-warning90 min-h-[100px] p-5 flex flex-row gap-2 justify-center items-center">
        { props.preview }
      </div>
    ),
    "html": (
      <SyntaxHighlighter className="card-primary" language="cshtml" style={ darcula }>
        { props.htmlCode }
      </SyntaxHighlighter>
    ),
    "jsx": (
      <SyntaxHighlighter className="card-primary" language="jsx" style={ darcula }>
        { props.jsxCode }
      </SyntaxHighlighter>
    ),
  }
  const [previewActive, setPreviewActive] = useState("active")
  const [htmlActive, setHtmlActive] = useState("btn-ghost")
  const [jsxActive, setJsxActive] = useState("btn-ghost")
  const [secondBlock, setSecondBlock] = useState(tabContent["preview"])

  const tabHandler = (activeTab) => {
    setPreviewActive(activeTab === "preview" ? "active" : "btn-ghost")
    setHtmlActive(activeTab === "html" ? "active" : "btn-ghost")
    setJsxActive(activeTab === "jsx" ? "active" : "btn-ghost")
    setSecondBlock(tabContent[activeTab])
  }

  return (
    <>
    <div className="flex flex-col gap-4">
      {/* first block */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-semibold">{ props.type }</h3>
          { props.type === "Dot Badge" ? <span className="badge-error badge-sm">Rework</span> : null }
          { props.type === "Badge Sizes" ? <span className="badge-info badge-sm">In Dev</span> : null }
        </div>
        <div className="flex flex-row gap-2 items-center">
          <button className={"btn-surface btn-sm " + previewActive}
            onClick={ () => tabHandler("preview") }
            >Preview</button>
          <button className={"btn-surface btn-sm " + htmlActive}
            onClick={ () => tabHandler("html") }
            >HTML</button>
          <button className={"btn-surface btn-sm " + jsxActive}
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

export default BadgeBlock