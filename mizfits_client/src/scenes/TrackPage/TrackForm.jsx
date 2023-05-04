import { Box } from '@mui/material';
import React, { useState } from 'react';
import UserDetails from 'components/UserDetails';
import "./TrackPage.css";

function TrackForm( { userId, onSubmit }) {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [user, setUser] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value); 
  };

  const handleSubmit = async (event, onSubmit) => {
    event.preventDefault();

        // Prepare data to send to the server
        const data = {
            type: type,
            title: title,
            time: time,
            distance: distance,
            sets: sets,
            reps: reps,
            weight: weight,
            description: description,
            date: date,
            user: userId,
          };

          console.log(data);
      
          // Send POST request to the server to save the workout
          try {
            const response = await fetch('http://localhost:3001/api/tracks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                
              });

              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
          
              console.log('Exercise added successfully!');
              onSubmit();
            } catch (error) {
              console.error('Error:', error);
            }
    
      
          // Clear the form
          setType('');
          setTitle('');
          setTime('');
          setDistance('');
          setSets('');
          setReps('');
          setWeight('');
          setDescription('');
          setDate('');
          setUser('');
        };


  return (
      <form id="trackForm" onSubmit={( event ) => handleSubmit(event, onSubmit)}>
        <Box id="trackFormBox">
          <label className="trackLabel" htmlFor="trackType" style={{textAlign: "center"}}>Select exercise type:</label>
          <select className="trackInput" id="trackType" name="type" value={type} onChange={handleTypeChange}>
            <option value="">Select a type</option>
            <option value="cardio">Cardio</option>
            <option value="weights">Weights</option>
            <option value="create">Create</option>
          </select>

          <label className="trackLabel" htmlFor="trackTitle">Title:</label>
          <input className="trackInput" type="text" id="trackTitle" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />

          {type === 'cardio' && (
            <>
              <label className="trackLabel" htmlFor="trackTime">Time (Min.):</label>
              <input className="trackInput" type="text" id="trackTime" name="time" value={time} onChange={(event) => setTime(event.target.value)} />

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

              <label className="trackLabel" htmlFor="trackWeight">Weight:</label>
              <input className="trackInput" type="text" id="trackWeight" name="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />  

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