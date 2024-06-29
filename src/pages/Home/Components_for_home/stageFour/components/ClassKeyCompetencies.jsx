import StarIcon from "./defaultAssestStyles/ComponentIcon";
import styles from "./StageFourCss/PersistentStyleSheet.module.css";

export default function ClassKeyCompetencies() {
  return (
    <>
      <div className={styles.flex_box_container}>
        <div>
          <p className={styles.header}>Enhanced Key Competencies</p>
          <p className={styles.paragraph}>
            The programme enhances capabilities of students in the 5 'Key
            Competencies' indentified in the New Zealand curriculum
          </p>
        </div>
        <div className={styles.boxContents}>
          <StarIcon />
          <div className={styles.content_styles}>
            <p style={{ fontSize: "1.5em", fontWeight: "600" }}>THINKING</p>
            <p style={{ fontSize: "1.3em" }}>
              In particular, the programme focused on problem solving, design
              thinking, and computational thinking.
            </p>
          </div>
        </div>
        <br />
        <div className={styles.boxContents}>
          <StarIcon />
          <div className={styles.content_styles}>
            <p style={{ fontSize: "1.5em", fontWeight: "600" }}>
              DISCERNING CODES
            </p>
            <p style={{ fontSize: "1.2em" }}>
              Analyzing language, symbols and texts, in order to understand and
              make sense of the codes in which knowledge is expressed.
            </p>
          </div>
        </div>
        <br />
        <div className={styles.boxContents}>
          <StarIcon />
          <div className={styles.content_styles}>
            <p style={{ fontSize: "1.5em", fontWeight: "600" }}>
              SELF-MANAGEMENT
            </p>
            <p style={{ fontSize: "1.2em" }}>
              Projects and challenges are designed to motivate students to
              explore and experiment with self-motivation
            </p>
          </div>
        </div>
        <br />
        <div className={styles.boxContents}>
          <StarIcon />
          <div className={styles.content_styles}>
            <p style={{ fontSize: "1.5em", fontWeight: "600" }}>
              RELATION AVEC LES PAIRS
            </p>
            <p style={{ fontSize: "1.2em" }}>
              Le programme est conçu avec des sessions débranchées au cours
              desquelles les étudiants interagissent dans une gamme de
              situations différentes, notamment en étant capables de bien
              écouter, de reconnaître différents points de vue et de partager
              des idées.
            </p>
          </div>
        </div>
        <br />
        <div className={styles.boxContents}>
          <StarIcon />
          <div className={styles.content_styles}>
            <p style={{ fontSize: "1.5em", fontWeight: "600" }}>
              PARTICIPATION AND COLLABORATION
            </p>
            <p style={{ fontSize: "1.2em" }}>
              The programme encourages students to be involved in communities,
              such as family, whānau, school, and contribute and make
              connections with other people{" "}
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
