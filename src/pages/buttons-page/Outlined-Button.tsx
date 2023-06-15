export default function OutlinedButton() {
  return (
    <>
    {/* outlined button */}
    <div className="flex flex-col gap-4">
      {/* first row */}
      <div className="flex flex-row gap-4 mx-4 justify-between">
        <h3 className="font-semibold">Outlined Button</h3>
        <div className="flex flex-row gap-2 items-center">
          <button className="btn btn-surface btn-outlined btn-sm">Preview</button>
          <button className="btn btn-surface btn-outlined btn-sm">HTML</button>
          <button className="btn btn-surface btn-outlined btn-sm">JSX</button>
        </div>
      </div>

      {/* second row */}
      <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
        <button className="btn btn-outlined">Outlined</button>
      </div>
    </div>
    </>
  )
}