import styles from "./DashboardContent.module.css"

export default function DashboardContent(props) {

  return (
    <div className={styles.contentContainer}>
        <main className={styles.backgroundContainer}>
            <div className={styles.mainContent}>{props.children}</div>
        </main>
    </div>
  )
}