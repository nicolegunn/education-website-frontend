import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useState} from "react";
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
  return true ? ( //replace true with useContext(LoggedInContext) upon completion
    element
  ) : (
    <Navigate to="/" />
  );
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
                element={
                  <ProjectLibrary port={PORT} logOutFunction={logOutUser} />
                }
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
              <ProtectedRoute element={<LearningObjectives port={PORT} />} />
            }
          />

          <Route
            path="/instructions"
            element={<ProtectedRoute element={<Instructions port={PORT} />} />}
          />

          <Route
            path="/make-project"
            element={<ProtectedRoute element={<MakeProject />} />}
          />

          <Route
            path="/video-tutorial"
            element={<ProtectedRoute element={<VideoTutorial port={PORT} />} />}
          />

          <Route
            path="/project-submissions"
            element={
              <ProtectedRoute element={<ProjectSubmissions port={PORT} />} />
            }
          />

          <Route
            path="/submit-project"
            element={<ProtectedRoute element={<SubmitProject port={PORT} />} />}
          />

          <Route
            path="/student-profiles"
            element={
              <ProtectedRoute element={<StudentProfiles port={PORT} />} />
            }
          />

          <Route
            path="/progress-tracker"
            element={
              <ProtectedRoute element={<ProgressTracker port={PORT} />} />
            }
          />

          <Route
            path="/help-requests"
            element={<ProtectedRoute element={<HelpRequests />} />}
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
