export const InputFieldSnippets = {
  "Text Field": {
    preview: (
      <>
        <div className="input input-text">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Text</label>
        </div>
        
        <div className="input input-text">
          <input placeholder=" " type="password" />
          <label className="input-placeholder">Password</label>
        </div>

        <div className="input input-text">
          <input placeholder=" " type="number" />
          <label className="input-placeholder">Number</label>
        </div>
      </>
    ),
    htmlCode: "<input className=\"input\" type=\"text\" />",
    jsxCode: "<input className=\"input\" type=\"text\" />",
  },
  "Text Field w/ Colors": {
    preview: (
      <>
        <div className="input input-text">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Default</label>
        </div>
        <div className="input input-text input-primary">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Primary</label>
        </div>
        <div className="input input-text input-secondary">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Secondary</label>
        </div>
        <div className="input input-text input-tertiary">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Tertiary</label>
        </div>
        <div className="input input-text input-info">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Info</label>
        </div>
        <div className="input input-text input-warning">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Warning</label>
        </div>
        <div className="input input-text input-success">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Success</label>
        </div>
        <div className="input input-text input-error">
          <input placeholder=" " type="text" />
          <label className="input-placeholder">Error</label>
        </div>
      </>
    ),
    htmlCode: "<input className=\"input input-outline input-primary\" type=\"text\" />\n<input className=\"input input-outline input-secondary\" type=\"text\" />\n<input className=\"input input-outline input-tertiary\" type=\"text\" />\n<input className=\"input input-outline input-info\" type=\"text\" />\n<input className=\"input input-outline input-warning\" type=\"text\" />\n<input className=\"input input-outline input-success\" type=\"text\" />\n<input className=\"input input-outline input-error\" type=\"text\" />",
    jsxCode: "<input className=\"input input-outline input-primary\" type=\"text\" />\n<input className=\"input input-outline input-secondary\" type=\"text\" />\n<input className=\"input input-outline input-tertiary\" type=\"text\" />\n<input className=\"input input-outline input-info\" type=\"text\" />\n<input className=\"input input-outline input-warning\" type=\"text\" />\n<input className=\"input input-outline input-success\" type=\"text\" />\n<input className=\"input input-outline input-error\" type=\"text\" />",
  },
  "Disabled Text Field": {
    preview: (
      <div className="input input-text">
        <input placeholder=" " type="text" disabled />
        <label className="input-placeholder">Text</label>
      </div>
    ),
    htmlCode: "<input className=\"input\" type=\"text\" disabled />",
    jsxCode: "<input className=\"input\" type=\"text\" disabled />",
  },
  "Date and Time Field": {
    preview: (
      <>
        <input className="input" type="date" />
        <input className="input" type="time" />
      </>
    ),
    htmlCode: "<input className=\"input\" type=\"text\" disabled />",
    jsxCode: "<input className=\"input\" type=\"text\" disabled />",
  },
  "Date Field w/ Colors": {
    preview: (
      <>
        <input className="input" type="date" />
        <input className="input input-primary" type="date" />
        <input className="input input-secondary" type="date" />
        <input className="input input-tertiary" type="date" />
        <input className="input input-info" type="date" />
        <input className="input input-warning" type="date" />
        <input className="input input-success" type="date" />
        <input className="input input-error" type="date" />
      </>
    ),
    htmlCode: "<input className=\"input\" type=\"text\" disabled />",
    jsxCode: "<input className=\"input\" type=\"text\" disabled />",
  },
  "Time Field w/ Colors": {
    preview: (
      <>
        <input className="input" type="time" />
        <input className="input input-primary" type="time" />
        <input className="input input-secondary" type="time" />
        <input className="input input-tertiary" type="time" />
        <input className="input input-info" type="time" />
        <input className="input input-warning" type="time" />
        <input className="input input-success" type="time" />
        <input className="input input-error" type="time" />
      </>
    ),
    htmlCode: "<input className=\"input\" type=\"text\" disabled />",
    jsxCode: "<input className=\"input\" type=\"text\" disabled />",
  },
  "Disabled Date and Time Field": {
    preview: (
      <>
        <input className="input" type="date" disabled />
        <input className="input" type="time" disabled />
      </>
    ),
    htmlCode: "<input className=\"input\" type=\"text\" disabled />",
    jsxCode: "<input className=\"input\" type=\"text\" disabled />",
  },
}