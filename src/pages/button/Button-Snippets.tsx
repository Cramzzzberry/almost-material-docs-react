export const ButtonSnippets = {
  "Solid Button": {
    preview: (
      <button className="btn">Solid</button>
    ),
    htmlCode: "<button class=\"btn\">Solid</button>",
    jsxCode: "<button className=\"btn\">Solid</button>",
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
    htmlCode: "<button class=\"btn\">\n  <!-- Icon here -->\n  Search\n</button>",
    jsxCode: "<button className=\"btn\">\n  {/* Icon here */}\n  Search\n</button>",
  },
  "Outlined Button": {
    preview: (
      <button className="btn btn-outlined">Outlined</button>
    ),
    htmlCode: "<button class=\"btn btn-outlined\">Outlined</button>",
    jsxCode: "<button className=\"btn btn-outlined\">Outlined</button>",
  },
  "Ghost Button": {
    preview: (
      <button className="btn btn-ghost">Ghost</button>
    ),
    htmlCode: "<button class=\"btn btn-ghost\">Ghost</button>",
    jsxCode: "<button className=\"btn btn-ghost\">Ghost</button>",
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
    htmlCode: "<button class=\"btn btn-circle\"><!-- icon here --></button>\n<button class=\"btn btn-circle btn-outlined\"><!-- icon here --></button>\n<button class=\"btn btn-circle btn-ghost\"><!-- icon here --></button>",
    jsxCode: "<button className=\"btn btn-circle\">{/* icon-here */}</button>\n<button className=\"btn btn-circle btn-outlined\">{/* icon-here */}</button>\n<button className=\"btn btn-circle btn-ghost\">{/* icon-here */}</button>",
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
    htmlCode: "<button class=\"btn btn-primary\">Primary</button>\n<button class=\"btn btn-secondary\">Secondary</button>\n<button class=\"btn btn-surface\">Surface</button>\n<button class=\"btn btn-info\">Info</button>\n<button class=\"btn btn-warning\">Warning</button>\n<button class=\"btn btn-success\">Success</button>\n<button class=\"btn btn-error\">Error</button>",
    jsxCode: "<button className=\"btn btn-primary\">Primary</button>\n<button className=\"btn btn-secondary\">Secondary</button>\n<button className=\"btn btn-surface\">Surface</button>\n<button className=\"btn btn-info\">Info</button>\n<button className=\"btn btn-warning\">Warning</button>\n<button className=\"btn btn-success\">Success</button>\n<button className=\"btn btn-error\">Error</button>",
  },
  "Button Size": {
    preview: (
      <>
      <button className="btn btn-sm">Small</button>
      <button className="btn">Default</button>
      <button className="btn btn-lg">Large</button>
      <button className="btn btn-xl">Laaaaargeee</button>
      </>
    ),
    htmlCode: "<button class=\"btn btn-sm\">Small</button>\n<button class=\"btn\">Default</button>\n<button class=\"btn btn-lg\">Large</button>\n<button class=\"btn btn-xl\">Large</button>",
    jsxCode: "<button className=\"btn btn-sm\">Small</button>\n<button className=\"btn\">Default</button>\n<button className=\"btn btn-lg\">Large</button>\n<button className=\"btn btn-xl\">Large</button>",
  },
  "Active Button": {
    preview: (
      <>
      <button className="btn active">Default</button>
      <button className="btn btn-primary active">Primary</button>
      <button className="btn btn-secondary active">Secondary</button>
      <button className="btn btn-surface active">Surface</button>
      <button className="btn btn-info active">Info</button>
      <button className="btn btn-warning active">Warning</button>
      <button className="btn btn-success active">Success</button>
      <button className="btn btn-error active">Error</button>
      <button className="btn btn-ghost active">Ghost</button>
      </>
    ),
    htmlCode: "<button class=\"btn active\">Default</button>\n<button class=\"btn btn-primary active\">Primary</button>\n<button class=\"btn btn-secondary active\">Secondary</button>\n<button class=\"btn btn-surface active\">Surface</button>\n<button class=\"btn btn-info active\">Info</button>\n<button class=\"btn btn-warning active\">Warning</button>\n<button class=\"btn btn-success active\">Success</button>\n<button class=\"btn btn-error active\">Error</button>\n<button class=\"btn btn-ghost active\">Ghost</button>",
    jsxCode: "<button className=\"btn active\">Default</button>\n<button className=\"btn btn-primary active\">Primary</button>\n<button className=\"btn btn-secondary active\">Secondary</button>\n<button className=\"btn btn-surface active\">Surface</button>\n<button className=\"btn btn-info active\">Info</button>\n<button className=\"btn btn-warning active\">Warning</button>\n<button className=\"btn btn-success active\">Success</button>\n<button className=\"btn btn-error active\">Error</button>\n<button className=\"btn btn-ghost active\">Ghost</button>",
  },
  "Disabled Button": {
    preview: (
      <button className="btn" disabled="disabled">Disabled</button>
    ),
    htmlCode: "<button class=\"btn\" disabled=\"disabled\">Disabled</button>",
    jsxCode: "<button className=\"btn\" disabled=\"disabled\">Disabled</button>",
  },
}