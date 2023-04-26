import type { Option } from "../../../types";
import styles from "./Select.module.css"


export interface SelectProps {
  title: string;
  label: string;
  placeholder?: string;
  options: Option[];
  onChange?: (value: string) => void
}
export function Select({ title, label, placeholder, options, onChange }: SelectProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.form}>
        <label htmlFor="name">{label}<span className={styles.mandatory}>{" "}*</span></label>
        <select defaultValue={""} className={`${styles.select}`} name="template" id="template" onChange={(e) => {
          onChange && e.target.value && onChange(e.target.value)
        }}>
          {
            placeholder ? (
              <option
                value=""
                disabled
                className={styles.placeholder}
              >
                {placeholder}
              </option>
            ) : null
          }
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
        <p className={styles.mandatory}>Mandatory field</p>
      </div>
    </div>
  )
}