import SolidButton from "./Solid-Button";
import IconButton from "./Icon-Button";
import OutlinedButton from "./Outlined-Button";
import GhostButton from "./Ghost-button";
import LinkButton from "./Link-button";
import CircleButton from "./Circle-button";
import ColoredButton from "./Colored-button";
import ButtonSizes from "./Button-Sizes";
import ActiveButton from "./Active-Button";
import DisabledButton from "./Disabled-Button";

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
        <LinkButton />
        <CircleButton />
        <ColoredButton />
        <ButtonSizes />
        <ActiveButton />
        <DisabledButton />
      </div>
    </div>
    </>
  )
}