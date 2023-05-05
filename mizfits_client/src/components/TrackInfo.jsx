import React from "react";
import "../scenes/TrackPage/TrackPage.css";

function TrackInfo(props) {
  const { title, type, time, distance, sets, reps, weight, description } =
    props.track;

  return (
    <div className="track-info">
      <table align="center" style={{ margin: "0px"}}>
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
