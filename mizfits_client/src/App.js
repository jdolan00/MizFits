import {useState} from "react";
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



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = (loggedIn) => {
    setIsLoggedIn(loggedIn);
  };
  
  return (
    <BrowserRouter>
      <Navbar isLoggedin={isLoggedIn} onLogin={handleLogin}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        {/* PROTECTED ROUTES */}
        <Route path="/track" element={<ProtectedRoute component={TrackingPage} />} />
        <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
        <Route path="/workout" element={<ProtectedRoute component={WorkoutPage} />} />
        <Route path="/routine" element={<ProtectedRoute component={WorkoutPlans} />} />
        <Route path="/workouts" element={<ProtectedRoute component={Workouts} />}>
          <Route index element={<Workouts />} />
          <Route path=":workoutName" element={<Workout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;