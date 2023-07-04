export const CheckboxSnippets = {
  "Checkbox": {
    preview: (
      <input type="checkbox" defaultChecked="checked" className="checkbox"></input>
    ),
    htmlCode: "<input class=\"checkbox\" type=\"checkbox\" />",
    jsxCode: "<input className=\"checkbox\" type=\"checkbox\" />",
  },
  "Checkbox w/ colors": {
    preview: (
      <>
      <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-primary"></input>
      <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-secondary"></input>
      <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-surface"></input>
      <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-info"></input>
      <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-warning"></input>
      <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-success"></input>
      <input type="checkbox" defaultChecked="checked" className="checkbox checkbox-error"></input>
      </>
    ),
    htmlCode: "<input class=\"checkbox\" type=\"checkbox\" />",
    jsxCode: "<input className=\"checkbox\" type=\"checkbox\" />",
  },
}