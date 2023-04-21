import styles from "./SideNavigationItem.module.css";

export interface SideNavigationItemProps {
  path: string;
  title: string;
  description?: string;
  isCurrent?: boolean;
  onClick?: (path: string) => void;
}

export function SideNavigationItem({ path, title, description, isCurrent = false, onClick }: SideNavigationItemProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.subcontainer} ${styles['left-subcontainer']}`}>
        <p className={`${styles.indicator} ${isCurrent ? null : styles['link-indicator']}`}>{isCurrent ? "◯" : "●"}</p>
        {!isCurrent && <div className={`${styles.vl}`} />}
      </div>
      <div className={styles.subcontainer}>
        <button className={`${styles.button} ${styles.title} ${isCurrent ? null : styles['link-title']}`} onClick={() => {
          onClick && onClick(path);
        }}>{title}</button>
        {<p className={`${description ? styles.subtitle : styles["invisible-subtitle"]}`}>{description}</p>}
      </div>
    </div>
  )
}