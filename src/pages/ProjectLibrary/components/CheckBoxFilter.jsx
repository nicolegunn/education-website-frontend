import styles from "./CheckBoxFilter.module.css";

export default function CheckBoxFilter({ title, boxes }) {
  return (
    <div className={styles.CheckBoxesContainer}>
      <p>{title.toUpperCase()}</p>
      <hr></hr>
      {boxes.map((item) => (
        <div key={`${title}_${item}`}>
          <input type="checkbox"></input>
          <label>{item}</label>
        </div>
      ))}
    </div>
  );
}
