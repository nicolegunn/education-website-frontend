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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState();
  const [user, setUser] = useState([]);

  const logInUser = (userType, userData) => {
    setIsLoggedIn(true);
    setUserType(userType);
    setUser(userData);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home isLoggedIn={isLoggedIn} userType={userType} user={user} />
          }
        />
        <Route path="/login" element={<Login logInFunction={logInUser} />} />
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
