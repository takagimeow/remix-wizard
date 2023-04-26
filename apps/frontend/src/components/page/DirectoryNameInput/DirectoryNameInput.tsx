import { useCallback } from "react";
import { TextField } from "../../ui/TextField";

export interface DirectoryNameInputProps {
  title?: string;
  subtitle?: string;
  onChange?: (value: string) => void;
}

export function DirectoryNameInput({
  title = "Directory name",
  subtitle = "Where would you like to create your app?",
  onChange
}: DirectoryNameInputProps) {
  const validator = useCallback(function (value: string) {
    if (!value.match(/^((\.?\/?)?([a-z0-9_-]*))+$/)) {
      return false;
    }
    return true;
  }, []);
  return (
    <TextField
      title={title}
      label={subtitle}
      placeholder="./my-remix-app"
      onChange={onChange}
      validator={validator}
    />
  )
}