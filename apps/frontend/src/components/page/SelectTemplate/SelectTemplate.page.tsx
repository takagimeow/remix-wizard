import { Outlet } from "react-router-dom";
import { SelectTemplate } from "./SelectTemplate";
import { useContext } from "react";
import { OptionsContext } from "../../ui/OptionsProvider/OptionsProvider";
import { stacks, templates } from "../../../utils/constants";

export function SelectTemplatePage() {
  return (
    <Outlet />
  )
}

export function SelectTemplateIndexPage() {
  const { appType, handleChange } = useContext(OptionsContext);
  return (
    <SelectTemplate
      title="Template"
      subtitle="Which template do you want to use?"
      options={
        appType === "template" ? templates : stacks
      }
      onChange={(value) => {
        handleChange({ key: 'appTemplate', value });
      }}
     />
  )
}