import React from 'react'
import { useState } from 'react'

import styles from './EnlargePhoto.module.css'

// Import img for testing
import makeProjectScreenshot from "../../../assets/StudentDashboard/makeProject-screenshot.png"

export default function EnlargePhoto({closeModal}) {
  return (
    <div className={styles.ModalBackground}>
      <div className={styles.ModalContainer}>
        <div className={styles.TitleCloseBtn}>
          <button onClick={() => closeModal(false)}> X </button>
          </div>
              <div className={styles.Title}>
                  <h1>Enlarged Image</h1>
              </div>
              <div className={styles.Body}>
                  <img src={makeProjectScreenshot}></img>
              </div>
              <div className={styles.Footer}>
                  <button onClick={() => closeModal(false)} >Go back</button>
              </div>
      </div>
    </div>
  );
}