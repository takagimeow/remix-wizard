import { NavLink } from "react-router-dom";
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
        <div className={`${styles.indicator} ${isCurrent ? null : styles['link-indicator']}`}><span>{isCurrent ? "◯" : "●"}</span></div>
        {!isCurrent && <div className={`${styles.vl}`} />}
      </div>
      <div className={`${styles.subcontainer} ${styles['right-subcontainer']}`}>
        <div className={`${styles['title-container']}`}>
          {
            isCurrent ? (
              <a className={`${styles.link} ${styles.title}`}>{title}</a>
            ) : (
              <NavLink to={`${path}`} className={`${styles.link} ${styles.title} ${styles['link-title']}`}>{title}</NavLink>
            )
          }
        </div>
        {<p className={`${description ? styles.subtitle : styles["invisible-subtitle"]}`}>{description}</p>}
      </div>
    </div>
  )
}