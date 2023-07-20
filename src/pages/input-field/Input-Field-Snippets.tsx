export const InputFieldSnippets = {
  "Text Input": {
    preview: (
      <input className="input" type="text" placeholder="Type here..." />
    ),
    htmlCode: "<input class=\"input\" type=\"text\" />",
    jsxCode: "<input className=\"input\" type=\"text\" />",
  },
  "Outlined Text Input": {
    preview: (
      <input className="input input-outline" type="text" placeholder="I have borders!" />
    ),
    htmlCode: "<input class=\"input input-outline\" type=\"text\" />",
    jsxCode: "<input className=\"input input-outline\" type=\"text\" />",
  },
  "Ghost Text Input": {
    preview: (
      <input className="input input-ghost" type="text" placeholder="Boo!" />
    ),
    htmlCode: "<input class=\"input input-ghost\" type=\"text\" />",
    jsxCode: "<input className=\"input input-ghost\" type=\"text\" />",
  },
  "Underlined Text Input": {
    preview: (
      <input className="input input-underlined" type="text" placeholder="A line underneath!" />
    ),
    htmlCode: "<input class=\"input input-underlined\" type=\"text\" />",
    jsxCode: "<input className=\"input input-underlined\" type=\"text\" />",
  },
  "Text Input w/ Colors": {
    preview: (
      <>
      <input className="input input-outline input-primary" type="text" placeholder="Primary" />
      <input className="input input-outline input-secondary" type="text" placeholder="Secondary" />
      <input className="input input-outline input-tertiary" type="text" placeholder="tertiary" />
      <input className="input input-outline input-info" type="text" placeholder="Info" />
      <input className="input input-outline input-warning" type="text" placeholder="Warning" />
      <input className="input input-outline input-success" type="text" placeholder="Success" />
      <input className="input input-outline input-error" type="text" placeholder="Error" />
      </>
    ),
    htmlCode: "<input class=\"input input-outline input-primary\" type=\"text\" />\n<input class=\"input input-outline input-secondary\" type=\"text\" />\n<input class=\"input input-outline input-tertiary\" type=\"text\" />\n<input class=\"input input-outline input-info\" type=\"text\" />\n<input class=\"input input-outline input-warning\" type=\"text\" />\n<input class=\"input input-outline input-success\" type=\"text\" />\n<input class=\"input input-outline input-error\" type=\"text\" />",
    jsxCode: "<input className=\"input input-outline input-primary\" type=\"text\" />\n<input className=\"input input-outline input-secondary\" type=\"text\" />\n<input className=\"input input-outline input-tertiary\" type=\"text\" />\n<input className=\"input input-outline input-info\" type=\"text\" />\n<input className=\"input input-outline input-warning\" type=\"text\" />\n<input className=\"input input-outline input-success\" type=\"text\" />\n<input className=\"input input-outline input-error\" type=\"text\" />",
  },
  "Text Input Sizes": {
    preview: (
      <>
      <input className="input input-sm" type="text" placeholder="Small" />
      <input className="input input-md" type="text" placeholder="Default" />
      <input className="input input-lg" type="text" placeholder="Large" />
      <input className="input input-xl" type="text" placeholder="RAWR" />
      </>
    ),
    htmlCode: "<input class=\"input input-sm\" type=\"text\" />\n<input class=\"input input-md\" type=\"text\" />\n<input class=\"input input-lg\" type=\"text\" />\n<input class=\"input input-xl\" type=\"text\" />",
    jsxCode: "<input className=\"input input-sm\" type=\"text\" />\n<input className=\"input input-md\" type=\"text\" />\n<input className=\"input input-lg\" type=\"text\" />\n<input className=\"input input-xl\" type=\"text\" />",
  },
  "Disabled Text Input": {
    preview: (
      <input className="input" type="text" placeholder="Disabled :(" disabled />
    ),
    htmlCode: "<input class=\"input\" type=\"text\" disabled />",
    jsxCode: "<input className=\"input\" type=\"text\" disabled />",
  },
}