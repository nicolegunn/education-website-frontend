import { useContext } from "react";
import { UserContext } from "../../context.js";
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

export default function Home({ isLoggedIn, user, userType }) {
  const [showLogin, setShowLogin] = useState(false);
  const navButtons = [
    { label: "HOME", link: "/" },
    { label: "FEATURES", link: "/" },
    { label: "PROFILE", link: `/${userType}-profile-viewer` },
  ];

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} user={user} navButtons={navButtons} setShowLogin={setShowLogin} />
      {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
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