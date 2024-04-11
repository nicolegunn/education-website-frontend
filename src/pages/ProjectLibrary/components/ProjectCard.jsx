import styles from "./ProjectCard.module.css";

export default function ProjectCard({ projectObj }) {
  const activity_type = projectObj.activity_type;

  return (
    <div className={styles.Card}>
      <img
        className={styles.CardImg}
        src={projectObj.project_pic}
        alt=""
      />
      <h3 className={styles.ProjectName}>
        {projectObj.name
          .toLowerCase()
          .split(" ")
          .map((wrd) => wrd[0].toUpperCase() + wrd.substring(1))
          .join(" ")}
      </h3>
      <p
        className={styles.ShortDescription}
      >{`${projectObj.course.toUpperCase()} | ${activity_type
        .toLowerCase()
        .split(" ")
        .map((wrd) => wrd[0].toUpperCase() + wrd.substring(1))
        .join(" ")}`}</p>
    </div>
  );
}
