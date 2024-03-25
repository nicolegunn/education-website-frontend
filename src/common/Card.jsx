import styles from "./Card.module.css";

export default function Card(props) {
    const classes = props.className;

  return (
    <div className={`${styles.card} ${classes}`}>{props.children}</div>
  )
}