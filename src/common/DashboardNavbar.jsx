
import React from 'react'
import styles from './DashboardNavbar.module.css'

import logo from '../assets/NavBar/LevelUpWorks-blue.png'
import new_zealand_flag from '../assets/NavBar/NZFlag.png'
import new_zealand_alternate_flag from '../assets/NavBar/MaoriFlag.png'

export default function DashboardNavbar(props) {
  return (
    <>
    <div className={styles.navbar}>
        <img className={styles.logo}src={logo} alt='logo'/>

        {/*Displays Project and Subtitle  */}
            <div className={styles.layout}>
              <p>{props.projectTitle}</p>
              <p>{props.subTitle}</p>
            </div>

        {/*Displays Project number automatically */}
            <div>{props.dotMap}</div>

        {/*Buttons */}
            <div className={styles.btn}>
              <button className={styles.navbtn1}>Start Project</button>
              <button className={styles.navbtn2}>Ask Teacher for Help</button>
              <button className={styles.navbtn3}>More Projects</button>
            </div>

        {/*Displays Flags */}
              <div className={styles.languageflag}> 
                <img src = {new_zealand_flag} style={{height:'0.7em'}} alt=' new_zealand_flag'/>
                <img src = {new_zealand_alternate_flag} style={{height:'0.7em'}} alt='maori_flag'/>
              </div>
    </div>

    </>
  )
}
