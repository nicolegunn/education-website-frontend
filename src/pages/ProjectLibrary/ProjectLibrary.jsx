import styles from "./ProjectLibrary.module.css";
import { projects } from "./Projects.js";
import NavBarHome from "../../common/NavBarHome.jsx";
import FilterPanel from "./components/FilterPanel.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

export default function ProjectLibrary() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBarHome />
      </div>
      <div className={styles.SideBar}>
        <FilterPanel></FilterPanel>
      </div>
      <div className={styles.MainContent}>
        <h2>PROJECTS</h2>
        <p>
          Welcome to the project library. You can use the filters on the right
          to help you search for specific projects.
        </p>
        <div className={styles.ProjectCardContainer}>
          {projects.map((project) => {
            return <ProjectCard projectObj={project}></ProjectCard>;
          })}
        </div>
      </div>
      <div className={styles.Footer}>
        <h2>Footer</h2>
      </div>
    </div>
  );
}
