import SolidButton from "./Solid-Button";
import IconButton from "./Icon-Button";
import OutlinedButton from "./Outlined-Button";
import GhostButton from "./ghost-button";

export default function Buttons() {
  return (
    <>
    <div className="card card-secondary p-32 mb-4">
      <h1 className="font-bold">Buttons</h1>
      <h4>It allows the user to take actions</h4>
    </div>

    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <SolidButton />
        <IconButton />
        <OutlinedButton />
        <GhostButton />

        {/* link button */}
        <div className="flex flex-col gap-4">
          {/* first row */}
          <div className="flex flex-row gap-4 mx-4 justify-between">
            <h3 className="font-semibold">Link Button</h3>
            <div className="flex flex-row gap-2 items-center">
              <button className="btn btn-surface btn-outlined btn-sm">Preview</button>
              <button className="btn btn-surface btn-outlined btn-sm">HTML</button>
              <button className="btn btn-surface btn-outlined btn-sm">JSX</button>
            </div>
          </div>

          {/* second row */}
          <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
            <button className="btn btn-link">Link</button>
          </div>
        </div>

        {/* icon button */}
        <div className="flex flex-col gap-4">
          {/* first row */}
          <div className="flex flex-row gap-4 mx-4 justify-between">
            <h3 className="font-semibold">Circle Button</h3>
            <div className="flex flex-row gap-2 items-center">
              <button className="btn btn-surface btn-outlined btn-sm">Preview</button>
              <button className="btn btn-surface btn-outlined btn-sm">HTML</button>
              <button className="btn btn-surface btn-outlined btn-sm">JSX</button>
            </div>
          </div>

          {/* second row */}
          <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
            <button className="btn btn-circle">
              <span className="material-icons-round">
                search
              </span>
            </button>
          </div>
        </div>

        {/* buttons with colors */}
        <div className="flex flex-col gap-4">
          {/* first row */}
          <div className="flex flex-row gap-4 mx-4 justify-between">
            <h3 className="font-semibold">Buttons w/ Colors</h3>
            <div className="flex flex-row gap-2 items-center">
              <button className="btn btn-surface btn-outlined btn-sm">Preview</button>
              <button className="btn btn-surface btn-outlined btn-sm">HTML</button>
              <button className="btn btn-surface btn-outlined btn-sm">JSX</button>
            </div>
          </div>

          {/* second row */}
          <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-surface">Surface</button>
            <button className="btn btn-info">Info</button>
            <button className="btn btn-warning">Warning</button>
            <button className="btn btn-success">Success</button>
            <button className="btn btn-error">Error</button>
          </div>
        </div>

        {/* button sizes */}
        <div className="flex flex-col gap-4">
          {/* first row */}
          <div className="flex flex-row gap-4 mx-4 justify-between">
            <h3 className="font-semibold">Button Sizes</h3>
            <div className="flex flex-row gap-2 items-center">
              <button className="btn btn-surface btn-outlined btn-sm">Preview</button>
              <button className="btn btn-surface btn-outlined btn-sm">HTML</button>
              <button className="btn btn-surface btn-outlined btn-sm">JSX</button>
            </div>
          </div>

          {/* second row */}
          <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
            <button className="btn btn-sm">Small</button>
            <button className="btn">Default</button>
            <button className="btn btn-lg">Large</button>
          </div>
        </div>

        {/* button active */}
        <div className="flex flex-col gap-4">
          {/* first row */}
          <div className="flex flex-row gap-4 mx-4 justify-between">
            <h3 className="font-semibold">Active Button</h3>
            <div className="flex flex-row gap-2 items-center">
              <button className="btn btn-surface btn-outlined btn-sm">Preview</button>
              <button className="btn btn-surface btn-outlined btn-sm">HTML</button>
              <button className="btn btn-surface btn-outlined btn-sm">JSX</button>
            </div>
          </div>

          {/* second row */}
          <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
            <button className="btn active">Default</button>
            <button className="btn btn-primary active">Primary</button>
            <button className="btn btn-secondary active">Secondary</button>
            <button className="btn btn-surface active">Surface</button>
            <button className="btn btn-info active">Info</button>
            <button className="btn btn-warning active">Warning</button>
            <button className="btn btn-success active">Success</button>
            <button className="btn btn-error active">Error</button>
            <button className="btn btn-ghost active">Ghost</button>
            <button className="btn btn-link active">Link</button>
          </div>
        </div>

        {/* button disabled */}
        <div className="flex flex-col gap-4">
          {/* first row */}
          <div className="flex flex-row gap-4 mx-4 justify-between">
            <h3 className="font-semibold">Disabled Button</h3>
            <div className="flex flex-row gap-2 items-center">
              <button className="btn btn-surface btn-outlined btn-sm">Preview</button>
              <button className="btn btn-surface btn-outlined btn-sm">HTML</button>
              <button className="btn btn-surface btn-outlined btn-sm">JSX</button>
            </div>
          </div>

          {/* second row */}
          <div className="card card-primary p-5 flex flex-row gap-2 justify-center items-center">
            <button className="btn" disabled="disabled">Disabled</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}