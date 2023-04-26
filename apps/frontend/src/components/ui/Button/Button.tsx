import styles from "./Button.module.css";

export interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}
export function Button({ text, disabled = false, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} className={`${styles.button} ${disabled && styles.disabled}`} onClick={onClick}>
      {text}
    </button>
  )
}