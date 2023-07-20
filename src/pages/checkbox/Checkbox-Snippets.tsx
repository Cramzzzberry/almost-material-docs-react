export const CheckboxSnippets = {
  "Checkbox": {
    preview: (
      <input className="check" type="checkbox" defaultChecked />
    ),
    htmlCode: "<input class=\"check\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"check\" type=\"checkbox\" checked />",
  },
  "Checkbox w/ Colors": {
    preview: (
      <>
      <input className="check check-primary" type="checkbox" defaultChecked />
      <input className="check check-secondary" type="checkbox" defaultChecked />
      <input className="check check-tertiary" type="checkbox" defaultChecked />
      <input className="check check-info" type="checkbox" defaultChecked />
      <input className="check check-warning" type="checkbox" defaultChecked />
      <input className="check check-success" type="checkbox" defaultChecked />
      <input className="check check-error" type="checkbox" defaultChecked />
      </>
    ),
    htmlCode: "<input class=\"check check-primary\" type=\"checkbox\" checked />\n<input class=\"check check-secondary\" type=\"checkbox\" checked />\n<input class=\"check check-tertiary\" type=\"checkbox\" checked />\n<input class=\"check check-info\" type=\"checkbox\" checked />\n<input class=\"check check-warning\" type=\"checkbox\" checked />\n<input class=\"check check-success\" type=\"checkbox\" checked />\n<input class=\"check check-error\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"check check-primary\" type=\"checkbox\" checked />\n<input className=\"check check-secondary\" type=\"checkbox\" checked />\n<input className=\"check check-tertiary\" type=\"checkbox\" checked />\n<input className=\"check check-info\" type=\"checkbox\" checked />\n<input className=\"check check-warning\" type=\"checkbox\" checked />\n<input className=\"check check-success\" type=\"checkbox\" checked />\n<input className=\"check check-error\" type=\"checkbox\" checked />",
  },
  "Checkbox Sizes": {
    preview: (
      <>
      <input className="check check-sm" type="checkbox" defaultChecked />
      <input className="check check-md" type="checkbox" defaultChecked />
      <input className="check check-lg" type="checkbox" defaultChecked />
      <input className="check check-xl" type="checkbox" defaultChecked />
      </>
    ),
    htmlCode: "<input class=\"check check-sm\" type=\"checkbox\" checked />\n<input class=\"check check-md\" type=\"checkbox\" checked />\n<input class=\"check check-lg\" type=\"checkbox\" checked />\n<input class=\"check check-xl\" type=\"checkbox\" checked />",
    jsxCode: "<input className=\"check check-sm\" type=\"checkbox\" checked />\n<input className=\"check check-md\" type=\"checkbox\" checked />\n<input className=\"check check-lg\" type=\"checkbox\" checked />\n<input className=\"check check-xl\" type=\"checkbox\" checked />",
  },
  "Disabled Checkbox": {
    preview: (
      <>
      <input className="check" type="checkbox" disabled />
      <input className="check" type="checkbox" defaultChecked disabled />
      </>
    ),
    htmlCode: "<input class=\"check\" type=\"checkbox\" disabled />\n<input class=\"check\" type=\"checkbox\" disabled checked />",
    jsxCode: "<input className=\"check\" type=\"checkbox\" disabled />\n<input className=\"check\" type=\"checkbox\" disabled checked />",
  },
  "Indeterminate Checkbox": {
    preview: (
      <div className="check bg-[#D9D9D9] border-black border-[4px] border-y-[9px] after:content-none"></div>
    ),
    htmlCode: "<script>\n  document.getElementById(\"my-checkbox\").indeterminate = true\n</script>\n<input class=\"check\" type=\"checkbox\" id=\"my-checkbox\" />",
    jsxCode: "<script>\n  document.getElementById(\"my-checkbox\").indeterminate = true\n</script>\n<input className=\"check\" type=\"checkbox\" id=\"my-checkbox\" />",
  },
}