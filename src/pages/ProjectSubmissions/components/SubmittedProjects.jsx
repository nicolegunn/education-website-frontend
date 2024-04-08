import { useState } from "react";
import styles from "../ProjectSubmissions.module.css";

export default function SubmittedProjects() {
    const dummyProjects = [
    {
        name: "Aiden",
        profilePicture: "/images/students/AidenAndrews.png",
        date: "TUE 28 April 2020",
        time: "10:43 AM",
    },
    {
        name: "Rawiri",
        profilePicture: "/images/students/RawiriFletcher.png",
        date: "TUE 28 April 2020",
        time: "10:27 AM",
    },
    {
        name: "Neveah",
        profilePicture: "/images/students/NeveahMachenry.png",
        date: "TUE 28 April 2020",
        time: "9:58 AM",
    },
    {
        name: "Javier",
        profilePicture: "/images/students/JavierFuego.png",
        date: "MON 27 April 2020",
        time: "3:00 PM",
    },
    {
        name: "Tokio",
        profilePicture: "/images/students/TokioHan.png",
        date: "MON 27 April 2020",
        time: "11:23 AM",
    },
    ];
}

const [projects, setProjects] = useState([...dummyProjects]);

return (
  <div>
    {projects.map((item, index) => {
      return (
        <div className={styles.submitedProject} key={index}>
          <div>
            {item.profilePicture && (
              <img
                src={item.profilePic}
                alt="Profile picture"
                className={styles.img}
              />
            )}
            {item.projectPic ? (
              <div>
                <h4>{item.name.toUpperCase()} submitted his project</h4>
              </div>
            ) : (
              <div>
                <h4>{item.name.toUpperCase()} wants to show their project</h4>
              </div>
            )}
          </div>
          <div className={styles.dateTime}>
            <p>{item.date}</p>
            <p>{item.time}</p>
          </div>
        </div>
      );
    })}
  </div>
);