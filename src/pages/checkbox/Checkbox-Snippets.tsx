export const CheckboxSnippets = {
  "Checkbox": {
    preview: (
      <input className="check" type="checkbox" defaultChecked />
    ),
    htmlCode: "<input class=\"checkbox\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"checkbox\" type=\"checkbox\" checked />",
  },
  "Checkbox w/ colors": {
    preview: (
      <>
      <input type="checkbox" className="check check-primary" defaultChecked />
      <input type="checkbox" className="check check-secondary" defaultChecked />
      <input type="checkbox" className="check check-tertiary" defaultChecked />
      <input type="checkbox" className="check check-info" defaultChecked />
      <input type="checkbox" className="check check-warning" defaultChecked />
      <input type="checkbox" className="check check-success" defaultChecked />
      <input type="checkbox" className="check check-error" defaultChecked />
      </>
    ),
    htmlCode: "<input class=\"check check-primary\" type=\"checkbox\" checked />\n<input class=\"check check-secondary\" type=\"checkbox\" checked />\n<input class=\"check check-tertiary\" type=\"checkbox\" checked />\n<input class=\"check check-info\" type=\"checkbox\" checked />\n<input class=\"check check-warning\" type=\"checkbox\" checked />\n<input class=\"check check-success\" type=\"checkbox\" checked />\n<input class=\"check check-error\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"check check-primary\" type=\"checkbox\" checked />\n<input className=\"check check-secondary\" type=\"checkbox\" checked />\n<input className=\"check check-tertiary\" type=\"checkbox\" checked />\n<input className=\"check check-info\" type=\"checkbox\" checked />\n<input className=\"check check-warning\" type=\"checkbox\" checked />\n<input className=\"check check-success\" type=\"checkbox\" checked />\n<input className=\"check check-error\" type=\"checkbox\" checked />",
  },
  "Checkbox sizes": {
    preview: (
      <>
      <input className="check --sm" type="checkbox" defaultChecked />
      <input className="check" type="checkbox" defaultChecked />
      <input className="check --lg" type="checkbox" defaultChecked />
      <input className="check --xl" type="checkbox" defaultChecked />
      </>
    ),
    htmlCode: "<input class=\"check --sm\" type=\"checkbox\" defaultChecked />\n<input class=\"check\" type=\"checkbox\" defaultChecked />\n<input class=\"check --lg\" type=\"checkbox\" defaultChecked />\n<input class=\"check --xl\" type=\"checkbox\" defaultChecked />",
    jsxCode: "<input className=\"check --sm\" type=\"checkbox\" defaultChecked />\n<input className=\"check\" type=\"checkbox\" defaultChecked />\n<input className=\"check --lg\" type=\"checkbox\" defaultChecked />\n<input className=\"check --xl\" type=\"checkbox\" defaultChecked />",
  },
  "Disabled Checkbox": {
    preview: (
      <>
      <input className="check" type="checkbox" disabled />
      <input className="check" type="checkbox" defaultChecked disabled />
      </>
    ),
    htmlCode: "<input type=\"checkbox\" defaultChecked=\"checked\" class=\"checkbox checkbox-primary\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" class=\"checkbox checkbox-secondary\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" class=\"checkbox checkbox-tertiary\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" class=\"checkbox checkbox-info\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" class=\"checkbox checkbox-warning\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" class=\"checkbox checkbox-success\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" class=\"checkbox checkbox-error\" />",
    jsxCode: "<input type=\"checkbox\" defaultChecked=\"checked\" className=\"checkbox checkbox-primary\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" className=\"checkbox checkbox-secondary\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" className=\"checkbox checkbox-tertiary\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" className=\"checkbox checkbox-info\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" className=\"checkbox checkbox-warning\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" className=\"checkbox checkbox-success\" />\n<input type=\"checkbox\" defaultChecked=\"checked\" className=\"checkbox checkbox-error\" />",
  },
  "Indeterminate Checkbox": {
    preview: (
      <input className="check" type="checkbox" id="indeterminate-checkbox" />
    ),
    htmlCode: "<script>\n  document.getElementById(\"my-checkbox\").indeterminate = true\n</script>\n<input class=\"check\" type=\"checkbox\" id=\"my-checkbox\" />",
    jsxCode: "<script>\n  document.getElementById(\"my-checkbox\").indeterminate = true\n</script>\n<input className=\"check\" type=\"checkbox\" id=\"my-checkbox\" />",
  },
}