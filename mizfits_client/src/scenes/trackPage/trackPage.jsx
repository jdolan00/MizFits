import * as React from "react";
// import {
//   AppBar,
//   CssBaseline,
//   Box,
//   Toolbar,
//   Typography,
//   Container,
// } from "@mui/material";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer } from "components/Footer";
import { useEffect, useState } from "react";
import TrackInfo from "components/TrackInfo";
import TrackForm from "./TrackForm"

const TrackPage = () => {
  const [tracks, setTracks] = useState(null)

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await fetch('http://localhost:3001/api/tracks')
      const json = await response.json()

      if (response.ok) {
        setTracks(json)
      }
    }

    fetchTracks()
  }, [])

  return (
    <div className="track">
      <div className="tracks">
        {tracks && tracks.map(track => (
          <TrackInfo track={track} key={track._id} />
        ))}
      </div>
      <TrackForm />  {/*tracking form*/}
      <Footer></Footer>
    </div>
  )
}

export default TrackPage

