import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext, LoggedInContext } from "./context.js";

import Home from "./pages/Home/Home.jsx";
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

const PORT = 4000;

// This function is used to protect routes that require the user to be logged in
function ProtectedRoute({ element }) {
  return useContext(LoggedInContext) ? element : <Navigate to="/" />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    profile_pic: "/images/Avatar-white.png",
  });

  const navigate = useNavigate();

  const logInUser = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    let link;
    link =
      userData.user_type === "teacher"
        ? "/progress-tracker"
        : "/project-library";
    navigate(link);
  };

  const logOutUser = () => {
    setIsLoggedIn(false);
    setUser({
      profile_pic: "/images/Avatar-white.png",
    });
    navigate("/");
  };

  return (
    <UserContext.Provider value={user}>
      <LoggedInContext.Provider value={isLoggedIn}>
        <Routes>

          <Route
            path="/"
              element={
                <Home
                  port={PORT}
                  logInFunction={logInUser}
                  logOutFunction={logOutUser}
                />
              }
            />

          <Route
            path="/project-library"
              element={
                <ProtectedRoute
                  element={<ProjectLibrary logOutFunction={logOutUser} />}
                />
              }
            />

          <Route
            path="/student-profile-viewer"
              element={
                <ProtectedRoute
                  element={<StudentProfileViewer logOutFunction={logOutUser} />}
                />
              }
            />

          <Route
            path="/learning-objectives"
              element={
                <ProtectedRoute
                  element={<LearningObjectives logOutFunction={logOutUser} />}
                />
              }
            />

          <Route 
            path="/instructions" 
              element={
                <ProtectedRoute
                  element={<Instructions logOutFunction={logOutUser} />}
                />
              }
            />
                  

          <Route 
            path="/make-project" 
              element={
                <ProtectedRoute
                  element={<MakeProject logOutFunction={logOutUser} />}
                />
              }
            />


          <Route
            path="/video-tutorial"
              element={
                <ProtectedRoute
                  element={<VideoTutorial logOutFunction={logOutUser} />}
                />
              }
            />

          <Route
            path="/project-submissions"
              element={
                <ProtectedRoute
                  element={<ProjectSubmissions logOutFunction={logOutUser} />}
                />
              }
            />

          <Route
            path="/submit-project"
              element={
                <ProtectedRoute
                  element={<SubmitProject logOutFunction={logOutUser} />}
                />
              }
            />

          <Route
            path="/student-profiles"
              element={
                <ProtectedRoute
                  element={<StudentProfiles logOutFunction={logOutUser} />}
                />
              }
            />

          <Route
            path="/progress-tracker"
              element={
                <ProtectedRoute
                  element={<ProgressTracker logOutFunction={logOutUser} />}
                />
              }
            />

          <Route 
            path="/help-requests" 
              element={
                <ProtectedRoute
                  element={<HelpRequests logOutFunction={logOutUser} />}
                />
              }
            />


          <Route
            path="/teacher-profile-viewer"
              element={
                <ProtectedRoute
                  element={<TeacherProfileViewer logOutFunction={logOutUser} />}
                />
              }
            />
            
        </Routes>
      </LoggedInContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
