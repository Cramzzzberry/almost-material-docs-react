export const DividerSnippets = {
  "Divider": {
    preview: (
      <div className="flex flex-col w-full">
        <div className="card flex justify-center items-center h-20 w-full">
          Content
        </div>
        <span className="divider"></span>
        <div className="card flex justify-center items-center h-20 w-full">
          Content
        </div>
      </div>
    ),
    htmlCode: "<div class=\"flex flex-col w-full\">\n  <div class=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n  <span class=\"divider\"></span>\n  <div class=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n</div>",
    jsxCode: "<div className=\"flex flex-col w-full\">\n  <div className=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n  <span className=\"divider\"></span>\n  <div className=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n</div>",
  },
  "Divider horizontal": {
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
    htmlCode: "<div class=\"flex flex-row w-full h-20\">\n  <div class=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n  <span class=\"divider divider-horizontal\"></span>\n  <div class=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n</div>",
    jsxCode: "<div className=\"flex flex-row w-full h-20\">\n  <div className=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n  <span className=\"divider divider-horizontal\"></span>\n  <div className=\"card flex justify-center items-center h-20 w-full\">\n    Content\n  </div>\n</div>",
  },
  "Divider w/ colors": {
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
    htmlCode: "<div class=\"flex flex-col w-full\">\n  <span class=\"divider divider-primary\"></span>\n  <span class=\"divider divider-secondary\"></span>\n  <span class=\"divider divider-tertiary\"></span>\n  <span class=\"divider divider-info\"></span>\n  <span class=\"divider divider-warning\"></span>\n  <span class=\"divider divider-success\"></span>\n  <span class=\"divider divider-error\"></span>\n</div>",
    jsxCode: "<div className=\"flex flex-col w-full\">\n  <span className=\"divider divider-primary\"></span>\n  <span className=\"divider divider-secondary\"></span>\n  <span className=\"divider divider-tertiary\"></span>\n  <span className=\"divider divider-info\"></span>\n  <span className=\"divider divider-warning\"></span>\n  <span className=\"divider divider-success\"></span>\n  <span className=\"divider divider-error\"></span>\n</div>",
  },
}