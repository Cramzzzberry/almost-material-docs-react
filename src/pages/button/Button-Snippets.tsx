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
      <button className="btn btn-tertiary">tertiary</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-error">Error</button>
      </>
    ),
    htmlCode: "<button class=\"btn btn-primary\">Primary</button>\n<button class=\"btn btn-secondary\">Secondary</button>\n<button class=\"btn btn-tertiary\">tertiary</button>\n<button class=\"btn btn-info\">Info</button>\n<button class=\"btn btn-warning\">Warning</button>\n<button class=\"btn btn-success\">Success</button>\n<button class=\"btn btn-error\">Error</button>",
    jsxCode: "<button className=\"btn btn-primary\">Primary</button>\n<button className=\"btn btn-secondary\">Secondary</button>\n<button className=\"btn btn-tertiary\">tertiary</button>\n<button className=\"btn btn-info\">Info</button>\n<button className=\"btn btn-warning\">Warning</button>\n<button className=\"btn btn-success\">Success</button>\n<button className=\"btn btn-error\">Error</button>",
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
      <button className="btn btn-active">Default</button>
      <button className="btn btn-primary btn-active">Primary</button>
      <button className="btn btn-secondary btn-active">Secondary</button>
      <button className="btn btn-tertiary btn-active">tertiary</button>
      <button className="btn btn-info btn-active">Info</button>
      <button className="btn btn-warning btn-active">Warning</button>
      <button className="btn btn-success btn-active">Success</button>
      <button className="btn btn-error btn-active">Error</button>
      <button className="btn btn-ghost btn-active">Ghost</button>
      </>
    ),
    htmlCode: "<button class=\"btn btn-active\">Default</button>\n<button class=\"btn btn-primary btn-active\">Primary</button>\n<button class=\"btn btn-secondary btn-active\">Secondary</button>\n<button class=\"btn btn-tertiary btn-active\">tertiary</button>\n<button class=\"btn btn-info btn-active\">Info</button>\n<button class=\"btn btn-warning btn-active\">Warning</button>\n<button class=\"btn btn-success btn-active\">Success</button>\n<button class=\"btn btn-error btn-active\">Error</button>\n<button class=\"btn btn-ghost btn-active\">Ghost</button>",
    jsxCode: "<button className=\"btn btn-active\">Default</button>\n<button className=\"btn btn-primary btn-active\">Primary</button>\n<button className=\"btn btn-secondary btn-active\">Secondary</button>\n<button className=\"btn btn-tertiary btn-active\">tertiary</button>\n<button className=\"btn btn-info btn-active\">Info</button>\n<button className=\"btn btn-warning btn-active\">Warning</button>\n<button className=\"btn btn-success btn-active\">Success</button>\n<button className=\"btn btn-error btn-active\">Error</button>\n<button className=\"btn btn-ghost btn-active\">Ghost</button>",
  },
  "Disabled Button": {
    preview: (
      <button className="btn" disabled="disabled">Disabled</button>
    ),
    htmlCode: "<button class=\"btn\" disabled=\"disabled\">Disabled</button>",
    jsxCode: "<button className=\"btn\" disabled=\"disabled\">Disabled</button>",
  },
}