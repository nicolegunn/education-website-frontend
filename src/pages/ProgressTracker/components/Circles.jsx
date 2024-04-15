import React from "react"
import styles from "./Circles.module.css"
function Circles() {
    const numbers = Array.from({ length: 15}, (_, index) => index + 1);

    return (
        <div className={styles.Container}>
            {numbers.map((number) => (
                <div key={number} className={styles.CircleStyle}>
                    {number}
                </div>
            ))}
        </div>
    )
}



  export default Circles;