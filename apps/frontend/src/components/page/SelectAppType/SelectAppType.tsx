import React from "react";
import styles from "./SelectAppType.module.css";
import { appTypes } from "../../../utils/constants";

export interface SelectAppTypeProps {
  title?: string;
  subtitles?: string[];
  onChange?: (value: string) => void;
}

export function SelectAppType({
  title = `Select App Type`,
  subtitles = [
    `When you create a project using a template, you become the code owner and, as such, you are responsible for any required updates or fixes. `,
    `The project will contain the relevant files and configurations required to create your application.`,
  ],
  onChange,
}: SelectAppTypeProps) {
  const [selectedValue, setSelectedValue] = React.useState<string | undefined>(undefined);
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={`${styles.description}`}>
        {
          subtitles.map((subtitle, index) => (
            (
              <p key={`${subtitle}-${index}`}>{subtitle}</p>
            )
          ))
        }
      </div>
      <div className={styles.form}>
        <p className={styles.label}>App Types <span className={`${styles.mandatory}`}>*</span></p>
        <div className={styles.subcontainer}>
          {
            appTypes.map((item) => {
              return (
                <button className={`${selectedValue === item.value ? styles.selected : ""}`} key={item.value} onClick={() => {
                  onChange && onChange(item.value);
                  setSelectedValue(item.value);
                }}>
                  <div>
                    <h2>
                      {item.name}
                    </h2>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}