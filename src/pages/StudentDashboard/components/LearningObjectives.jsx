import React from 'react'
import styles from "./LearningObjectives.module.css"
import image1 from "../../../../public/images/projects/Project01-obj1.png"
import image2 from "../../../../public/images/projects/Project01-obj2.png"
import image3 from "../../../../public/images/projects/Project01-obj3.png"
import image4 from "../../../../public/images/projects/Project01-obj4.png"
import image5 from "../../../../public/images/projects/Project01-obj5.png"
import image6 from "../../../../public/images/projects/Project01-obj6.png"

export default function LearningObjectives() {
  return (
    <div className={styles.main}>
      <div className={styles.title}><h1>Explore Scratch blocks</h1></div>
      <div className={styles.content}><p>Learn the basic function of some basic scratch blocks such as "say," "wait,""go to"and</p></div>
      
      
      
      

      <div className={styles.flexContainer}>
      
        <div className={styles.scratchBlock}><h3 className={styles.subtitle1}>Look Blocks</h3>
        <div className={styles.imgContainer}><img className={styles.img1} src={image1}alt=""/><img className={styles.img2} src={image2}alt=""/></div>
        </div>
      
        <div className={styles.scratchBlock}><h3 className={styles.subtitle1}>Control Blocks</h3>
        <div className={styles.imgContainer}><img className={styles.img1} src={image3}alt=""/><img className={styles.img2} src={image4}alt=""/></div>
        </div>
        <div className={styles.scratchBlock}><h3 className={styles.subtitle1}>Motion Blocks</h3>
        <div className={styles.imgContainer}><img className={styles.img1} src={image5}alt=""/><img className={styles.img2} src={image6}alt=""/></div>
        </div>
      </div>
    </div>
    
 
   
    
  )
}
