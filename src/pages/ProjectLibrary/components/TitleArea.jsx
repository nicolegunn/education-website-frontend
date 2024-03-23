import styles from "./TitleArea.module.css";

export default function TitleArea() {
  return (
    <div>
      <h1 className={styles.LargeHeading}>PROJECTS</h1>
      <p className={styles.TitleParagraph}>
        Welcome to the project library. You can use the filters on the right to
        help you search for specific projects.
      </p>
    </div>
  );
}
