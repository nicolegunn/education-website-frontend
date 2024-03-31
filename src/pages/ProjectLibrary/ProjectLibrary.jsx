import styles from "./ProjectLibrary.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects, filters } from "./Projects.js";

import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import TitleArea from "./components/TitleArea.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ButtonFilter from "./components/ButtonFilter.jsx";
import CheckBoxFilter from "./components/CheckBoxFilter.jsx";

const courseLabels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
const pages = [5, 10, "All"];
const initialFilters = {
  pages: [],
  course: [],
  subscription: [],
  activity_type: [],
  year_level: [],
  subject_matter: [],
};

export default function ProjectLibrary({ userType }) {
  const [backToTop, setBackToTop] = useState(false);
  const [filtersObj, setFiltersObj] = useState(initialFilters);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const goBackToTop = () => {
    setBackToTop(!backToTop);
    useEffect(
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
      [backToTop]
    );
  };

  const handleFilter = (id, name, selected = true) => {
    const filtersObjCopy = { ...filtersObj };
    let value = id.toLowerCase();

    if (name === "pages") {
      value === "all"
        ? (filtersObjCopy.pages = [])
        : (filtersObjCopy.pages[0] = Number(value));
    }

    if (name === "course") {
      filtersObjCopy.course[0] = value;
    }

    if (name === "subscription") {
      value = value === "free" ? 0 : 1;
      selected
        ? filtersObjCopy.subscription.push(value)
        : filtersObjCopy.subscription.splice(
            filtersObjCopy.subscription.indexOf(value),
            1
          );
    }

    if (name === "year_level") {
      const min = Number(id[0]);
      const max = Number(id.slice(2));
      value = [...Array(max - min + 1).keys()].map((key) => key + min);
      selected
        ? filtersObjCopy.year_level.push(...value)
        : (filtersObjCopy.year_level = filtersObjCopy.year_level.filter(
            (num) => value.indexOf(num) < 0
          ));
    }

    if (name === "activity_type" || name === "subject_matter") {
      selected
        ? filtersObjCopy[name].push(value)
        : (filtersObjCopy[name] = filtersObjCopy[name].filter(
            (item) => item !== value
          ));
    }

    let newFilteredProjects = [];
    const activeFilters = {};
    const filterKeys = Object.keys(filtersObjCopy).filter(
      (key) => key !== "pages"
    );

    for (let key of filterKeys) {
      if (filtersObjCopy[key].length !== 0) {
        activeFilters[key] = filtersObjCopy[key];
      }
    }

    for (let project of projects) {
      let include = true;
      for (let key in activeFilters) {
        if (!activeFilters[key].includes(project[key])) {
          include = false;
        }
      }

      if (include) {
        newFilteredProjects.push(project);
      }
    }

    console.log(Object.keys(activeFilters));
    if (Object.keys(activeFilters).length > 0) {
      console.log(activeFilters.year_level);
    }
    console.log(filtersObjCopy);

    if (filtersObjCopy.pages.length > 0) {
      newFilteredProjects = newFilteredProjects.splice(
        0,
        filtersObjCopy.pages[0]
      );
    }

    setFiltersObj(filtersObjCopy);
    setFilteredProjects(newFilteredProjects);
  };

  const btnStyles = {
    marginLeft: "1rem",
    marginTop: "4rem",
    marginBottom: "4rem",
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar />
      </div>
      <div className={styles.TitleArea}>
        <TitleArea />
      </div>
      <div className={styles.SideBar}>
        <CheckBoxFilter
          name="subscription"
          title="subscription"
          boxes={filters.subscription}
          handleFilter={handleFilter}
        />
        <CheckBoxFilter
          name="activity_type"
          title="activity type"
          boxes={filters.activity_type}
          handleFilter={handleFilter}
        />
        <CheckBoxFilter
          name="year_level"
          title="year level"
          boxes={filters.year_level}
          handleFilter={handleFilter}
        />
        <CheckBoxFilter
          name="subject_matter"
          title="subject matter"
          boxes={filters.subject_matter}
          handleFilter={handleFilter}
        />
      </div>
      <div className={styles.MainContent}>
        <div className={styles.FilterButtonContainer}>
          <ButtonFilter
            buttons={courseLabels}
            name="course"
            handleFilter={handleFilter}
          ></ButtonFilter>
          <ButtonFilter
            buttons={pages}
            name="pages"
            handleFilter={handleFilter}
            label="SHOW"
            initialSelection={"All"}
          ></ButtonFilter>
        </div>
        <div className={styles.ProjectCardContainer}>
          {filteredProjects.map((project) => {
            return (
              <div key={project.project_id}>
                {project.name.toLowerCase() === "introduction" ? (
                  <Link to="/learning-objectives">
                    <ProjectCard projectObj={project} />
                  </Link>
                ) : (
                  <ProjectCard projectObj={project} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.ButtonContainer}>
        <div className={styles.ButtonFlexContainer}>
          <Button
            style={{ ...btnStyles, backgroundColor: "#e5ab2c" }}
            handleClick={goBackToTop}
          >
            BACK TO TOP
          </Button>
          {userType === "teacher" && (
            <Link to="/progress-tracker">
              <Button style={btnStyles}>BACK TO DASHBOARD</Button>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}
