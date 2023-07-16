export const SwitchSnippets = {
  "Switch": {
    preview: (
      <input type="checkbox" className="switch" defaultChecked />
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Switch w/ colors": {
    preview: (
      <>
      <input type="checkbox" className="switch switch-primary" defaultChecked />
      <input type="checkbox" className="switch switch-secondary" defaultChecked />
      <input type="checkbox" className="switch switch-tertiary" defaultChecked />
      <input type="checkbox" className="switch switch-info" defaultChecked />
      <input type="checkbox" className="switch switch-warning" defaultChecked />
      <input type="checkbox" className="switch switch-success" defaultChecked />
      <input type="checkbox" className="switch switch-error" defaultChecked />
      </>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Switch Sizes": {
    preview: (
      <>
      <input type="checkbox" className="switch switch-sm" defaultChecked />
      <input type="checkbox" className="switch" defaultChecked />
      <input type="checkbox" className="switch switch-lg" defaultChecked />
      <input type="checkbox" className="switch switch-xl" defaultChecked />
      </>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Disabled Switch": {
    preview: (
      <>
      <input type="checkbox" className="switch" disabled />
      <input type="checkbox" className="switch" disabled checked />
      </>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Indeterminate Switch": {
    preview: (
      <>
      <input type="checkbox" className="switch" id="indeterminate-switch"/>
      </>
    ),
    htmlCode: "",
    jsxCode: "",
  },
}