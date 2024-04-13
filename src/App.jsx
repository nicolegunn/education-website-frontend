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
  //Andrei - you will need to tweak these once you do your login tables
  //I've set isLoggedIn to true for now, will need to change this to false as initial value (updated to true when user logs in)
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  //Inital state should be '' until someone is logged in, I've just set a temporary initial value for now
  const [userType, setUserType] = useState("student");

  //This is an object of info from the database see axios request below
  const [user, setUser] = useState([]);

  //Andrei, these will need to be dynamic, I've just set to id of 1 for now
  //Change to run on isLoggedIn change once set up
  useEffect(() => {
    axios
      .get(`http://localhost:4000/${userType}/1`)
      .then((res) => {
        setUser(res.data[0]);
        return res.data[0];
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Routes>
        {/* Andrei - note props added to Home, ProjectLibrary and the 2 ProfileViewers */}

        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} user={user} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/project-library"
          element={
            <ProjectLibrary
              isLoggedIn={isLoggedIn}
              userType={userType}
              user={user}
            />
          }
        />
        <Route
          path="/student-profile-viewer"
          element={
            <StudentProfileViewer isLoggedIn={isLoggedIn} student={user} />
          }
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
          element={
            <TeacherProfileViewer isLoggedIn={isLoggedIn} teacher={user} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
