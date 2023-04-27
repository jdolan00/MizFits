import express from "express";
const router = express.Router();
import Workout from '../models/workout.js';

router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:WorkoutName', async (req, res) => {
  const { WorkoutName } = req.params;
  try {
    const workout = await Workout.findOne({ WorkoutName });
    res.json(workout);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;