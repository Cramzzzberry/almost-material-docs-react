export default function SolidButton() {
  const [tab, setTab] = useState("preview");

  function onOptionChange(value) {
    setTab(value)
  }

  return (
    <>
    {/* solid button */}
    <div className="flex flex-col gap-4">
      {/* first row */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <h3 className="font-semibold">Solid Button</h3>
        <div className="flex flex-row gap-2 items-center">
          <input type="radio" name="tab" id="preview" 
            defaultChecked
            checked={tab === "preview"}
            onChange={onOptionChange(tab)}/>
          <input type="radio" name="tab" id="html" />
          <input type="radio" name="tab" id="jsx" />

          <label htmlFor="preview" className="btn btn-surface btn-outlined btn-sm">Preview</label>
          <label htmlFor="html" className="btn btn-surface btn-outlined btn-sm">HTML</label>
          <label htmlFor="jsx" className="btn btn-surface btn-outlined btn-sm">JSX</label>
        </div>
      </div>

      {/* second row */}
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn">Solid</button>
      </div>
    </div>
    </>
  )
}