import mongoose from "mongoose";

const Schema = mongoose.Schema

const trackSchema = new Schema({
    type: {
        type: String,
        enum: ['cardio', 'weights', 'create'],
        required: true
      },
      title: {
        type: String,
        required: true
      },
      time: {
        type: Number
      },
      distance: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      weight: {
        type: Number,
        min: 0
      },
      description: {
        type: String
      },
      date: {
        type: Date,
        required: true
      }
    }, { timestamps: true })

const Track = mongoose.model('Track', trackSchema);

export default Track;