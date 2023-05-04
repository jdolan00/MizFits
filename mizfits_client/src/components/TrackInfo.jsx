import React from "react";
import "../scenes/TrackPage/TrackPage.css";

function TrackInfo(props) {
  const { title, type, time, distance, sets, reps, weight, description, date } =
    props.track;

  return (
    <div className="track-info">
      <table align="center" style={{ width: "60%", margin: "0px 15rem"}}>
        <tbody>
          <tr className="weights" >
            {type === "weights" && (
              <>
                <th>{title}</th>
                <th>Sets/Reps: {sets}x{reps}</th>
                <th>Weight: {weight}</th>
              </>
            )}
          </tr>
          </tbody>
          <tbody>
          <tr className="cardio">
            {type === "cardio" && (
              <>
                <th>{title}</th>
                <th>Time: {time} min</th>
                <th>Distance: {distance} Mi</th>
              </>
            )}
          </tr>
        </tbody>
        <tbody>
          <tr className="create">
            {type === "create" && (
              <>
                <th>{title}</th>
                <th>Description:</th>
                <tr>{description}</tr>
              </>
            )}
          </tr>
        </tbody>
      </table>
      {/* <p>Date: {date}</p>  NOT NEEDED FOR USERS SAKE */}
    </div>
  );
}

export default TrackInfo;

// import React from 'react';

// function TrackInfo(props) {
//     const { title, type, time, distance, sets, reps, weight, description, date } = props.track;

//     return (
//       <div className="track-info">
//         <h2>{title}</h2>
//         <p>Type: {type}</p>
//         <p>Time: {time}</p>
//         {type === 'cardio' && (
//           <p>Distance: {distance}</p>
//         )}
//         {type === 'weights' && (
//           <>
//             <p>Sets: {sets}</p>
//             <p>Reps: {reps}</p>
//             <p>Weight: {weight}</p>
//           </>
//         )}
//         {type === 'create' && (
//           <p>Description: {description}</p>
//         )}
//         {/* <p>Date: {date}</p>  NOT NEEDED FOR USERS SAKE */}
//       </div>
//     );
//   }

//   export default TrackInfo;
