import styles from "./Button.module.css";

export default function Button({ children, style, handleClick }) {
  return (
    <button
      className={styles.Button}
      style={style}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
}
