import React from "react"
import styles from "./Circles.module.css"

function Circles( {number, project} ) {
    //removed Array.from() , passing in props so that circles are created based on DB info
    return (
    <div className={styles.Container}>
        <div className={`${styles.CircleStyle} ${project ? styles.Complete : styles.Incomplete}`}>
            {number}
        </div>
    </div>
    )
}



  export default Circles;