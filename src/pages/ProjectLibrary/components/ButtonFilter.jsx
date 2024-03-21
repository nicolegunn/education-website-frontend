import styles from "./ButtonFilter.module.css";
export default function ButtonFilter({ handleClick }) {
  return (
    <div>
      <button onClick={(evt) => handleClick(evt)}>Buttons</button>
    </div>
  );
}
