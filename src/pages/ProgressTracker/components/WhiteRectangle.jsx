import React from "react";
import Circles from "./Circles.jsx"
import styles from "./WhiteRectangle.module.css"


function WhiteRectangle ({name, level}) {
    
    
    return (
        <div className={styles.Style}>
            <div className={styles.NameCont}>
                {name} <br/>
                {level}
            </div>
        </div>
    )
}


export default WhiteRectangle;