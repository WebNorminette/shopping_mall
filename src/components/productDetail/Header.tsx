import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>back to all</p>
      <p className={styles.content}>next product</p>
    </div>
  );
}
