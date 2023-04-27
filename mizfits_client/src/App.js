import { BrowserRouter, /*Navigate,*/ Routes, Route } from "react-router-dom";
// import LogInPage from "scenes/loginPage/LogInPage";
// import { useSelector } from "react-redux";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { createTheme } from "@mui/material/styles";
// import { themeSettings } from "./theme";
// import { useMemo } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./scenes/homePage/homePage";
import LoginPage from "./scenes/loginPage/LogInPage";
import ProfilePage from "./scenes/profilePage/ProfilePage";
import WorkoutPage from "./scenes/workoutPage/workoutPage";
import WorkoutPlans from "./scenes/workoutPage/Workoutplans";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/routine" element={<WorkoutPlans />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
