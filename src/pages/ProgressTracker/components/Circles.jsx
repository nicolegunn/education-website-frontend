import styles from "./Circles.module.css"

function Circles( {number, project} ) {
        return (
    <div className={styles.Container}>
        <div className={`${styles.CircleStyle} ${project ? styles.Complete : styles.Incomplete}`}>
            {number}
        </div>
    </div>
    )
}



  export default Circles;