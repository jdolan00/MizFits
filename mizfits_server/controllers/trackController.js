const Track = require('../models/Track')
const mongoose = require('mongoose')

// get all workouts
const getTracks = async (req, res) => {
  const tracks = await Track.find({}).sort({createdAt: -1})

  res.status(200).json(tracks)
}

// get a single workout
const getTrack = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const track = await Track.findById(id)

  if (!track) {
    return res.status(404).json({error: 'No such workout'})
  }

  res.status(200).json(track)
}

// create a new workout
const createTrack = async (req, res) => {
  const {title, load, reps} = req.body

  // add to the database
  try {
    const track = await Track.create({ title, load, reps })
    res.status(200).json(track)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a workout
const deleteTrack = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const track = await Track.findOneAndDelete({_id: id})

  if(!track) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(track)
}

// update a workout
const updateTrack = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such workout'})
  }

  const track = await Track.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!track) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(track)
}

module.exports = {
  getTracks,
  getTrack,
  createTrack,
  deleteTrack,
  updateTrack
}