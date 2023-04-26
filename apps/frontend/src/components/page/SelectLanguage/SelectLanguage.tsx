import { languages } from "../../../utils/constants";
import { Select, SelectProps } from "../../ui/Select/Select";

export interface SelectLanguageProps {
  title?: string;
  subtitle?: string;
  onChange?: SelectProps["onChange"];
}

export function SelectLanguage({
  title = `Language`,
  subtitle = `Which language do you want to use?`,
  onChange,
}: SelectLanguageProps) {
  return (
    <Select
      title={title}
      label={subtitle}
      placeholder="Please select a language"
      options={languages}
      onChange={onChange}
    />
  )
}