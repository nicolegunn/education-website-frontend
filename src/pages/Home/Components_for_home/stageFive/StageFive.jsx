import styles from './StageFive.module.css'
import { Link } from 'react-router-dom'
import learningImage from '../../../../assets/Home/classroom.png'

export default function StageFive() {
  return (
    <>
      <div>
        <div className={styles.body}>
          <div className={styles.section_left}>
            <img src={learningImage} style={{height: '20em'}}/>
          </div>
          <div className={styles.section_right}>
            <p style={{fontSize: '2em', fontWeight:'900'}}>What are you waiting for?</p>
            <br/>
            <p style={{fontSize: '1.3em', fontWeight: '600'}}>Start teaching 'Digital Technologies' today</p>
            <br/>
            <p style={{fontSize: '1.3em', fontWeight: '600'}}>If you need more information, we are happy to answer any questions you may have</p>
              <div className={styles.button_section}>
                <Link to="/about" style={{textDecoration: 'none'}}>
                  <button className={styles.button_enquire}>Enquire Now</button>
                </Link>
                <Link to="/signup" style={{textDecoration: 'none'}}>
                  <button className={styles.button_signup}>Sign Up</button>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
