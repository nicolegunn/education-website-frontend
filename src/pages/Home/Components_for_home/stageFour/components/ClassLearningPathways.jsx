import styles from './StageFourCss/PersistentStyleSheet.module.css'
import StarIcon from './defaultAssestStyles/ComponentIcon'

export default function ClassLearningPathways() {
  return (
    <>
      <div className={styles.flex_box_container}>
        <div>
          <p  className={styles.header}>Compétences clés améliorées</p>
          <p className={styles.paragraph}>Le programme améliore les capacités des étudiants dans les 5 «compétences clés» identifiées dans le programme néo-zélandais.</p>
        </div>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>PENSÉE</p>
            <p style={{fontSize: '1.3em'}}>En particulier, le programme s'est concentré sur la résolution de problèmes, la pensée conceptuelle et la pensée informatique.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>ANALYSER LES CODES</p>
            <p style={{fontSize: '1.2em'}}>Analyser le langage, les symboles et les textes, afin de comprendre et de donner du sens aux codes dans lesquels s'expriment les connaissances.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>AUTOGESTION</p>
            <p style={{fontSize: '1.2em'}}>Les projets et les défis sont conçus pour motiver les étudiants à explorer et à expérimenter l'auto-motivation.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>RELATIONSHIP WITH PEERS</p>
            <p style={{fontSize: '1.2em'}}>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to listen well, recognize different point of view, and share ideas.</p>
          </div>
        </div>
        <br/>
        <div className={styles.boxContents}>
          <StarIcon/><div className={styles.content_styles}>
            <p style={{fontSize: '1.5em', fontWeight: '600'}}>PARTICIPATION ET COLLABORATION</p>
            <p style={{fontSize: '1.2em'}}>Le programme encourage les étudiants à s'impliquer dans les communautés, telles que la famille, le whānau, l'école, et à contribuer et à établir des liens avec d'autres personnes.</p>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  )
}