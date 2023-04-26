import { Outlet } from "react-router-dom";
import { SelectLanguage } from "./SelectLanguage";
import { useContext } from "react";
import { OptionsContext } from "../../ui/OptionsProvider/OptionsProvider";

export function SelectLanguagePage() {
  return (
    <Outlet />
  )
}
export function SelectLanguageIndexPage() {
  const { handleChange } = useContext(OptionsContext);
  return (
    <SelectLanguage
      title="Language"
      subtitle="Which language do you want to use?"
      onChange={(value) => {
        handleChange({ key: 'language', value });
      }}
     />
  )
}