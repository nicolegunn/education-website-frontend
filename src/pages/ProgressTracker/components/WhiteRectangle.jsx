import React from "react";
import styles from "./WhiteRectangle.module.css"


function WhiteRectangle ({name, level}) {
    
   return (
        <div className={styles.Style}>
            <h3>{name}</h3>
            {level}
        </div>
    )
}


export default WhiteRectangle;