export const ButtonSnippets = {
  "Solid Button": {
    preview: (
      <button className="btn">Solid</button>
    ),
    htmlCode: "<button class=\"btn-default\">Solid</button>",
    jsxCode: "<button className=\"btn-default\">Solid</button>",
  },
  "Icon Button": {
    preview: (
      <button className="btn">
        <span className="material-icons-round">
          search
        </span>
        Search
      </button>
    ),
    htmlCode: "<button class=\"btn-default\">\n  <!-- icon here -->\n    search\n  </span>\n  Search\n</button>",
    jsxCode: "<button className=\"btn-default\">\n  {/* icon-here */}\n    search\n  </span>\n  Search\n</button>",
  },
  "Outlined Button": {
    preview: (
      <button className="btn btn-outlined">Outlined</button>
    ),
    htmlCode: "<button class=\"btn-default btn-outlined\">Outlined</button>",
    jsxCode: "<button className=\"btn-default btn-outlined\">Outlined</button>",
  },
  "Ghost Button": {
    preview: (
      <button className="btn btn-ghost">Ghost</button>
    ),
    htmlCode: "<button class=\"btn-default btn-ghost\">Ghost</button>",
    jsxCode: "<button className=\"btn-default btn-ghost\">Ghost</button>",
  },
  "Circle Button": {
    preview: (
      <>
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
      </>
    ),
    htmlCode: "<button class=\"btn-default btn-circle\"><!-- icon here --></button>\n<button class=\"btn-default btn-circle btn-outlined\"><!-- icon here --></button>\n<button class=\"btn-default btn-circle btn-ghost\"><!-- icon here --></button>",
    jsxCode: "<button className=\"btn-default btn-circle\">{/* icon-here */}</button>\n<button className=\"btn-default btn-circle btn-outlined\">{/* icon-here */}</button>\n<button className=\"btn-default btn-circle btn-ghost\">{/* icon-here */}</button>",
  },
  "Colored Button": {
    preview: (
      <>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-surface">Surface</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-error">Error</button>
      </>
    ),
    htmlCode: "<button class=\"btn-primary\">Primary</button>\n<button class=\"btn-secondary\">Secondary</button>\n<button class=\"btn-surface\">Surface</button>\n<button class=\"btn-info\">Info</button>\n<button class=\"btn-warning\">Warning</button>\n<button class=\"btn-success\">Success</button>\n<button class=\"btn-error\">Error</button>",
    jsxCode: "<button className=\"btn-primary\">Primary</button>\n<button className=\"btn-secondary\">Secondary</button>\n<button className=\"btn-surface\">Surface</button>\n<button className=\"btn-info\">Info</button>\n<button className=\"btn-warning\">Warning</button>\n<button className=\"btn-success\">Success</button>\n<button className=\"btn-error\">Error</button>",
  },
  "Button Size": {
    preview: (
      <>
      <button className="btn btn-sm">Small</button>
      <button className="btn">Default</button>
      <button className="btn btn-lg">Large</button>
      </>
    ),
    htmlCode: "<button class=\"btn-default btn-sm\">Small</button>\n<button class=\"btn-default\">Default</button>\n<button class=\"btn-default btn-lg\">Large</button>",
    jsxCode: "<button className=\"btn-default btn-sm\">Small</button>\n<button className=\"btn-default\">Default</button>\n<button className=\"btn-default btn-lg\">Large</button>",
  },
  "Active Button": {
    preview: (
      <>
      <button className="btn btn-default active">Default</button>
      <button className="btn btn-primary active">Primary</button>
      <button className="btn btn-secondary active">Secondary</button>
      <button className="btn btn-surface active">Surface</button>
      <button className="btn btn-info active">Info</button>
      <button className="btn btn-warning active">Warning</button>
      <button className="btn btn-success active">Success</button>
      <button className="btn btn-error active">Error</button>
      <button className="btn btn-default btn-ghost active">Ghost</button>
      </>
    ),
    htmlCode: "<button class=\"btn-default active\">Default</button>\n<button class=\"btn-primary active\">Primary</button>\n<button class=\"btn-secondary active\">Secondary</button>\n<button class=\"btn-surface active\">Surface</button>\n<button class=\"btn-info active\">Info</button>\n<button class=\"btn-warning active\">Warning</button>\n<button class=\"btn-success active\">Success</button>\n<button class=\"btn-error active\">Error</button>\n<button class=\"btn-default btn-ghost active\">Ghost</button>",
    jsxCode: "<button className=\"btn-default active\">Default</button>\n<button className=\"btn-primary active\">Primary</button>\n<button className=\"btn-secondary active\">Secondary</button>\n<button className=\"btn-surface active\">Surface</button>\n<button className=\"btn-info active\">Info</button>\n<button className=\"btn-warning active\">Warning</button>\n<button className=\"btn-success active\">Success</button>\n<button className=\"btn-error active\">Error</button>\n<button className=\"btn-default btn-ghost active\">Ghost</button>",
  },
  "Disabled Button": {
    preview: (
      <button className="btn" disabled="disabled">Disabled</button>
    ),
    htmlCode: "<button class=\"btn-default\" disabled=\"disabled\">Disabled</button>",
    jsxCode: "<button className=\"btn-default\" disabled=\"disabled\">Disabled</button>",
  },
}
