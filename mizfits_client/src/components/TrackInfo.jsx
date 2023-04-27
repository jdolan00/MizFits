const TrackInfo = ({ track }) => {

    return (
      <div className="tracking-info">
        <h4>{track.title}</h4>
        <p><strong>Load (lbs): </strong>{track.load}</p>
        <p><strong>Number of reps: </strong>{track.reps}</p>
        <p>{track.createdAt}</p>
      </div>
    )
  }
  
  export default TrackInfo