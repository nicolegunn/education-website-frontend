// Import styles
import styles from './StageThree.module.css'

// Import images
import group_1_image from '../../../../assets/Home/Group 1.png'
import group_2_image from '../../../../assets/Home/Group 2.png'
import group_3_image from '../../../../assets/Home/Group 3.png'
import group_4_image from '../../../../assets/Home/Group 4.png'

export default function StageThree() {
  return (
    <>
      <div>
        {/* Top Level */}
        <div className={styles.topLevel}>
          <p style={{fontSize: '2em', fontWeight: '600'}}>
            Teaching kids programming and digital skills is 
            <span style={{fontStyle: 'italic', color: '#f91c85'}}> MORE </span> 
            than just writing a code
          </p>
        </div>

        {/* Image Container */}
        <div className={styles.flex_box_container}>
          <img className={styles.group_image} src={group_1_image} />
          <img className={styles.group_image} src={group_2_image} />
          <img className={styles.group_image} src={group_3_image} />
          <img className={styles.group_image} src={group_4_image} />
        </div>

        {/* Bottom Level */}
        <div className={styles.bottomLevel}>
          <p style={{fontSize: '2em', fontWeight: '600'}}>How our <span style={{color: '#f91c85'}}> programme </span> helps teachers and schools</p>
        </div>
      </div>
    </>
  )
}
