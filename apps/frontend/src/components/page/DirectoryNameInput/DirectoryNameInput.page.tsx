import { Outlet } from "react-router-dom";
import { DirectoryNameInput } from "./DirectoryNameInput";
import { OptionsContext } from "../../ui/OptionsProvider";
import { useContext } from "react";

export function DirectoryNameInputPage() {
  return (
    <Outlet />
  )
}

export function DirectoryNameInputIndexPage() {
  const { handleChange } = useContext(OptionsContext);
  return (
    <DirectoryNameInput
      onChange={(value) => {
        handleChange({ key: 'dir', value });
      }}
     />
  )
}