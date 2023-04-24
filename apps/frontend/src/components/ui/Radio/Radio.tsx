import { useCallback } from "react";
import styles from "./Radio.module.css"

export interface RadioProps {
  title: string;
  label: string;

  name?: string;
  onChange?: (value: string) => void
}

export function Radio({ title, label, name = "install", onChange }: RadioProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>)=> {
    onChange && e.target.id && onChange(e.target.id)
  }, [onChange])
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{label}</p>
      <div className={styles.form}>
        <div>
          <input id="yes" type="radio" name={name}
            onChange={handleChange}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input defaultChecked id="no" type="radio" name={name} onChange={handleChange} />
          <label htmlFor="no">No</label>
        </div>
      </div>
    </div>
  )
}