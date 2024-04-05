import { useState, useEffect } from 'react'
import React from 'react'
import styles from './Home.module.css'

import NavBar from '../../common/NavBar'


import hero_banner from '../../assets/Home/hero.png'
import animations_image from '../../assets/Home/animation.png'
import games_image from '../../assets/Home/games.png'
import chatbot_image from '../../assets/Home/chatbots.png'
import augmented_reality_image from '../../assets/Home/augreality.png'

import laptop_cycle_image_1 from '../../assets/Home/laptop1.png'
import laptop_cycle_image_2 from '../../assets/Home/laptop2.png'
import laptop_cycle_image_3 from '../../assets/Home/laptop3.png'
import laptop_cycle_image_4 from '../../assets/Home/laptop4.png'

import group_1_image from '../../assets/Home/Group 1.png'
import group_2_image from '../../assets/Home/Group 2.png'
import group_3_image from '../../assets/Home/Group 3.png'
import group_4_image from '../../assets/Home/Group 4.png'


export default function Home() {
  const [image, setImage] = useState(laptop_cycle_image_1);

  const handleImageChange = (event) => {
    setImage(event.target.value);
  }

  return (
    <>
      <NavBar/>
      <img className={styles.hero_banner_image} src={hero_banner}/>
      <div style={{fontFamily:'calibri', color:'#767676'}} className={styles.home_page_margin}>
        <div className={styles.container_top_text}>
          <div className={styles.top_banner_contents_text}>
            <p style={{fontSize: '2em', fontWeight: '900'}}>Prepare young minds for a better <span style={{color: '#42C0F6'}}>future.</span></p>
            <p style={{fontSize: '1em', fontWeight: '600'}}>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
            <div className={styles.learn_more_and_signup}>
              <button className={styles.buttons_learn_more}>Learn More</button>
              <div>
                <button className={styles.buttons_signup}>SignUp</button>
                <p style={{display:'flex', justifyContent:'center', margin: '10px', width: '14em', fontSize:'12px'}}>*Basic subscription includes the first 15 projects for free</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.top_mid}>
          <div className={styles.flex_box_operator_1}>
            <div className={styles.what_we_offer}>
              <p style={{fontSize: '2.5em', fontWeight: '900'}}>What we offer</p><br/>
              <p style={{fontSize: '1.5em', fontWeight: '600'}}>The 'Creative Problem Solving Programme' is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
            </div>
            <div className={styles.what_will_students_create}>
              <p style={{fontWeight: '600'}}>What will students create?</p><br/>
              <div className={styles.set_of_image_box}>
                <img className={styles.set_of_image} src={animations_image}/>
                <img className={styles.set_of_image} src={games_image}/>
                <img className={styles.set_of_image} src={chatbot_image}/>
                <img className={styles.set_of_image} src={augmented_reality_image}/>
              </div>
            </div>
          </div>
          <div className={styles.laptop_right_part}>
            <img className={styles.laptop_cycle_functions} src={image}/>
            <div className='image-switch'>
              <input style={{marginRight: '10px'}} type="radio" name='imageSwitch' value={laptop_cycle_image_1} checked={image === laptop_cycle_image_1} onChange={handleImageChange}/>
              <input style={{marginRight: '10px'}} type="radio" name='imageSwitch' value={laptop_cycle_image_2} checked={image === laptop_cycle_image_2} onChange={handleImageChange}/>
              <input style={{marginRight: '10px'}} type="radio" name='imageSwitch' value={laptop_cycle_image_3} checked={image === laptop_cycle_image_3} onChange={handleImageChange}/>
              <input style={{marginRight: '10px'}} type="radio" name='imageSwitch' value={laptop_cycle_image_4} checked={image === laptop_cycle_image_4} onChange={handleImageChange}/>
            </div>
          </div>
        </div>
        <div className={styles.section_mid}>
          <p>Teaching kids programming and digital skills is <span style={{fontStyle: 'italic', color: '#f91c85'}}>MORE</span> than just writing a code</p><br/>
            <div className={styles.image_group_cluster}>
              <img className={styles.group_image} src = {group_1_image}/>
              <img className={styles.group_image} src = {group_2_image}/>
              <img className={styles.group_image} src = {group_3_image}/>
              <img className={styles.group_image} src = {group_4_image}/>
            </div>
        </div>
      </div>
    </>
  )
}
