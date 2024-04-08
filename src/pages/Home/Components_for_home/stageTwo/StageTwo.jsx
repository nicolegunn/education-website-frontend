import { useState } from 'react';
import styles from './StageTwo.module.css'

import laptopImage_1 from '../../../../assets/Home/laptop1.png'
import laptopImage_2 from '../../../../assets/Home/laptop2.png'
import laptopImage_3 from '../../../../assets/Home/laptop3.png'
import laptopImage_4 from '../../../../assets/Home/laptop4.png'

import animations_image from '../../../../assets/Home/animation.png'
import games_image from '../../../../assets/Home/games.png'
import chatbot_image from '../../../../assets/Home/chatbots.png'
import augmented_reality_image from '../../../../assets/Home/augreality.png'

export default function StageTwo() {
  const [currentImage, setCurrentImage] = useState(laptopImage_1);

  const handleImageChange = (event) => {
    switch(event.target.value) {
      case '1':
        setCurrentImage(laptopImage_1);
        break;
      case '2':
        setCurrentImage(laptopImage_2);
        break;
      case '3':
        setCurrentImage(laptopImage_3);
        break;
      case '4':
        setCurrentImage(laptopImage_4);
        break;
      default:
        setCurrentImage(laptopImage_1);
    }
  };

  return (
    <>
        <div className={styles.margins}>
            <div className={styles.container}>
            <div className={styles.content_left}>
                <div className={styles.content_whatWeOffer}>
                    <p style={{fontSize: '3em', fontWeight: '900'}}>What We Offer</p><br/>
                    <p style={{fontSize: '1.5em', fontWeight: '600'}}>The Creative 'Problem Solving' programme is a series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p><br/>
                </div>
                <div className={styles.content_whatWillStudentsCreate}>
                    <p style={{fontSize: '2em', fontWeight: '600'}}>What Will Students Create?</p><br/>
                    <div className={styles.features_box_container}>
                    <img className={styles.features_boxImage} src={animations_image}/>
                    <img className={styles.features_boxImage} src={games_image}/>
                    <img className={styles.features_boxImage} src={chatbot_image}/>
                    <img className={styles.features_boxImage} src={augmented_reality_image}/>
                    </div>
                </div>
            </div>
                <div className={styles.content_image_right}>
                    <img className={styles.laptopImage_Styles} src={currentImage}/>
                    <div>
                      <input style={{marginRight: '10px'}} type="radio" id="laptopImage1" name="laptopImage" value="1" onChange={handleImageChange} />
                      <input style={{marginRight: '10px'}}type="radio" id="laptopImage2" name="laptopImage" value="2" onChange={handleImageChange} />
                      <input style={{marginRight: '10px'}}type="radio" id="laptopImage3" name="laptopImage" value="3" onChange={handleImageChange} />
                      <input type="radio" id="laptopImage4" name="laptopImage" value="4" onChange={handleImageChange} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
