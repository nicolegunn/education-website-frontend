import styles from './StageFourCss/PersistentStyleSheet.module.css'
import StarIcon from './defaultAssestStyles/ComponentIcon'

export default function ClassIr40() {
  return (
    <>
      <div className={styles.flex_box_container}>
        <div>
          <p  className={styles.header}>Расширенные Ключевые Компетенции</p>
          <p className={styles.paragraph}>Программа расширяет возможности учащихся по 5 «ключевым компетенциям», указанным в учебной программе Новой Зеландии.</p>
        </div>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>ДУМАТЬ</p>
            <p style={{fontSize: '1.3em'}}>В частности, программа была сосредоточена на решении проблем, дизайн-мышлении и вычислительном мышлении.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>РАЗЛИЧЕНИЕ КОДОВ</p>
            <p style={{fontSize: '1.2em'}}>Анализ языка, символов и текстов, чтобы понять и осмыслить коды, в которых выражаются знания.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>САМОУПРАВЛЕНИЕ</p>
            <p style={{fontSize: '1.2em'}}>Проекты и задачи призваны мотивировать учащихся исследовать и экспериментировать с самомотивацией.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>ВЗАИМОДЕЙСТВИЕ</p>
            <p style={{fontSize: '1.2em'}}>Программа разработана с использованием автономных занятий, на которых учащиеся взаимодействуют в самых разных ситуациях, включая такие вещи, как умение хорошо слушать, распознавать разные точки зрения и делиться идеями.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>УЧАСТИЕ И СОТРУДНИЧЕСТВО</p>
            <p style={{fontSize: '1.2em'}}>Программа поощряет учащихся участвовать в жизни таких сообществ, как семья, ванау, школа, а также вносить свой вклад и устанавливать связи с другими людьми.</p>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  )
}