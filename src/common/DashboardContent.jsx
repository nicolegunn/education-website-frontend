import styles from "./DashboardContent.module.css"

export default function DashboardContent(props) {

  return (
    <div className={styles.DashboardContentContainer}>
        <main className={styles.DashboardBackgroundContainer}>
            <div className={styles.DashboardMainContent}>{props.children}</div>
        </main>
    </div>
  )
}