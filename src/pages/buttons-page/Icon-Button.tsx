import { useState } from 'react';

export default function IconButton() {
  const tabs = {
    "preview": (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn">
          <span className="material-icons-round">
            search
          </span>
          Search
        </button>
      </div>
    ),
    "html": (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <span>Html here</span>
      </div>
    ),
    "jsx": (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <span>jsx here</span>
      </div>
    )
  }
  const [previewActive, setPreviewActive] = useState("active");
  const [htmlActive, setHtmlActive] = useState("");
  const [jsxActive, setJsxActive] = useState("");
  const [secondRow, setSecondRow] = useState(tabs["preview"])

  const handleTabs = (activeTab) => {
    setPreviewActive(activeTab === "preview" ? "active" : "");
    setHtmlActive(activeTab === "html" ? "active" : "");
    setJsxActive(activeTab === "jsx" ? "active" : "");
    setSecondRow(tabs[activeTab]);
  }

  return (
    <>
    {/* button with icon */}
    <div className="flex flex-col gap-4">
      {/* first row */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <h3 className="font-semibold">Button w/ Icon</h3>
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