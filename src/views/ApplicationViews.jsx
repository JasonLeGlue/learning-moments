import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { AllPosts } from "../components/AllPosts.jsx";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllPosts />} />
      </Route>
    </Routes>
  );
};
