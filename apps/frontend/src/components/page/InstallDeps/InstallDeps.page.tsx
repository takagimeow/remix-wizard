import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { OptionsContext } from "../../ui/OptionsProvider";
import { InstallDeps } from "./InstallDeps";

export function InstallDepsPage() {
  return (
    <Outlet />
  )
}

export function InstallDepsIndexPage() {
  const { handleChange } = useContext(OptionsContext);
  return (
    <InstallDeps
      title="Install dependencies"
      subtitle="Do you want to install dependencies?"
      onChange={(value) => {
        handleChange({ key: 'install', value: value === "yes" });
      }}
    />
  )
}