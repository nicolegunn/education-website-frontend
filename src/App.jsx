import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import ProjectLibrary from "./pages/ProjectLibrary/ProjectLibrary.jsx";
import StudentProfileViewer from "./pages/StudentProfileViewer/StudentProfileViewer.jsx";
import LearningObjectives from "./pages/LearningObjectives/LearningObjectives.jsx";
import Instructions from "./pages/Instructions/Instructions.jsx";
import MakeProject from "./pages/MakeProject/MakeProject.jsx";
import VideoTutorial from "./pages/VideoTutorial/VideoTutorial.jsx";
import ProjectSubmissions from "./pages/ProjectSubmissions/ProjectSubmissions.jsx";
import SubmitProject from "./pages/SubmitProject/SubmitProject.jsx";
import StudentProfiles from "./pages/StudentProfiles/StudentProfiles.jsx";
import ProgressTracker from "./pages/ProgressTracker/ProgressTracker.jsx";
import HelpRequests from "./pages/HelpRequests/HelpRequests.jsx";
import TeacherProfileViewer from "./pages/TeacherProfileViewer/TeacherProfileViewer.jsx";

function App() {
  //Andrei - you will probably need to tweak these once you do your login tables

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //user is an object of user info from the database (see axios request in useEffect below)
  //- at the moment it is set to the student table, but the request will need to be dynamic
  //i.e.grab data from teacher table if the user is a teacher
  const [user, setUser] = useState([]);

  //Inital state should be '' until someone is logged in, I've just set it to 'teacher' as a temporary measure
  const [userType, setUserType] = useState("teacher");


  useEffect(() => {
    axios
      //Andrei, this will need to be dynamic, I've just set to id of 1 for now
      .get("http://localhost:4000/student/1")
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/project-library"
          element={<ProjectLibrary userType={userType} />}
        />
        <Route
          path="/student-profile-viewer"
          element={<StudentProfileViewer user={user} />}
        />
        <Route path="/learning-objectives" element={<LearningObjectives />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/make-project" element={<MakeProject />} />
        <Route path="/video-tutorial" element={<VideoTutorial />} />
        <Route path="/project-submissions" element={<ProjectSubmissions />} />
        <Route path="/submit-project" element={<SubmitProject />} />
        <Route path="/student-profiles" element={<StudentProfiles />} />
        <Route path="/progress-tracker" element={<ProgressTracker />} />
        <Route path="/help-requests" element={<HelpRequests />} />
        <Route
          path="/teacher-profile-viewer"
          element={<TeacherProfileViewer />}
        />
      </Routes>
    </>
  );
}

export default App;
