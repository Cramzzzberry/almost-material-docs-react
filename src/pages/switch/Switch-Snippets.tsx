export const SwitchSnippets = {
  "Switch": {
    preview: (
      <input className="switch" type="checkbox" defaultChecked />
    ),
    htmlCode: "<input class=\"switch\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"switch\" type=\"checkbox\" checked />",
  },
  "Switch w/ Colors": {
    preview: (
      <>
      <input className="switch switch-primary" type="checkbox" defaultChecked />
      <input className="switch switch-secondary" type="checkbox" defaultChecked />
      <input className="switch switch-tertiary" type="checkbox" defaultChecked />
      <input className="switch switch-info" type="checkbox" defaultChecked />
      <input className="switch switch-warning" type="checkbox" defaultChecked />
      <input className="switch switch-success" type="checkbox" defaultChecked />
      <input className="switch switch-error" type="checkbox" defaultChecked />
      </>
    ),
    htmlCode: "<input class=\"switch switch-primary\" type=\"checkbox\" checked />\n<input class=\"switch switch-secondary\" type=\"checkbox\" checked />\n<input class=\"switch switch-tertiary\" type=\"checkbox\" checked />\n<input class=\"switch switch-info\" type=\"checkbox\" checked />\n<input class=\"switch switch-warning\" type=\"checkbox\" checked />\n<input class=\"switch switch-success\" type=\"checkbox\" checked />\n<input class=\"switch switch-error\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"switch switch-primary\" type=\"checkbox\" checked />\n<input className=\"switch switch-secondary\" type=\"checkbox\" checked />\n<input className=\"switch switch-tertiary\" type=\"checkbox\" checked />\n<input className=\"switch switch-info\" type=\"checkbox\" checked />\n<input className=\"switch switch-warning\" type=\"checkbox\" checked />\n<input className=\"switch switch-success\" type=\"checkbox\" checked />\n<input className=\"switch switch-error\" type=\"checkbox\" checked />",
  },
  "Switch Sizes": {
    preview: (
      <>
      <input className="switch switch-sm" type="checkbox" defaultChecked />
      <input className="switch switch-md" type="checkbox" defaultChecked />
      <input className="switch switch-lg" type="checkbox" defaultChecked />
      <input className="switch switch-xl" type="checkbox" defaultChecked />
      </>
    ),
    htmlCode: "<input class=\"switch switch-sm\" type=\"checkbox\" checked />\n<input class=\"switch switch-md\" type=\"checkbox\" checked />\n<input class=\"switch switch-lg\" type=\"checkbox\" checked />\n<input class=\"switch switch-xl\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"switch switch-sm\" type=\"checkbox\" checked />\n<input className=\"switch switch-md\" type=\"checkbox\" checked />\n<input className=\"switch switch-lg\" type=\"checkbox\" checked />\n<input className=\"switch switch-xl\" type=\"checkbox\" checked />",
  },
  "Disabled Switch": {
    preview: (
      <>
      <input className="switch" type="checkbox" disabled />
      <input className="switch" type="checkbox" disabled checked />
      </>
    ),
    htmlCode: "<input class=\"switch\" type=\"checkbox\" disabled />\n<input class=\"switch\" type=\"checkbox\" disabled checked />",
    jsxCode: "<input className=\"switch\" type=\"checkbox\" disabled />\n<input className=\"switch\" type=\"checkbox\" disabled checked />",
  },
  "Indeterminate Switch": {
    preview: (
      <>
      <div className="switch after:left-[calc(50%-0.875rem/2)]"></div>
      </>
    ),
    htmlCode: "<script>\n  document.getElementById(\"my-switch\").indeterminate = true\n</script>\n<input class=\"switch\" type=\"checkbox\" id=\"\"my-switch\"/>",
    jsxCode: "<script>\n  document.getElementById(\"my-switch\").indeterminate = true\n</script>\n<input className=\"switch\" type=\"checkbox\" id=\"\"my-switch\"/>",
  },
}