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
import {
  ThreeCardio,
  ThreeWeight,
  FourCardio,
  FourWeight,
  FiveCardio,
  FiveWeight,
} from "../scenes/workoutPage/workoutexamples"

export function CardBase(props) {
  const handleSelect = (value) => {
    switch (value) {
      case "ThreeCardio":
        props.setSelectedRoutine(ThreeCardio);
        break;
      case "ThreeWeight":
        props.setSelectedRoutine(ThreeWeight);
        break;
      case "FourCardio":
        props.setSelectedRoutine(FourCardio);
        break;
      case "FourWeight":
        props.setSelectedRoutine(FourWeight);
        break;
      case "FiveCardio":
        props.setSelectedRoutine(FiveCardio);
        break;
      case "FiveWeight":
        props.setSelectedRoutine(FiveWeight);
        break;
      default:
        props.setSelectedRoutine("");
        break;
    }
  };

  return (
    <Grid item key={Card} md={4}>
      <Card sx={{ borderRadius: "16px"}}>
        <CardMedia component="img" image={props.img} sx={{ mb: "-12px"}} />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.days}
          </Typography>
          <Typography>{props.subtext}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", mt: -1  }}>
          <Button size="small" onClick={() => handleSelect(props.button1)}>
            Cardio
          </Button>
          <Button size="small" onClick={() => handleSelect(props.button2)}>
            Weights
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
