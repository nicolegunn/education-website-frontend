import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axiosConfig"; // Import the Axios instance
import { useBackendUrl } from "../../BackendUrlContext.jsx";
import { UserContext } from "../../context.js";
import { filters, createFilter, filterProjects } from "./filter.js";
import NavBar from "../../common/NavBar.jsx";
import Footer from "../../common/Footer.jsx";
import Button from "../../common/Button.jsx";
import TitleArea from "./components/TitleArea.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ButtonFilter from "./components/ButtonFilter.jsx";
import CheckBoxFilter from "./components/CheckBoxFilter.jsx";
import styles from "./ProjectLibrary.module.css";

//Labels for the ButtonFilter components.
const courseLabels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
const pages = [5, 10, "All"];

export default function ProjectLibrary({ logOutFunction }) {
  const backendUrl = useBackendUrl();
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filtersObj, setFiltersObj] = useState();
  const [navButtons, setNavButtons] = useState([]);
  const [backToTop, setBackToTop] = useState(false);

  // The UserContext is an object of data relating to the logged in user (set upon login).
  const userType = useContext(UserContext).user_type;

  // Upon mount the allProjects and filteredProjects state variables are updated
  // with the result of the following get request.
  // This result is an array of project objects.
  // Each project object stores all the fields and corresponding data for a project
  // from the project table in the mySQL database.

  // The filtersObj state is set to an object of empty arrays.
  // The keys of this object represent each filter type.

  // Nav buttons links are also set upon mount based on user type - student or teacher (determined during login).
  useEffect(() => {
    axiosInstance
      .get(`${backendUrl}/projects`)
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

  // The goBackToTop function is called from the "BACK TO TOP" Button.
  // This triggers the useEffect which scrolls to the top of the page.
  const goBackToTop = () => {
    setBackToTop(!backToTop);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [backToTop]);

  // When a filter checkbox or button is clicked, this function passes the existing filter object to the createFilter function.
  // Together with the name and id of the checkbox or ButtonFilter pressed,
  //  and a boolean representing whether the checkbox has been selected or de-selected. Set to true by default for ButtonFilters.
  // All checkboxes or buttons in the same filter have the same name, and the id is equivalent to the label name of the checkbox or ButtonFilter.
  // The createFilter function updates the filter object, and returns the updated version.
  // The updated filter object is passed to the newFilteredProjects function, which returns a newFilteredProjects array,
  // Which is then used to update the filteredProjects state variable.
  const handleFilter = (id, name, selected = true) => {
    const newFilter = createFilter(filtersObj, id, name, selected);
    const newFilteredProjects = filterProjects(newFilter, allProjects);
    setFiltersObj(newFilter);
    setFilteredProjects(newFilteredProjects);
  };

  // Unique styles passed to Button components used at bottom of project-library page
  const btnStyles = {
    marginLeft: "1rem",
    marginTop: "4rem",
    marginBottom: "4rem",
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        {/* Dynamic navButtons set on mount based on userType (student or teacher)
        LogOutFunction is stored in App.jsx and has been passed down via props */}
        <NavBar navButtons={navButtons} logOutFunction={logOutFunction} />
      </div>
      <div className={styles.TitleArea}>
        <TitleArea />
      </div>
      {/* CheckBoxFilters located on the lefthand side of the screen. */}
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
        {/* The ButtonFilters are located above the project cards. */}
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

        {/* The projects from the filteredProjects state are rendered using map.  */}
        <div className={styles.ProjectCardContainer}>
          {filteredProjects.map((project) => {
            return (
              <div key={project.project_id}>
                {/* /Link to page one of student dashboard only implemented for project 1. */}
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
        {/* The "BACK TO DASHBOARD" Button is only visible if the user is a teacher."
        This button takes the teacher to the first page of the teacher-dashboard (progress-tracker). */}
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
