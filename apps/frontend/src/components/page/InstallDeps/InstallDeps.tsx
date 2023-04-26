import { Radio, RadioProps } from "../../ui/Radio/Radio";

export interface InstallDepsProps {
  title?: string;
  subtitle?: string;
  onChange?: RadioProps["onChange"];
}
export function InstallDeps({
  title = `Install dependencies`,
  subtitle = `Do you want to install dependencies?`,
  onChange,
}: InstallDepsProps) {
  return (
    <Radio
      title={title}
      label={subtitle}
      onChange={onChange}
    />
  )
}