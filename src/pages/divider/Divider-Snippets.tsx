export const DividerSnippets = {
  "Divider": {
    preview: (
      <div className="flex flex-col w-full">
        <div className="card flex justify-center items-center h-20">
          Content
        </div>
        <span className="divider"></span>
        <div className="card flex justify-center items-center h-20">
          Content
        </div>
      </div>
    ),
    htmlCode: "<span class=\"divider\"></span>",
    jsxCode: "<span className=\"divider\"></span>",
  },
  "Divider Horizontal": {
    preview: (
      <div className="flex flex-row w-full h-20">
        <div className="card flex justify-center items-center h-20 w-full">
          Content
        </div>
        <span className="divider divider-horizontal"></span>
        <div className="card flex justify-center items-center h-20 w-full">
          Content
        </div>
      </div>
    ),
    htmlCode: "<span class=\"divider divider-horizontal\"></span>",
    jsxCode: "<span className=\"divider divider-horizontal\"></span>",
  },
  "Divider w/ Colors": {
    preview: (
      <div className="flex flex-col w-full">
        <span className="divider divider-primary"></span>
        <span className="divider divider-secondary"></span>
        <span className="divider divider-tertiary"></span>
        <span className="divider divider-info"></span>
        <span className="divider divider-warning"></span>
        <span className="divider divider-success"></span>
        <span className="divider divider-error"></span>
      </div>
    ),
    htmlCode: "<span class=\"divider divider-primary\"></span>\n<span class=\"divider divider-secondary\"></span>\n<span class=\"divider divider-tertiary\"></span>\n<span class=\"divider divider-info\"></span>\n<span class=\"divider divider-warning\"></span>\n<span class=\"divider divider-success\"></span>\n<span class=\"divider divider-error\"></span>",
    jsxCode: "<span className=\"divider divider-primary\"></span>\n<span className=\"divider divider-secondary\"></span>\n<span className=\"divider divider-tertiary\"></span>\n<span className=\"divider divider-info\"></span>\n<span className=\"divider divider-warning\"></span>\n<span className=\"divider divider-success\"></span>\n<span className=\"divider divider-error\"></span>",
  },
}