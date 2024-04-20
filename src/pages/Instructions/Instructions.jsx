import React from "react";
import styles from "./Instructions.module.css";
import DashboardNavbar from "../../common/DashboardNavbar";
import SideBar from "../../common/SideBar";
import DashboardFooter from "../../common/DashboardFooter";
import Projectinstructions from "../../../public/images/projects/Project01-instructions.png";
import { useState, useEffect } from "react";

export default function Instructions() {
  const [projectInstructions, setProjectInstructions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/projects/1/instructions")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProjectInstructions(result);
      });
  }, []);

  return (
    <>
      {/*Displays StudentDashboard Navigation bar */}
      <DashboardNavbar projectTitle="Project" subTitle="Introduction" />
      {/*Displays Sidebar and buttons */}
      <div className={styles.Layout}>
        <div className={styles.Colunmn}>
          {/* Replace this sidebar with Eunhyes sidebar when it is finished */}
          {/* <div className={styles.Sidebar}></div> */}
          <SideBar dashboard="student" />
        </div>

        {/*Displays main content on student Dashboard */}
        <div className={styles.Colunmn}>
          <div className={styles.CentreArea}>
            <div className={styles.Dashboard}>
              <div>
                <div className={styles.Container}>
                  {/* <div className={styles.Main}>
                    <div className={styles.Title}>
                      <h1>1.Join Scratch</h1>
                    </div>
                    <div className={styles.P1}>
                      <p>
                        If you haven't used Scratch before, you will need to
                        join Scratch first.
                      </p>
                    </div>
                    <div className={styles.P1}>
                      Go to https://scratch.mit.edu. Click on{" "}
                      <span className={styles.PinkcolorText}>
                        Join Scratch.
                      </span>
                    </div>
                    <div className={styles.Image}>
                      <img src={Projectinstructions} alt="" />
                    </div>
                    <div className={styles.P3}>
                      <p>
                        Follow the instructions to join. You will need a
                        username and a password that you will remember. If
                        possible, you should also verify your email address so
                        that you can share projects later.Ask your teacher to
                        help with this step if you don't have an email address
                        or if you are not sure what to do.
                      </p>
                    </div>
                  </div> */}

                  <div>
                    {projectInstructions.map((data, index) => {
                      
                      return (
                        <div key={index}>
                          const htmlText={data.instructions}
                          
                            <div dangerouslySetInnerHTML={{ __html: htmlContent }}/>;
                          
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </>
  );
}
