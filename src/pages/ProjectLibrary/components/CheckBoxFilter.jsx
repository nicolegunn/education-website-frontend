import styles from "../ProjectLibrary.module.css";

export default function CheckBoxFilter({ title, boxes }) {
  return (
    <div className={styles.CheckBoxesContainer}>
      <p>{title.toUpperCase()}</p>
      <hr></hr>
      {boxes.map((item) => <div><input type="checkbox"></input><label>{ item}</label></div>)}
    </div>
  );
}
