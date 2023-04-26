import { Outlet } from "react-router-dom";
import { SelectRemixVersion } from "./SelectRemixVersion";
import { useContext } from "react";
import { OptionsContext } from "../../ui/OptionsProvider";

export function SelectRemixVersionPage() {
  return (
    <Outlet />
  )
}

export function SelectRemixVersionIndexPage() {
  const { handleChange } = useContext(OptionsContext);
  return (
    <SelectRemixVersion
      onChange={(value) => {
        handleChange({ key: 'remixVersion', value });
      }}
    />
  )
}