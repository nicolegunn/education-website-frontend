import styles from "./CheckBoxFilter.module.css";

export default function CheckBoxFilter({ name, title, boxes, handleFilter }) {
  function handleChange(e) {
    const id = e.target.id;
    const name = e.target.name;
    const selected = e.target.checked;
    handleFilter(id, name, selected);
  }

  return (
    <div className={styles.CheckBoxesContainer}>
      <div className={styles.CheckBoxesTitle}>{title.toUpperCase()}</div>
      {boxes.map((item) => (
        <div key={`${title}_${item}`} className={styles.CheckBoxRow}>
          <input
            type="checkbox"
            name={name}
            id={item}
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
