import SolidBadge from "./Solid-Badge";
import OutlinedBadge from "./Outlined-Badge";
import DotBadge from "./Dot-Badge";
import ColoredBadge from "./Colored-Badge";
import BadgeSizes from "./Badge-Sizes";

export default function Badges() {
  return (
    <>
    <div className="card card-secondary p-32 mb-4">
      <h1 className="font-bold">Badges</h1>
      <h4>Blah blah here</h4>
    </div>

    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <SolidBadge />
        <OutlinedBadge />
        <DotBadge />
        <ColoredBadge />
        <BadgeSizes />
      </div>
    </div>
    </>
  )
}