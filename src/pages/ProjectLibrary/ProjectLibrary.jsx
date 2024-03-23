import styles from "./ProjectLibrary.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { projects, filters } from "./Projects.js";

import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import TitleArea from "./components/TitleArea.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ButtonFilter from "./components/ButtonFilter.jsx";
import CheckBoxFilter from "./components/CheckBoxFilter.jsx";
import Button from "./components/Button.jsx";

export default function ProjectLibrary() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (e) => {};

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar />
      </div>
      <div className={styles.TitleArea}>
        <TitleArea />
      </div>
      <div className={styles.SideBar}>
        <CheckBoxFilter title="subscription" boxes={filters.subscription} />
        <CheckBoxFilter title="activity type" boxes={filters.activity_type} />
        <CheckBoxFilter title="year level" boxes={filters.year_level} />
        <CheckBoxFilter title="subject matter" boxes={filters.subject_matter} />
      </div>
      <div className={styles.MainContent}>
        <div className={styles.FilterButtonContainer}>
          <ButtonFilter
            buttons={["BEGINNER", "INTERMEDIATE", "ADVANCED"]}
            handleFilter={handleFilter}
          ></ButtonFilter>
          <ButtonFilter
            buttons={[5, 10, "All"]}
            handleFilter={handleFilter}
            label="SHOW"
            initialSelection={2}
          ></ButtonFilter>
        </div>
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
      <div className={styles.ButtonContainer}>
        <div className={styles.ButtonFlexContainer}>
          <Button label="BACK TO TOP" color="#e5ab2c" />
          <Button label="BACK TO DASHBOARD" color="#F91C85" />
        </div>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}
