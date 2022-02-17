import React from "react";
import styles from "../styles/SearchForm.module.css";

export default function SearchForm() {
  return (
    <form className={styles.container}>
      <div className={styles.form}>
        <div className={styles.title}>
          <h1>Programisto</h1>
        </div>
        <div className={styles.inner_form}>
          <label id="lb_keywords" className={styles.label}>
            Keywords (separated with commas)
          </label>
          <input id="in_keywords" type="text" className={styles.text_input} />
          <label id="lb_location" className={styles.label}>
            Location (country or city)
          </label>
          <input id="in_location" type="text" className={styles.text_input} />
          <input type="submit" value="Search" className={styles.button} />
        </div>
      </div>
    </form>
  );
}
