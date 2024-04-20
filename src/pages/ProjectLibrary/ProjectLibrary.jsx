import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectLibrary.module.css";
import axios from "axios";
import { UserContext } from "../../context.js";
import { filters, createFilter, filterProjects } from "./filter.js";

import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import TitleArea from "./components/TitleArea.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ButtonFilter from "./components/ButtonFilter.jsx";
import CheckBoxFilter from "./components/CheckBoxFilter.jsx";

//Labels for the ButtonFilter components
const courseLabels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
const pages = [5, 10, "All"];

export default function ProjectLibrary({ port, logOutFunction }) {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filtersObj, setFiltersObj] = useState();
  const [navButtons, setNavButtons] = useState([]);
  const [backToTop, setBackToTop] = useState(false);

  const userType = useContext(UserContext).user_type;

  useEffect(() => {
    axios
      .get(`http://localhost:${port}/projects`)
      .then((res) => {
        setAllProjects(res.data);
        setFilteredProjects(res.data);
      })
      .catch((err) => console.log(err));

    const initialFilters = {
      pages: [],
      course: [],
      subscription: [],
      activity_type: [],
      year_level: [],
      subject_matter: [],
    };
    setFiltersObj(initialFilters);

    let userNavButtons;
    if (userType === "student") {
      userNavButtons = [
        { label: "HOME", link: "/" },
        { label: "PROFILE", link: `/${userType}-profile-viewer` },
        { label: "DASHBOARD", link: "/learning-objectives" },
      ];
    } else if (userType === "teacher") {
      userNavButtons = [
        { label: "HOME", link: "/" },
        { label: "PROFILE", link: `/${userType}-profile-viewer` },
        { label: "DASHBOARD", link: "/progress-tracker" },
      ];
    }
    setNavButtons(userNavButtons);
  }, []);

  const goBackToTop = () => {
    setBackToTop(!backToTop);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [backToTop]);

  //When a filter checkbox or button is clicked, this function passes the existing filter object to the createFilter function.
  //The createFilter function updates the filter object, and returns the updated version.
  //The updated filter object is used in the newFilteredProjects function to filter the projects array.
  const handleFilter = (id, name, selected = true) => {
    const newFilter = createFilter(filtersObj, id, name, selected);
    const newFilteredProjects = filterProjects(newFilter, allProjects);
    setFiltersObj(newFilter);
    setFilteredProjects(newFilteredProjects);
  };

  //Unique styles passed to Button components used at bottom of project-library page
  const btnStyles = {
    marginLeft: "1rem",
    marginTop: "4rem",
    marginBottom: "4rem",
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <NavBar navButtons={navButtons} logOutFunction={logOutFunction} />
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
          <div>
            <ButtonFilter
              buttons={pages}
              name="pages"
              handleFilter={handleFilter}
              label="SHOW"
              initialSelection={"All"}
            ></ButtonFilter>
          </div>
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
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  );
}
