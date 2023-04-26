import { BrowserRouter, /*Navigate,*/ Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './scenes/homePage/homePage';
import LoginPage from './scenes/loginPage/LogInPage';
import ProfilePage from './scenes/profilePage/ProfilePage';
import WorkoutPage from './scenes/workoutPage/workoutPage';
import WorkoutPlans from './scenes/workoutPage/Workoutplans';
import Workouts from './scenes/Workouts/Workouts';
import Workout from './scenes/Workouts/Workout';

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
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:workoutName" element={<Workout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;