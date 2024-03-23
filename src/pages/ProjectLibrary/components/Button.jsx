import styles from "./Button.module.css";

export default function Button({ label, color = "#0e81ff" }) {
  return (
    <button className={styles.Button} style={{ backgroundColor: color }}>
      {label}
    </button>
  );
}
