import { useState } from 'react'

const TrackForm = () => {
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const track = {title, load, reps}
    
    const response = await fetch('http://localhost:3001/api/tracks', {
      method: 'POST',
      body: JSON.stringify(track),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added:', json)
    }

  }

  return (
    <form className="create" id='trackForm' onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <label className='trackLabel'>Excersize Title:</label>
      <input 
        className='trackInput'
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label className='trackLabel'>Load (in lbs):</label>
      <input 
        className='trackInput'
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
      />

      <label className='trackLabel'>Number of Reps:</label>
      <input 
        className='trackInput'
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
      />

      <button className='trackButton'>Add Workout</button>
      {error && <div className="trackError">{error}</div>}
    </form>
  )
}

export default TrackForm