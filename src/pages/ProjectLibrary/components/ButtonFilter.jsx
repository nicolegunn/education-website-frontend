import { useState } from "react";
import styles from "./ButtonFilter.module.css";

export default function ButtonFilter({
  buttons,
  handleFilter,
  label = "",
  initialSelection = 0,
}) {
  const [active, setActive] = useState(String(buttons[initialSelection]));

  function handleClick(e) {
    setActive(e.target.id);
  }

  return (
    <div className={styles.ButtonContainer}>
      {label && <div className={styles.ButtonLabel}>{label}</div>}
      {buttons.map((btn, index) => {
        return (
          <button
            key={btn} //I've used btn label as key, as these should always be unique.
            id={btn}
            onClick={(e) => handleClick(e)}
            className={
              active === String(btn)
                ? `${styles.Button} ${styles.Active}`
                : styles.Button
            }
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}
