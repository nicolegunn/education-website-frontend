import React from 'react'
import { useState } from 'react'

import styles from './EnlargePhoto.module.css'

// Import img for testing
import makeProjectScreenshot from "../../assets/StudentDashboard/makeProject-screenshot.png"

export default function EnlargePhoto({closeModal}) {
  return (
    <div className="modalBackground">
          <div className="modalContainer">
              <button onClick={() => closeModal(false) }> X </button>
              <div className='title'>
                  <h1>Enlarged Image</h1>
              </div>
              <div className='body'>
                  <img src={makeProjectScreenshot}></img>
              </div>
              <div className='footer'>
                  <button onClick={() => closeModal(false)} >Go back</button>
              </div>
      </div>
    </div>
  );
}