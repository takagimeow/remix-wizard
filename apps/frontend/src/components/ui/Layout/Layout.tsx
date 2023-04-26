import { Button } from "../Button/Button";
import { SideNavigation, SideNavigationProps } from "../SideNavigation/SideNavigation";
import styles from "./Layout.module.css";

export interface LayoutProps {
  title?: string;
  routes: SideNavigationProps["routes"];
  children: React.ReactNode;

  isBackButtonDisabled?: boolean;
  isNextButtonDisabled?: boolean;
  onBack?: () => void;
  onNext?: () => void;
}
export function Layout({ title, routes, children, isBackButtonDisabled = false, isNextButtonDisabled = false, onBack, onNext }: LayoutProps) {
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['header']}`}>
        <h1>{title}</h1>
      </div>
      <div className={`${styles['sub-container']}`}>
        <div className={`${styles['left-container']}`}>
          <SideNavigation routes={routes} />
        </div>
        <div className={`${styles['right-container']}`}>
          <div className={`${styles.content}`}>
            {children}
          </div>
          <div className={`${styles.footer}`}>
            {
              routes.length > 1 && <Button disabled={isBackButtonDisabled} text="Back" onClick={onBack} />
            }
            <Button disabled={isNextButtonDisabled} text="Next" onClick={onNext} />
          </div>
        </div>
      </div>
    </div>
  )
}
