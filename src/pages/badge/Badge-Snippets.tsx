export const BadgeSnippets = {
  "Solid Badge": {
    preview: (
      <span className="badge">solid</span>
    ),
    htmlCode: "<span class=\"badge\">Solid</span>",
    jsxCode: "<span className=\"badge\">Solid</span>",
  },
  "Outlined Badge": {
    preview: (
      <span className="badge --outlined">outlined</span>
    ),
    htmlCode: "<span class=\"badge --outlined\">outlined</span>",
    jsxCode: "<span className=\"badge --outlined\">outlined</span>",
  },
  "Dot Badge": {
    preview: (
      <span className="badge --dot"></span>
    ),
    htmlCode: "<span class=\"badge --dot\"></span>",
    jsxCode: "<span className=\"badge --dot\"></span>",
  },
  "Colored Badge": {
    preview: (
      <>
      <span className="badge badge-primary">primary</span>
      <span className="badge badge-secondary">secondary</span>
      <span className="badge badge-tertiary">tertiary</span>
      <span className="badge badge-info">info</span>
      <span className="badge badge-warning">warning</span>
      <span className="badge badge-success">success</span>
      <span className="badge badge-error">error</span>
      </>
    ),
    htmlCode: "<span class=\"badge badge-primary\">primary</span>\n<span class=\"badge badge-secondary\">secondary</span>\n<span class=\"badge badge-tertiary\">tertiary</span>\n<span class=\"badge badge-info\">info</span>\n<span class=\"badge badge-warning\">warning</span>\n<span class=\"badge badge-success\">success</span>\n<span class=\"badge badge-error\">error</span>",
    jsxCode: "<span className=\"badge badge-primary\">primary</span>\n<span className=\"badge badge-secondary\">secondary</span>\n<span className=\"badge badge-tertiary\">tertiary</span>\n<span className=\"badge badge-info\">info</span>\n<span className=\"badge badge-warning\">warning</span>\n<span className=\"badge badge-success\">success</span>\n<span className=\"badge badge-error\">error</span>",
  },
  "Badge Sizes": {
    preview: (
      <>
      <span className="badge --sm">Small</span>
      <span className="badge">Default</span>
      <span className="badge --lg">Large</span>
      <span className="badge --xl">LAAAARGE!</span>
      </>
    ),
    htmlCode: "<span class=\"badge --sm\">Small</span>\n<span class=\"badge\">Default</span>\n<span class=\"badge --lg\">Large</span>\n<span class=\"badge --xl\">LAAAARGE!</span>",
    jsxCode: "<span className=\"badge --sm\">Small</span>\n<span className=\"badge\">Default</span>\n<span className=\"badge --lg\">Large</span>\n<span className=\"badge --xl\">LAAAARGE!</span>",
  },
}