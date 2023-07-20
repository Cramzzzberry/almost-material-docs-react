export const RadiobuttonSnippets = {
  "Radio Button": {
    preview: (
      <>
      <input className="radio" type="radio" name="default" />
      <input className="radio" type="radio" name="default" defaultChecked/>
      </>
    ),
    htmlCode: "<input class=\"radio\" type=\"radio\" />\n<input class=\"radio\" type=\"radio\" checked/>",
    jsxCode: "<input className=\"radio\" type=\"radio\" />\n<input className=\"radio\" type=\"radio\" checked/>",
  },
  "Radio Button w/ Colors": {
    preview: (
      <>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 items-center w-48">
          Primary
          <div className="flex flex-row gap-2 justify-end">
            <input type="radio" className="radio radio-primary" name="primary" />
            <input type="radio" defaultChecked="checked" className="radio radio-primary" name="primary" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Secondary
          <div className="flex flex-row gap-2 justify-end">
            <input type="radio" className="radio radio-secondary" name="secondary" />
            <input type="radio" defaultChecked="checked" className="radio radio-secondary" name="secondary" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Tertiary
          <div className="flex flex-row gap-2 justify-end">
            <input type="radio" className="radio radio-tertiary" name="tertiary" />
            <input type="radio" defaultChecked="checked" className="radio radio-tertiary" name="tertiary" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Info
          <div className="flex flex-row gap-2 justify-end">
            <input type="radio" className="radio radio-info" name="info" />
            <input type="radio" defaultChecked="checked" className="radio radio-info" name="info" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Warning
          <div className="flex flex-row gap-2 justify-end">
            <input type="radio" className="radio radio-warning" name="warning" />
            <input type="radio" defaultChecked="checked" className="radio radio-warning" name="warning" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Success
          <div className="flex flex-row gap-2 justify-end">
            <input type="radio" className="radio radio-success" name="success" />
            <input type="radio" defaultChecked="checked" className="radio radio-success" name="success" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Error
          <div className="flex flex-row gap-2 justify-end">
            <input type="radio" className="radio radio-error" name="error" />
            <input type="radio" defaultChecked="checked" className="radio radio-error" name="error" />
          </div>
        </div>
      </div>
      </>
    ),
    htmlCode: "<!-- Primary -->\n<input class=\"radio radio-primary\" type=\"radio\" />\n<input class=\"radio radio-primary\" type=\"radio\" checked />\n\n<!-- Secondary -->\n<input class=\"radio radio-secondary\" type=\"radio\" />\n<input class=\"radio radio-secondary\" type=\"radio\" checked />\n\n<!-- Tertiary -->\n<input class=\"radio radio-tertiary\" type=\"radio\" />\n<input class=\"radio radio-tertiary\" type=\"radio\" checked />\n\n<!-- Info -->\n<input class=\"radio radio-info\" type=\"radio\" />\n<input class=\"radio radio-info\" type=\"radio\" checked />\n\n<!-- Warning -->\n<input class=\"radio radio-warning\" type=\"radio\" />\n<input class=\"radio radio-warning\" type=\"radio\" checked />\n\n<!-- Success -->\n<input class=\"radio radio-success\" type=\"radio\" />\n<input class=\"radio radio-success\" type=\"radio\" checked />\n\n<!-- Error -->\n<input class=\"radio radio-error\" type=\"radio\" />\n<input class=\"radio radio-error\" type=\"radio\" checked />",
    jsxCode: "{/* Primary */}\n<input className=\"radio radio-primary\" type=\"radio\" />\n<input className=\"radio radio-primary\" type=\"radio\" checked />\n\n{/* Secondary */}\n<input className=\"radio radio-secondary\" type=\"radio\" />\n<input className=\"radio radio-secondary\" type=\"radio\" checked />\n\n{/* Tertiary */}\n<input className=\"radio radio-tertiary\" type=\"radio\" />\n<input className=\"radio radio-tertiary\" type=\"radio\" checked />\n\n{/* Info */}\n<input className=\"radio radio-info\" type=\"radio\" />\n<input className=\"radio radio-info\" type=\"radio\" checked />\n\n{/* Warning */}\n<input className=\"radio radio-warning\" type=\"radio\" />\n<input className=\"radio radio-warning\" type=\"radio\" checked />\n\n{/* Success */}\n<input className=\"radio radio-success\" type=\"radio\" />\n<input className=\"radio radio-success\" type=\"radio\" checked />\n\n{/* Error */}\n<input className=\"radio radio-error\" type=\"radio\" />\n<input className=\"radio radio-error\" type=\"radio\" checked />",
  },
  "Radio Button Sizes": {
    preview: (
      <>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 items-center w-48">
          Small
          <div className="flex flex-row gap-2 justify-center">
            <input type="radio" className="radio radio-sm" name="small" />
            <input type="radio" defaultChecked="checked" className="radio radio-sm" name="small" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Default
          <div className="flex flex-row gap-2 justify-center">
            <input type="radio" className="radio radio-md" name="medium" />
            <input type="radio" defaultChecked="checked" className="radio" name="medium" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          Large
          <div className="flex flex-row gap-2 justify-center">
            <input type="radio" className="radio radio-lg" name="large" />
            <input type="radio" defaultChecked="checked" className="radio radio-lg" name="large" />
          </div>
        </div>
        <div className="grid grid-cols-2 items-center w-48">
          RAWRRRR
          <div className="flex flex-row gap-2 justify-center">
            <input type="radio" className="radio radio-xl" name="xlarge" />
            <input type="radio" defaultChecked="checked" className="radio radio-xl" name="xlarge" />
          </div>
        </div>
      </div>
      </>
    ),
    htmlCode: "<!-- sm -->\n<input class=\"radio radio-sm\" type=\"radio\" />\n<input class=\"radio radio-sm\" type=\"radio\" checked />\n\n<!-- Default -->\n<input class=\"radio radio-md\" type=\"radio\" />\n<input class=\"radio\" type=\"radio\" checked />\n\n<!-- lg -->\n<input class=\"radio radio-lg\" type=\"radio\" />\n<input class=\"radio radio-lg\" type=\"radio\" checked />\n\n<!-- xl -->\n<input class=\"radio radio-xl\" type=\"radio\" />\n<input class=\"radio radio-xl\" type=\"radio\" checked />",
    jsxCode: "{/* sm */}\n<input className=\"radio radio-sm\" type=\"radio\" />\n<input className=\"radio radio-sm\" type=\"radio\" checked />\n\n{/* Default */}\n<input className=\"radio radio-md\" type=\"radio\" />\n<input className=\"radio\" type=\"radio\" checked />\n\n{/* lg */}\n<input className=\"radio radio-lg\" type=\"radio\" />\n<input className=\"radio radio-lg\" type=\"radio\" checked />\n\n{/* xl */}\n<input className=\"radio radio-xl\" type=\"radio\" />\n<input className=\"radio radio-xl\" type=\"radio\" checked />",
  },
  "Disabled Radio Button": {
    preview: (
      <>
      <input type="radio" className="radio" name="disabled_radio" disabled />
      <input type="radio" className="radio" name="disabled_radio" disabled defaultChecked />
      </>
    ),
    htmlCode: "<input class=\"radio\" type=\"radio\" disabled />\n<input class=\"radio\" type=\"radio\" disabled checked />",
    jsxCode: "<input className=\"radio\" type=\"radio\" disabled />\n<input className=\"radio\" type=\"radio\" disabled checked />",
  },
}