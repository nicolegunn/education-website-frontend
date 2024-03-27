import React from 'react'
import makeprojectimage from "../../../assets/StudentDashboard/makeProject-screenshot.png"
import styles from "./MakeProject.module.css"
export default function MakeProject() {
  return (
    <div className={styles.imageContainer}>
    <img className={styles.image} src={makeprojectimage}alt=""/>
    </div>
  )
}
