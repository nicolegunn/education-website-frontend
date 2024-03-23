import styles from "./CheckBoxFilter.module.css";

export default function CheckBoxFilter({ title, boxes }) {
  const handleChange = (e) => {};

  return (
    <div className={styles.CheckBoxesContainer}>
      <div className={styles.CheckBoxesTitle}>{title.toUpperCase()}</div>
      {boxes.map((item) => (
        <div key={`${title}_${item}`} className={styles.CheckBoxRow}>
          <input
            type="checkbox"
            id={`${title}_${item}`}
            onChange={(e) => handleChange(e)}
            className={styles.CheckBox}
          ></input>
          <label className={styles.CheckBoxLabel}>
            {item
              .toLowerCase()
              .split(" ")
              .map((wrd) => wrd[0].toUpperCase() + wrd.substring(1))
              .join(" ")}
          </label>
        </div>
      ))}
    </div>
  );
}
