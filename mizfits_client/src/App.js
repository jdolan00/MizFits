import { useState } from "react";
import { BrowserRouter, /*Navigate,*/ Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './scenes/homePage/homePage';
import LoginPage from './scenes/loginPage/LogInPage';
import ProfilePage from './scenes/profilePage/ProfilePage';
import WorkoutPage from './scenes/workoutPage/workoutPage';
import WorkoutPlans from './scenes/workoutPage/Workoutplans';
import Workouts from './scenes/Workouts/Workouts';
import Workout from './scenes/Workouts/Workout';
import TrackingPage from './scenes/TrackPage/TrackPage';
import ProtectedRoute from "./components/ProtectedRoute";
import FeedPage from "scenes/feedPage/FeedPage";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedin={isLoggedIn} onLogin={handleLogin} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        {/* PROTECTED ROUTES */}
        <Route
          element={<ProtectedRoute />}
        >
          <Route path="/track" element={<TrackingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/routine" element={<WorkoutPlans />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/:workoutName" element={<Workout />} />
          <Route path="/feed" element={<FeedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;