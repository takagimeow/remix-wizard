import { Outlet } from "react-router-dom";
import { SelectAppType } from "./SelectAppType";
import { OptionsContext } from "../../ui/OptionsProvider";
import { useContext } from "react";

export function SelectAppTypePage() {
  return (
    <Outlet />
  );
}

export function SelectAppTypeIndexPage() {
  const { handleChange } = useContext(OptionsContext);
  return (
    <SelectAppType
      onChange={(value) => {
        handleChange({ key: 'appType', value });
      }}
    />  
  )
}