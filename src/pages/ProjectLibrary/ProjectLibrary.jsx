import styles from "./ProjectLibrary.module.css";
import { useState } from "react";
import { projects, filters } from "./Projects.js";
import NavBarHome from "../../common/NavBarHome.jsx";
import FilterPanel from "./components/FilterPanel.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ButtonFilter from "./components/ButtonFilter.jsx";
import CheckBoxFilter from "./components/CheckBoxFilter.jsx";

export default function ProjectLibrary() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [projectFilters, setProjectFilters] = useState(filters);

  const handleFilter = (evt) => {};
  console.log(window.innerHeight);
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBarHome />
      </div>
      <div></div>
      <div className={styles.SideBar}>
        <CheckBoxFilter title="subscription" boxes={filters.subscription} />
        <CheckBoxFilter title="activity type" boxes={filters.activity_type} />
        <CheckBoxFilter title="year level" boxes={filters.year_level} />
        <CheckBoxFilter title="subject matter" boxes={filters.subject_matter} />
      </div>
      <div className={styles.MainContent}>
        <h1 className={styles.LargeHeading}>PROJECTS</h1>
        <p className={styles.Paragraph}>
          Welcome to the project library. You can use the filters on the right
          to help you search for specific projects.
        </p>
        <ButtonFilter handleClick={handleFilter}></ButtonFilter>
        <div className={styles.ProjectCardContainer}>
          {filteredProjects.map((project) => {
            return (
              <ProjectCard
                key={project.project_id}
                projectObj={project}
              ></ProjectCard>
            );
          })}
        </div>
      </div>
      <div className={styles.Footer}>
        <h2>Footer</h2>
      </div>
    </div>
  );
}
