import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from 'react-router-dom';

export function CardBase(props) {
  return (
    <Grid item key={Card} md={4}>
      <Card sx={{ borderRadius: "16px" }}>
        <CardMedia component="img" image={props.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.days}
          </Typography>
          <Typography>{props.subtext}</Typography>
        </CardContent>
        <CardActions>
          <Link to="/routine">
            <Button size="small">{props.button1}</Button>
          </Link>
          <Button size="small">{props.button2}</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
// image1 = "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
