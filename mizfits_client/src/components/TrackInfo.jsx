import React from 'react';

function TrackInfo(props) {
    const { title, type, time, distance, sets, reps, weight, description, date } = props.track;
  
    return (
      <div className="track-info">
        <h2>{title}</h2>
        <p>Type: {type}</p>
        <p>Time: {time}</p>
        {type === 'cardio' && (
          <p>Distance: {distance}</p>
        )}
        {type === 'weights' && (
          <>
            <p>Sets: {sets}</p>
            <p>Reps: {reps}</p>
            <p>Weight: {weight}</p>
          </>
        )}
        {type === 'create' && (
          <p>Description: {description}</p>
        )}
        <p>Date: {date}</p>
      </div>
    );
  }
  
  export default TrackInfo;