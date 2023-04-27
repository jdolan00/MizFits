import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    WorkoutName:{type: String, required: true},
    WorkoutDescription:{type: String, required: true},
    WorkoutURL:{type: String, required: true},
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;