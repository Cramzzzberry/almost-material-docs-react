export const ButtonSnippets = {
  "Solid Button": {
    preview: (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn">Solid</button>
      </div>
    ),
    htmlCode: "<button class=\"btn\">Solid</button>",
    jsxCode: "<button className=\"btn\">Solid</button>",
  },
  "Icon Button": {
    preview: (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn">
          <span className="material-icons-round">
            search
          </span>
          Search
        </button>
      </div>
    ),
    htmlCode: "<button class=\"btn\">\n\t<!-- icon here -->\n\tSearch\n</button>",
    jsxCode: "<button className=\"btn\">\n\t{/* icon-here */}\n\tSearch\n</button>",
  },
  "Outlined Button": {
    preview: (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn btn-outlined">Outlined</button>
      </div>
    ),
    htmlCode: "<button class=\"btn btn-outlined\">Outlined</button>",
    jsxCode: "<button className=\"btn btn-outlined\">Outlined</button>",
  },
  "Ghost Button": {
    preview: (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn btn-ghost">Ghost</button>
      </div>
    ),
    htmlCode: "<button class=\"btn btn-ghost\">Ghost</button>",
    jsxCode: "<button className=\"btn btn-ghost\">Ghost</button>",
  },
  "Link Button": {
    preview: (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn btn-link">Link</button>
      </div>
    ),
    htmlCode: "<button class=\"btn btn-link\">Link</button>",
    jsxCode: "<button className=\"btn btn-link\">Link</button>",
  },
  "Circle Button": {
    preview: (
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
    htmlCode: "<button class=\"btn btn-circle\"><!-- icon here --></button>\n<button class=\"btn btn-circle btn-outlined\"><!-- icon here --></button>\n<button class=\"btn btn-circle btn-ghost\"><!-- icon here --></button>",
    jsxCode: "<button className=\"btn btn-circle\">{/* icon-here */}</button>\n<button className=\"btn btn-circle btn-outlined\">{/* icon-here */}</button>\n<button className=\"btn btn-circle btn-ghost\">{/* icon-here */}</button>",
  },
  "Colored Button": {
    preview: (
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
    htmlCode: "<button class=\"btn btn-primary\">Primary</button>\n<button class=\"btn btn-secondary\">Secondary</button>\n<button class=\"btn btn-surface\">Surface</button>\n<button class=\"btn btn-info\">Info</button>\n<button class=\"btn btn-warning\">Warning</button>\n<button class=\"btn btn-success\">Success</button>\n<button class=\"btn btn-error\">Error</button>",
    jsxCode: "<button className=\"btn btn-primary\">Primary</button>\n<button className=\"btn btn-secondary\">Secondary</button>\n<button className=\"btn btn-surface\">Surface</button>\n<button className=\"btn btn-info\">Info</button>\n<button className=\"btn btn-warning\">Warning</button>\n<button className=\"btn btn-success\">Success</button>\n<button className=\"btn btn-error\">Error</button>",
  },
  "Button Size": {
    preview: (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn btn-sm">Small</button>
        <button className="btn">Default</button>
        <button className="btn btn-lg">Large</button>
      </div>
    ),
    htmlCode: "<button class=\"btn btn-sm\">Small</button>\n<button class=\"btn\">Default</button>\n<button class=\"btn btn-lg\">Large</button>",
    jsxCode: "<button className=\"btn btn-sm\">Small</button>\n<button className=\"btn\">Default</button>\n<button className=\"btn btn-lg\">Large</button>",
  },
  "Active Button": {
    preview: (
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
    htmlCode: "<button class=\"btn active\">Default</button>\n<button class=\"btn btn-primary active\">Primary</button>\n<button class=\"btn btn-secondary active\">Secondary</button>\n<button class=\"btn btn-surface active\">Surface</button>\n<button class=\"btn btn-info active\">Info</button>\n<button class=\"btn btn-warning active\">Warning</button>\n<button class=\"btn btn-success active\">Success</button>\n<button class=\"btn btn-error active\">Error</button>\n<button class=\"btn btn-ghost active\">Ghost</button>\n<button class=\"btn btn-link active\">Link</button>",
    jsxCode: "<button className=\"btn active\">Default</button>\n<button className=\"btn btn-primary active\">Primary</button>\n<button className=\"btn btn-secondary active\">Secondary</button>\n<button className=\"btn btn-surface active\">Surface</button>\n<button className=\"btn btn-info active\">Info</button>\n<button className=\"btn btn-warning active\">Warning</button>\n<button className=\"btn btn-success active\">Success</button>\n<button className=\"btn btn-error active\">Error</button>\n<button className=\"btn btn-ghost active\">Ghost</button>\n<button className=\"btn btn-link active\">Link</button>",
  },
  "Disabled Button": {
    preview: (
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn" disabled="disabled">Disabled</button>
      </div>
    ),
    htmlCode: "<button class=\"btn\" disabled=\"disabled\">Disabled</button>",
    jsxCode: "<button className=\"btn\" disabled=\"disabled\">Disabled</button>",
  },
}