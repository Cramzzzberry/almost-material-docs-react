export const BadgeSnippets = {
  "Solid Badge": {
    preview: (
      <span className="badge">Solid</span>
    ),
    htmlCode: "<span class=\"badge-default\">Solid</span>",
    jsxCode: "<span className=\"badge-default\">Solid</span>",
  },
  "Outlined Badge": {
    preview: (
      <span className="badge badge-outlined">Outlined</span>
    ),
    htmlCode: "<span class=\"badge-default badge-outlined\">Outlined</span>",
    jsxCode: "<span className=\"badge-default badge-outlined\">Outlined</span>",
  },
  "Dot Badge": {
    preview: (
      <span className="badge badge-dot"></span>
    ),
    htmlCode: "<span class=\"badge-default badge-dot\"></span>",
    jsxCode: "<span className=\"badge-default badge-dot\"></span>",
  },
  "Colored Badge": {
    preview: (
      <>
      <span className="badge badge-primary">Primary</span>
      <span className="badge badge-secondary">Secondary</span>
      <span className="badge badge-surface">Surface</span>
      <span className="badge badge-info">Info</span>
      <span className="badge badge-warning">Warning</span>
      <span className="badge badge-success">Success</span>
      <span className="badge badge-error">Error</span>
      </>
    ),
    htmlCode: "<span class=\"badge-primary\">Primary</span>\n<span class=\"badge-secondary\">Secondary</span>\n<span class=\"badge-surface\">Surface</span>\n<span class=\"badge-info\">Info</span>\n<span class=\"badge-warning\">Warning</span>\n<span class=\"badge-success\">Success</span>\n<span class=\"badge-error\">Error</span>",
    jsxCode: "<span className=\"badge-primary\">Primary</span>\n<span className=\"badge-secondary\">Secondary</span>\n<span className=\"badge-surface\">Surface</span>\n<span className=\"badge-info\">Info</span>\n<span className=\"badge-warning\">Warning</span>\n<span className=\"badge-success\">Success</span>\n<span className=\"badge-error\">Error</span>",
  },
  "Badge Sizes": {
    preview: (
      <>
      <span className="badge badge-sm">Small</span>
      <span className="badge">Default</span>
      <span className="badge badge-lg">Large</span>
      </>
    ),
    htmlCode: "<span class=\"badge-default badge-sm\">Small</span>\n<span class=\"badge-default\">Default</span>\n<span class=\"badge-default badge-lg\">Large</span>",
    jsxCode: "<span className=\"badge-default badge-sm\">Small</span>\n<span className=\"badge-default\">Default</span>\n<span className=\"badge-default badge-lg\">Large</span>",
  },
}