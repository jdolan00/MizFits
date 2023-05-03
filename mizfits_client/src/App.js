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
import AboutPage from "scenes/aboutPage/aboutPage";
import ProfilePage from "./scenes/profilePage/ProfilePage";
import WorkoutPage from "./scenes/workoutPage/workoutPage";
import WorkoutPlans from "./scenes/workoutPage/Workoutplans";
import Workout from "scenes/Workouts/Workout";
import Workouts from "scenes/Workouts/Workouts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/routine" element={<WorkoutPlans />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:workoutName" element={<Workout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
