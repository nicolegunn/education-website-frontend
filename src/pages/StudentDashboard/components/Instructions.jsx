import React from 'react'
import styles from "./Instructions.module.css"
import Projectinstructions from "../../../../public/images/projects/Project01-instructions.png"
export default function Instructions() {
  return (
    <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.title}><h1>1.Join Scratch</h1></div>
      <div className={styles.p1}><p>If you haven't used Scratch before, you will need to join Scratch first.</p></div>
      <div className={styles.p2}>Go to https://scratch.mit.edu. Click on <span className={styles.pinkcolortext}>Join Scratch.</span></div>
      <div className={styles.image}>
        <img src={Projectinstructions}alt=""/>
      </div>
      <div className={styles.p3}><p>Follow the instructions to join. you will need a username and a password that you will remember. If possible, you should also verify your email address so that you can share projects later.Ask your teacher to help with this step if you don't have an email address or if you are not sure what to do.</p></div>
      
    </div></div>
  )
}
