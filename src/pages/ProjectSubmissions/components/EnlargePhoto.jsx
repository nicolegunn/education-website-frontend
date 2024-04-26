import React from 'react'
import { useState } from 'react'

import styles from './EnlargePhoto.module.css'

export default function EnlargePhoto({ closeModal, image }) {
  
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
                  <img src={image} alt="Enlarged" />
              </div>
              <div className={styles.Footer}>
                  <button onClick={() => closeModal(false)} >Go back</button>
              </div>
      </div>
    </div>
  );
}