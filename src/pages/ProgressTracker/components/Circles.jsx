import React from "react"
import styles from "./Circles.module.css"

function Circles( {number, project} ) {
    //const numbers = Array.from({ length: projectCount}, (_, index) => index + 1);
    //--make "length" dynamic
    //--fetch data and make length match up with project(count)
    //fetch students. for each student create 15 circles
        

    return (
       /* <div className={styles.Container}>
            {numbers.map((number) => (
                <div key={number} className={styles.CircleStyle}>
                    {number}
                </div>
            ))}
        </div>*/
    <div className={styles.Container}>
        <div /*style={{
            width: '30px',
            height: '30px',
            borderRadius: '70%',
            backgroundColor: project ? '#99EDCC' : 'white',
            display: 'inline-block',
            border: '1px solid rgba(162, 160, 160, 1)',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.25)',
            textAlign: 'center',
            margin: '10px',
            color: 'rgba(108, 108, 108, 1)',
            padding: '5px'

          }}*/
          className={`${styles.CircleStyle} ${project ? styles.Complete : styles.Incomplete}`}>
            {number}
        </div>
    </div>
    )
}



  export default Circles;