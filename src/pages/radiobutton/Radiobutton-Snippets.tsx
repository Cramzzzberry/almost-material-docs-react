export const RadiobuttonSnippets = {
  "Radio Button": {
    preview: (
      <>
      <input type="radio" className="radio" name="default_radio" />
      <input type="radio" defaultChecked="checked" className="radio" name="default_radio" />
      </>
    ),
    htmlCode: "",
    jsxCode: "",
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
    htmlCode: "",
    jsxCode: "",
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
            <input type="radio" className="radio" name="default" />
            <input type="radio" defaultChecked="checked" className="radio" name="default" />
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
    htmlCode: "",
    jsxCode: "",
  }
}