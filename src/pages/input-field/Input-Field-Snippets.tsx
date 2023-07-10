export const InputFieldSnippets = {
  "Text Input": {
    preview: (
      <input type="text" placeholder="Type here..." className="input" />
    ),
    htmlCode: "<input type=\"text\" class=\"input\" />",
    jsxCode: "<input type=\"text\" className=\"input\" />",
  },
  "Text Input Bordered": {
    preview: (
      <input type="text" placeholder="I have borders!" className="input input-bordered" />
    ),
    htmlCode: "<input type=\"text\" class=\"input input-bordered\" />",
    jsxCode: "<input type=\"text\" className=\"input input-bordered\" />",
  },
  "Text Input Ghost": {
    preview: (
      <input type="text" placeholder="Boo!" className="input input-ghost" />
    ),
    htmlCode: "<input type=\"text\" class=\"input input-ghost\" />",
    jsxCode: "<input type=\"text\" className=\"input input-ghost\" />",
  },
  "Text Input Underlined": {
    preview: (
      <input type="text" placeholder="__Underlined__" className="input input-underlined" />
    ),
    htmlCode: "<input type=\"text\" class=\"input input-underlined\" />",
    jsxCode: "<input type=\"text\" className=\"input input-underlined\" />",
  },
  "Text Input w/ Colors": {
    preview: (
      <>
      <input type="text" placeholder="Primary" className="input input-bordered input-primary" />
      <input type="text" placeholder="Secondary" className="input input-bordered input-secondary" />
      <input type="text" placeholder="Surface" className="input input-bordered input-surface" />
      <input type="text" placeholder="Info" className="input input-bordered input-info" />
      <input type="text" placeholder="Warning" className="input input-bordered input-warning" />
      <input type="text" placeholder="Success" className="input input-bordered input-success" />
      <input type="text" placeholder="Error" className="input input-bordered input-error" />
      </>
    ),
    htmlCode: "<input type=\"text\" class=\"input input-bordered input-primary\" />\n<input type=\"text\" class=\"input input-bordered input-secondary\" />\n<input type=\"text\" class=\"input input-bordered input-surface\" />\n<input type=\"text\" class=\"input input-bordered input-info\" />\n<input type=\"text\" class=\"input input-bordered input-warning\" />\n<input type=\"text\" class=\"input input-bordered input-success\" />\n<input type=\"text\" class=\"input input-bordered input-error\" />",
    jsxCode: "<input type=\"text\" className=\"input input-bordered input-primary\" />\n<input type=\"text\" className=\"input input-bordered input-secondary\" />\n<input type=\"text\" className=\"input input-bordered input-surface\" />\n<input type=\"text\" className=\"input input-bordered input-info\" />\n<input type=\"text\" className=\"input input-bordered input-warning\" />\n<input type=\"text\" className=\"input input-bordered input-success\" />\n<input type=\"text\" className=\"input input-bordered input-error\" />",
  },
  "Text Input Sizes": {
    preview: (
      <>
      <input type="text" placeholder="Small" className="input input-sm" />
      <input type="text" placeholder="Default" className="input" />
      <input type="text" placeholder="Large" className="input input-lg" />
      <input type="text" placeholder="RAWR" className="input input-xl" />
      </>
    ),
    htmlCode: "<input type=\"text\" class=\"input input-sm\" />\n<input type=\"text\" class=\"input\" />\n<input type=\"text\" class=\"input input-lg\" />\n<input type=\"text\" class=\"input input-xl\" />",
    jsxCode: "<input type=\"text\" className=\"input input-sm\" />\n<input type=\"text\" className=\"input\" />\n<input type=\"text\" className=\"input input-lg\" />\n<input type=\"text\" className=\"input input-xl\" />",
  },
  "Disabled Text Input": {
    preview: (
      <input type="text" placeholder="Disabled :(" className="input" disabled="disabled"/>
    ),
    htmlCode: "<input type=\"text\" class=\"input\" disabled=\"disabled\"/>",
    jsxCode: "<input type=\"text\" className=\"input\" disabled=\"disabled\"/>",
  },
}