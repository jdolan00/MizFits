import { Box } from '@mui/material';
import React, { useState } from 'react';

function TrackForm() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <form id="trackForm" onSubmit={handleSubmit}>
        <Box id="trackFormBox">
          <label className="trackLabel" htmlFor="trackType">Select exercise type:</label>
          <select className="trackInput" id="trackType" name="type" value={type} onChange={handleTypeChange}>
            <option value="">Select a type</option>
            <option value="cardio">Cardio</option>
            <option value="weights">Weights</option>
            <option value="create">Create</option>
          </select>

          <label className="trackLabel" htmlFor="trackTitle">Title:</label>
          <input className="trackInput" type="text" id="trackTitle" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />

          <label className="trackLabel" htmlFor="trackTime">Time (Min.):</label>
          <input className="trackInput" type="text" id="trackTime" name="time" value={time} onChange={(event) => setTime(event.target.value)} />

          {type === 'cardio' && (
            <>
              <label className="trackLabel" htmlFor="trackDistance">Distance (Mi.):</label>
              <input className="trackInput" type="text" id="trackDistance" name="distance" value={distance} onChange={(event) => setDistance(event.target.value)} />

              <label className="trackLabel" htmlFor="trackDate">Date:</label>
              <input className="trackInput" type="date" id="trackDate" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </>
          )}

          {type === 'weights' && (
            <>
              <label className="trackLabel" htmlFor="trackSets">Sets:</label>
              <input className="trackInput" type="text" id="trackSets" name="sets" value={sets} onChange={(event) => setSets(event.target.value)} />

              <label className="trackLabel" htmlFor="trackReps">Reps:</label>
              <input className="trackInput" type="text" id="trackReps" name="reps" value={reps} onChange={(event) => setReps(event.target.value)} />

              <label className="trackLabel" htmlFor="trackDate">Date:</label>
              <input className="trackInput" type="date" id="trackDate" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </>
          )}

          {type === 'create' && (
            <>
              <label className="trackLabel" htmlFor="trackDescription">Description:</label>
              <textarea id="trackDescription" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />

              <label className="trackLabel" htmlFor="trackDate">Date:</label>
              <input className="trackInput" type="date" id="trackDate" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </>
          )}

          <button id="trackButton" type="submit">Add exercise</button>
        </Box>
      </form>
    
  );
}

export default TrackForm;