import { useState, useEffect, useContext } from "react";
import DOMPurify from "dompurify";
import { useBackendUrl } from "../../BackendUrlContext.jsx";
import DashboardNavbar from "../../common/DashboardNavbar";
import SideBar from "../../common/SideBar";
import DashboardFooter from "../../common/DashboardFooter";
import styles from "./Instructions.module.css";

export default function Instructions() {
  const backendUrl = useBackendUrl();

  {
    /*Fetching data from backend */
  }
  const [projectInstructions, setProjectInstructions] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/projects/1/instructions`)
      .then((response) => response.json())
      .then((result) => {
        setProjectInstructions(result[0].instructions);
      });
  }, []);

  return (
    <>
      {/*Displays StudentDashboard Navigation bar */}
      <DashboardNavbar projectTitle="PROJECT" subTitle="Introduction" />
      {/*Displays Sidebar and buttons */}
      <div className={styles.Layout}>
        <div className={styles.Colunmn}>
          <SideBar dashboard="student" />
        </div>

        {/*Displays main content on student Dashboard */}
        <div className={styles.Colunmn}>
          <div className={styles.CentreArea}>
            <div className={styles.Dashboard}>
              <div>
                <div className={styles.Container}>
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(projectInstructions),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Displays Footer */}
        <DashboardFooter />
      </div>
    </>
  );
}
