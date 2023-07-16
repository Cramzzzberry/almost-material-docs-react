export const InputFieldSnippets = {
  "Text Input": {
    preview: (
      <input className="input" type="text" placeholder="Type here..." />
    ),
    htmlCode: "<input class=\"input\" type=\"text\" />",
    jsxCode: "<input className=\"input\" type=\"text\" />",
  },
  "Text Input Bordered": {
    preview: (
      <input className="input --bordered" type="text" placeholder="I have borders!" />
    ),
    htmlCode: "<input class=\"input --bordered\" type=\"text\" />",
    jsxCode: "<input className=\"input --bordered\" type=\"text\" />",
  },
  "Text Input Ghost": {
    preview: (
      <input className="input --ghost" type="text" placeholder="Boo!" />
    ),
    htmlCode: "<input class=\"input --ghost\" type=\"text\" />",
    jsxCode: "<input className=\"input --ghost\" type=\"text\" />",
  },
  "Text Input Underlined": {
    preview: (
      <input className="input --underlined" type="text" placeholder="A line underneath!" />
    ),
    htmlCode: "<input class=\"input --underlined\" type=\"text\" />",
    jsxCode: "<input className=\"input --underlined\" type=\"text\" />",
  },
  "Text Input w/ Colors": {
    preview: (
      <>
      <input className="input --bordered input-primary" type="text" placeholder="Primary" />
      <input className="input --bordered input-secondary" type="text" placeholder="Secondary" />
      <input className="input --bordered input-tertiary" type="text" placeholder="tertiary" />
      <input className="input --bordered input-info" type="text" placeholder="Info" />
      <input className="input --bordered input-warning" type="text" placeholder="Warning" />
      <input className="input --bordered input-success" type="text" placeholder="Success" />
      <input className="input --bordered input-error" type="text" placeholder="Error" />
      </>
    ),
    htmlCode: "<input class=\"input --bordered input-primary\" type=\"text\" />\n<input class=\"input --bordered input-secondary\" type=\"text\" />\n<input class=\"input --bordered input-tertiary\" type=\"text\" />\n<input class=\"input --bordered input-info\" type=\"text\" />\n<input class=\"input --bordered input-warning\" type=\"text\" />\n<input class=\"input --bordered input-success\" type=\"text\" />\n<input class=\"input --bordered input-error\" type=\"text\" />",
    jsxCode: "<input className=\"input --bordered input-primary\" type=\"text\" />\n<input className=\"input --bordered input-secondary\" type=\"text\" />\n<input className=\"input --bordered input-tertiary\" type=\"text\" />\n<input className=\"input --bordered input-info\" type=\"text\" />\n<input className=\"input --bordered input-warning\" type=\"text\" />\n<input className=\"input --bordered input-success\" type=\"text\" />\n<input className=\"input --bordered input-error\" type=\"text\" />",
  },
  "Text Input Sizes": {
    preview: (
      <>
      <input className="input --sm" type="text" placeholder="Small" />
      <input className="input" type="text" placeholder="Default" />
      <input className="input --lg" type="text" placeholder="Large" />
      <input className="input --xl" type="text" placeholder="RAWR" />
      </>
    ),
    htmlCode: "<input class=\"input --sm\" type=\"text\" />\n<input class=\"input\" type=\"text\" />\n<input class=\"input --lg\" type=\"text\" />\n<input class=\"input --xl\" type=\"text\" />",
    jsxCode: "<input className=\"input --sm\" type=\"text\" />\n<input className=\"input\" type=\"text\" />\n<input className=\"input --lg\" type=\"text\" />\n<input className=\"input --xl\" type=\"text\" />",
  },
  "Disabled Text Input": {
    preview: (
      <input className="input" type="text" placeholder="Disabled :(" disabled />
    ),
    htmlCode: "<input class=\"input\" type=\"text\" disabled />",
    jsxCode: "<input className=\"input\" type=\"text\" disabled />",
  },
}