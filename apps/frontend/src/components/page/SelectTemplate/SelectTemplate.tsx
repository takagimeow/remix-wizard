import type { Option } from "../../../types";
import { templates } from "../../../utils/constants";
import { Select, SelectProps } from "../../ui/Select/Select";

export interface SelectTemplateProps {
  title?: string;
  subtitle?: string;
  options?: Option[];
  onChange?: SelectProps["onChange"];
}

export function SelectTemplate({
  title = `Language`,
  subtitle = `Which language do you want to use?`,
  options = templates,
  onChange,
}: SelectTemplateProps) {
  return (
    <Select
      title={title}
      label={subtitle}
      placeholder="Please select a template"
      options={options}
      onChange={onChange}
    />
  )
}