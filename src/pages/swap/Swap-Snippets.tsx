export const SwapSnippets = {
  "Swap": {
    preview: (
      <label className="swap">
        <input type="checkbox" />

        <span className="swap-off">Click me</span>
        <span className="swap-on">Why</span>
      </label>
    ),
    htmlCode: "<label class=\"swap\"></label>\n  <input type=\"checkbox\" />\n\n  <span class=\"swap-off\">Click me</span>\n  <span class=\"swap-on\">Why</span>\n</label>",
    jsxCode: "<label className=\"swap\"></label>\n  <input type=\"checkbox\" />\n\n  <span className=\"swap-off\">Click me</span>\n  <span className=\"swap-on\">Why</span>\n</label>",
  },
  "Swap w/ Fade Effect": {
    preview: (
      <label className="swap swap-fade">
        <input type="checkbox" />

        <span className="swap-off">Off</span>
        <span className="swap-on">On</span>
      </label>
    ),
    htmlCode: "<label class=\"swap swap-fade\">\n  <input type=\"checkbox\" />\n\n  <span class=\"swap-off\">Off</span>\n  <span class=\"swap-on\">On</span>\n</label>",
    jsxCode: "<label className=\"swap swap-fade\">\n  <input type=\"checkbox\" />\n\n  <span className=\"swap-off\">Off</span>\n  <span className=\"swap-on\">On</span>\n</label>",
  },
  "Swap w/ Rotate Effect": {
    preview: (
      <label className="swap swap-rotate">
        <input type="checkbox" />

        <span className="swap-off material-icons-round">light_mode</span>
        <span className="swap-on material-icons-round">dark_mode</span>
      </label>
    ),
    htmlCode: "<label class=\"swap swap-rotate\">\n  <input type=\"checkbox\" />\n\n  <span class=\"swap-off material-icons-round\">light_mode</span>\n  <span class=\"swap-on material-icons-round\">dark_mode</span>\n</label>",
    jsxCode: "<label className=\"swap swap-rotate\">\n  <input type=\"checkbox\" />\n\n  <span className=\"swap-off material-icons-round\">light_mode</span>\n  <span className=\"swap-on material-icons-round\">dark_mode</span>\n</label>",
  },
}