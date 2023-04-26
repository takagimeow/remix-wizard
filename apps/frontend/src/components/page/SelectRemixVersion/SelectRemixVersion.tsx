import { useMemo } from "react";
import { remixVersions } from "../../../utils/constants/versions";
import { Select } from "../../ui/Select/Select";
import type { Option } from "../../../types";

export interface SelectRemixVersionProps {
  title?: string;
  subtitle?: string;
  onChange?: (value: string) => void;
}

export function SelectRemixVersion({
  title = `Remix Version`,
  subtitle = `Please select the version of Remix to use`,
  onChange
}: SelectRemixVersionProps) {
  const options: Option[] = useMemo(() => {
    const result = remixVersions.map((version) => {
      return {
        value: version,
        name: version
      }
    });
    return result.reverse();
  }, [])
  return (
    <Select
      title={title}
      label={subtitle}
      placeholder="Please select a version"
      options={options}
      onChange={onChange}
    />
  )
}