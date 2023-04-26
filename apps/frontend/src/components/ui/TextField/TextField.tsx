import { useCallback, useState } from "react";
import styles from "./TextField.module.css"

export interface TextFieldProps {
  title: string;
  label: string;
  placeholder?: string;

  name?: string;
  onChange?: (value: string) => void;
  validator?: (value: string) => boolean;
}

export function TextField({ title, label, placeholder = "", name = "name", onChange, validator }: TextFieldProps) {
  const [localValue, setLocalValue] = useState<string>("")
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const result = validator && e.target.value.length > 0 ? validator(e.target.value) : true
    if (!result) return;
    onChange && onChange(e.target.value)
    setLocalValue(e.target.value)
  }, [onChange, validator])
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.form}>
        <label htmlFor={name}>{label}<span className={styles.mandatory}>{" "}*</span></label>
        <input type="text" name={name} value={localValue} placeholder={placeholder} onChange={handleChange} />
      </div>
    </div>
  )
}