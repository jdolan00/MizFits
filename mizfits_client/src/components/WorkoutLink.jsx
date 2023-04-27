import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutLink = ({ workout }) => {
  return (
    <li>
      <Link to={`/workouts/${workout.WorkoutName}`}>{workout.WorkoutName}</Link>
    </li>
  );
};

export default WorkoutLink;