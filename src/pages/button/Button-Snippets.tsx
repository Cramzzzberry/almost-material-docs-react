export const ButtonSnippets = {
  "Button": {
    preview: (
      <button className="btn">button</button>
    ),
    htmlCode: "<button class=\"btn\">button</button>",
    jsxCode: "<button className=\"btn\">button</button>",
  },
  "Button w/ Icon": {
    preview: (
      <button className="btn">
        <span className="material-icons-round">
          search
        </span>
        search
      </button>
    ),
    htmlCode: "<button class=\"btn\">\n  <!-- icon here -->\n  search\n</button>",
    jsxCode: "<button className=\"btn\">\n  {/* icon here */}\n  search\n</button>",
  },
  "Outlined Button": {
    preview: (
      <button className="btn --outlined">outlined</button>
    ),
    htmlCode: "<button class=\"btn --outlined\">outlined</button>",
    jsxCode: "<button className=\"btn --outlined\">outlined</button>",
  },
  "Ghost Button": {
    preview: (
      <button className="btn --ghost">ghost</button>
    ),
    htmlCode: "<button class=\"btn --ghost\">ghost</button>",
    jsxCode: "<button className=\"btn --ghost\">ghost</button>",
  },
  "Circle Buttons": {
    preview: (
      <>
      <button className="btn --circle">
        <span className="material-icons-round">
          search
        </span>
      </button>
      <button className="btn --circle --outlined">
        <span className="material-icons-round">
          search
        </span>
      </button>
      <button className="btn --circle --ghost">
        <span className="material-icons-round">
          search
        </span>
      </button>
      </>
    ),
    htmlCode: "<button class=\"btn --circle\"><!-- icon here --></button>\n<button class=\"btn --circle --outlined\"><!-- icon here --></button>\n<button class=\"btn --circle --ghost\"><!-- icon here --></button>",
    jsxCode: "<button className=\"btn --circle\">{/* icon-here */}</button>\n<button className=\"btn --circle --outlined\">{/* icon-here */}</button>\n<button className=\"btn --circle --ghost\">{/* icon-here */}</button>",
  },
  "Button w/ Colors": {
    preview: (
      <>
      <button className="btn btn-primary">primary</button>
      <button className="btn btn-secondary">secondary</button>
      <button className="btn btn-tertiary">tertiary</button>
      <button className="btn btn-info">info</button>
      <button className="btn btn-warning">warning</button>
      <button className="btn btn-success">success</button>
      <button className="btn btn-error">error</button>
      </>
    ),
    htmlCode: "<button class=\"btn btn-primary\">primary</button>\n<button class=\"btn btn-secondary\">secondary</button>\n<button class=\"btn btn-tertiary\">tertiary</button>\n<button class=\"btn btn-info\">info</button>\n<button class=\"btn btn-warning\">warning</button>\n<button class=\"btn btn-success\">success</button>\n<button class=\"btn btn-error\">error</button>",
    jsxCode: "<button className=\"btn btn-primary\">primary</button>\n<button className=\"btn btn-secondary\">secondary</button>\n<button className=\"btn btn-tertiary\">tertiary</button>\n<button className=\"btn btn-info\">info</button>\n<button className=\"btn btn-warning\">warning</button>\n<button className=\"btn btn-success\">success</button>\n<button className=\"btn btn-error\">error</button>",
  },
  "Button Sizes": {
    preview: (
      <>
      <button className="btn --sm">small</button>
      <button className="btn">default</button>
      <button className="btn --lg">large</button>
      <button className="btn --xl">largeeeeeeeee</button>
      </>
    ),
    htmlCode: "<button class=\"btn --sm\">small</button>\n<button class=\"btn\">default</button>\n<button class=\"btn --lg\">large</button>\n<button class=\"btn --xl\">largeeeeeeeee</button>",
    jsxCode: "<button className=\"btn --sm\">small</button>\n<button className=\"btn\">default</button>\n<button className=\"btn --lg\">large</button>\n<button className=\"btn --xl\">largeeeeeeeee</button>",
  },
  "Active Buttons": {
    preview: (
      <>
      <button className="btn --active">default</button>
      <button className="btn btn-primary --active">primary</button>
      <button className="btn btn-secondary --active">secondary</button>
      <button className="btn btn-tertiary --active">tertiary</button>
      <button className="btn btn-info --active">info</button>
      <button className="btn btn-warning --active">warning</button>
      <button className="btn btn-success --active">success</button>
      <button className="btn btn-error --active">error</button>
      <button className="btn btn-ghost --active">ghost</button>
      </>
    ),
    htmlCode: "<button class=\"btn --active\">default</button>\n<button class=\"btn btn-primary --active\">primary</button>\n<button class=\"btn btn-secondary --active\">secondary</button>\n<button class=\"btn btn-tertiary --active\">tertiary</button>\n<button class=\"btn btn-info --active\">info</button>\n<button class=\"btn btn-warning --active\">warning</button>\n<button class=\"btn btn-success --active\">success</button>\n<button class=\"btn btn-error --active\">error</button>\n<button class=\"btn btn-ghost --active\">ghost</button>",
    jsxCode: "<button className=\"btn --active\">default</button>\n<button className=\"btn btn-primary --active\">primary</button>\n<button className=\"btn btn-secondary --active\">secondary</button>\n<button className=\"btn btn-tertiary --active\">tertiary</button>\n<button className=\"btn btn-info --active\">info</button>\n<button className=\"btn btn-warning --active\">warning</button>\n<button className=\"btn btn-success --active\">success</button>\n<button className=\"btn btn-error --active\">error</button>\n<button className=\"btn btn-ghost --active\">ghost</button>",
  },
  "Disabled Button": {
    preview: (
      <button className="btn" disabled>Disabled</button>
    ),
    htmlCode: "<button class=\"btn\" disabled=\"disabled\">Disabled</button>",
    jsxCode: "<button className=\"btn\" disabled=\"disabled\">Disabled</button>",
  },
}