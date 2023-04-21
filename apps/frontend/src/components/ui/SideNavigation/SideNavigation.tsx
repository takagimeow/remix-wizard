import { SideNavigationItem, SideNavigationItemProps } from "./SideNavigationItem";
import styles from "./SideNavigation.module.css";

export interface SideNavigationProps {
  routes: Exclude<SideNavigationItemProps, "isCurrent" | "onClick">[];
  onClick?: (path: string) => void;
}

export function SideNavigation({ routes, onClick }: SideNavigationProps) {
  return (
    <nav className={styles.container}>
      {routes.map((route, index) => {
        const isCurrent = (routes.length - 1) === index;
        return <SideNavigationItem key={route.path} {...route} isCurrent={isCurrent} onClick={isCurrent ? undefined : onClick} />
      })}
    </nav>
  )
}