import styles from './StageOne.module.css'
import hero_banner from '../../../../assets/Home/hero.png'
import { Link } from 'react-router-dom'

const Content = () => (
  <>
    <p style={{fontSize: '2em', fontWeight: '900'}}>
      Prepare young minds for a better <span style={{color: '#42C0F6'}}>future.</span>
    </p>
    <br/>
    <p style={{fontSize: '1em', fontWeight: '600'}}>
      Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.
    </p>
    <br/>
    <div className={styles.learn_more_and_signup}>
      <Link to="/about" style={{textDecoration: 'none'}}>
        <button className={styles.buttons_learn_more}>Learn More</button>
      </Link>
      <div>
        <Link to ="/signup" style={{textDecoration: 'none'}}>
          <button className={styles.buttons_signup}>SignUp</button>
        </Link>
        <p className={styles.tAndc}>*Basic subscription includes the first 15 projects for free</p>
      </div>
    </div>
  </>
)

export default function StageOne() {
  return (
    <>
      <div className={styles.margins}>
        <div className={styles.flex_box_container}>
          <img className={styles.hero_banner} src={hero_banner}/>
          <div className={styles.top_left}>
            <div className={styles.content_container}>
              <Content />
            </div>
          </div>
        </div>
        <div className={styles.hiddenContent}>
          <div className={styles.hiddenContent_container}>
            <Content />
          </div>
        </div>
      </div>
    </>
  )
}
