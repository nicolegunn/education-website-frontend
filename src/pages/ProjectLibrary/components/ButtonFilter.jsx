import { useState } from "react";
import styles from "./ButtonFilter.module.css";

export default function ButtonFilter({
  buttons,
  name,
  handleFilter,
  label = "",
  initialSelection = buttons[0],
}) {
  const [active, setActive] = useState(String(initialSelection));

  function handleClick(e) {
    const id = e.target.id;
    const name = e.target.name;
    setActive(id);
    handleFilter(id, name);
  }

  return (
    <div className={styles.ButtonContainer}>
      {label && <div className={styles.ButtonLabel}>{label}</div>}
      {buttons.map((btn) => {
        return (
          <button
            key={btn} //I've used btn label as key, as these should always be unique.
            id={btn}
            name={name}
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
