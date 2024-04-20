import { useContext } from "react";
import { UserContext, LoggedInContext } from "../../context.js";
import styles from "./Home.module.css";

import NavBar from "../../common/NavBar";
import Footer from "../../common/Footer";

import Login from "../Login/Login.jsx";
import { useState } from "react";

import StageFour from "./Components_for_home/stageFour/StageFour.jsx";
import StageThree from "./Components_for_home/stageThree/StageThree.jsx";
import StageTwo from "./Components_for_home/stageTwo/StageTwo.jsx";
import StageOne from "./Components_for_home/stageOne/StageOne.jsx";
import StageFive from "./Components_for_home/stageFive/StageFive.jsx";

// Note: All parts of the website has been modularized, refer to Components_for_home, page to see more details //
export default function Home({ port, logInFunction, logOutFunction }) {
  const user = useContext(UserContext);
  const loggedIn = useContext(LoggedInContext);

  const [showLogin, setShowLogin] = useState(false);
  const updateShowLogin = () => {
    setShowLogin(!showLogin);
  };

  let navButtons = [];
  if (loggedIn && user.user_type === "student") {
    navButtons = [
      { label: "PROJECTS", link: "/project-library" },
      { label: "PROFILE", link: `/${user.user_type}-profile-viewer` },
      { label: "DASHBOARD", link: "/learning-objectives" },
    ];
  } else if (loggedIn && user.user_type === "teacher") {
    navButtons = [
      { label: "PROJECTS", link: "/project-library" },
      { label: "PROFILE", link: `/${user.user_type}-profile-viewer` },
      { label: "DASHBOARD", link: "/progress-tracker" },
    ];
  }

  return (
    <>
      <NavBar
        navButtons={navButtons}
        updateShowLogin={updateShowLogin}
        logOutFunction={logOutFunction}
      />
      {showLogin && (
        <Login
          port={port}
          showLogin={showLogin}
          updateShowLogin={updateShowLogin}
          logInFunction={logInFunction}
        />
      )}

      <div className={styles.default_component_for_home}>
        <div>
          {/*Stage One Modules, refer to src> pages> home> Component_for_home> stageOne
            for more details about the component*/}
          <StageOne />
        </div>

        <div>
          {/* Stage Two Modules, refer to src> pages> home> Components_for_home> stageTwo
            for more details about this component*/}
          <StageTwo />
        </div>

        <div>
          {/*Stage Three Modules, refer to src> pages> home> Components_for_home> stageThree
            for more details about this component */}
          <StageThree />
        </div>

        <div>
          {/* Stage Four Modules, refer to src> pages> home> Components_for_home> stageFour
            for more details about this component */}
          <StageFour />
        </div>
        <div>
          {/* Stage Five Modules, refer to src> pages> home> Components_for_home> stageFive
            for more details about this component */}
          <StageFive />
        </div>
      </div>
      <Footer />
    </>
  );
}
