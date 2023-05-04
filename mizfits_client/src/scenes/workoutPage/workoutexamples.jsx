import React from "react";

const DisplayTable = ({ selectedDay }) => {
  return <div dangerouslySetInnerHTML={{ __html: selectedDay }}></div>;
};

const ThreeCardio = `
<h1 align="center">3 Day Cardio Focus</h1>
<h2 align="center">Day 1</h2>
<ThemeProvider theme={TableTheme}>
          <table align="center">
            <thead>
              <tr>
                <th>Workout</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Treadmill Run</td>
                <td>1</td>
                <td>15-min</td>
              </tr>
              <tr>
                <td>Dumbbell Lateral Raises</td>
                <td>3</td>
                <td>8, 6, 6</td>
              </tr>
              <tr>
                <td>Barbell Upright Row</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Clean and Press</td>
                <td>3</td>
                <td>10, 8, 6</td>
              </tr>
              <tr>
                <td>Barbell Hip Thrust</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
            </tbody>
          </table>

          <h2 align="center">Day 2</h2>
          <table align="center">
            <thead>
              <tr>
                <th>Workout</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bicycling</td>
                <td>1</td>
                <td>10-min</td>
              </tr>
              <tr>
                <td>Deadlift</td>
                <td>4</td>
                <td>6, 4, 3, 2</td>
              </tr>
              <tr>
                <td>Lat Pulldown</td>
                <td>3</td>
                <td>15, 12, 10</td>
              </tr>
              <tr>
                <td>Military Press</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Face Pull</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Dumbbell Lunges</td>
                <td>3</td>
                <td>10, 8, 8</td>
              </tr>
            </tbody>
          </table>

          <h2 align="center">Day 3</h2>
          <table align="center">
            <thead>
              <tr>
                <th>Workout</th>
                <th>Sets</th>
                <th>Reps</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mountain Climbers</td>
                <td>2</td>
                <td>30-sec</td>
              </tr>
              <tr>
                <td>Heel Touch Crunches</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Bicycle Crunches</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Lying Leg Raise</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Russian Twist</td>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td>Barbell Back Squat</td>
                <td>3</td>
                <td>15, 12, 10</td>
              </tr>
              <tr>
                <td>Single-arm DB Rowing</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td>Dumbbell Pullover</td>
                <td>3</td>
                <td>10, 8, 8</td>
              </tr>
              <tr>
                <td>Incline Dumbbell Press</td>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
            </tbody>
          </table>
          </ThemeProvider>
`;

const ThreeWeight = `
<h1 align="center">3 Day Weights Focus</h1>
<h2 align="center">Day 1</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bench press</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Incline Dumbbell Press</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Machine Fly</td>
      <td>2</td>
      <td>12-15</td>
    </tr>
    <tr>
      <td>Dumbbell lateral Raises</td>
      <td>2</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Rope Pushdown</td>
      <td>2</td>
      <td>12-15</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 2</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dumbbell Front Squat</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Machine Leg Press</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Dumbbell Lunges</td>
      <td>2</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td>Machine Leg Curl</td>
      <td>2</td>
      <td>12-15</td>
    </tr>
    <tr>
      <td>Calf Raises</td>
      <td>2</td>
      <td>12-15</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 3</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lat Pulldown</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Seated Cable Rowing</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Single-arm Dumbbell Rowing</td>
      <td>2</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td>Reverse Pec Deck Fly</td>
      <td>3</td>
      <td>12-15</td>
    </tr>
    <tr>
      <td>Barbell Curl</td>
      <td>3</td>
      <td>12-15</td>
    </tr>
  </tbody>
</table>
`;

const FourCardio = `
<h1 align="center">4 Day Cardio Focus</h1>
<h2 align="center">Day 1</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Treadmill Run</td>
      <td>1</td>
      <td>10-min</td>
    </tr>
    <tr>
      <td>Bench press</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Dumbbell Lunges</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Dumbbell Overhead Press</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Seated Cable Row</td>
      <td>4</td>
      <td>10-15</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 2</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Machine Leg Press</td>
      <td>3</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Lat Pulldown</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Incline Dumbbell Bench</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Dumbbell Lateral Raise</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Bicycling</td>
      <td>1</td>
      <td>5-10 min</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 3</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Treadmill Run</td>
    <td>1</td>
    <td>10-min</td>
  </tr>
  <tr>
    <td>Military Press</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Machine Fly</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Barbell Bent-over Rowing</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Barbell Upright Row</td>
    <td>3</td>
    <td>8-10</td>
  </tr>
</table>

<h2 align="center">Day 4</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Bicycling</td>
    <td>1</td>
    <td>5-10 min</td>
  </tr>
  <tr>
    <td>Deadlift</td>
    <td>3</td>
    <td>4-5</td>
  </tr>
  <tr>
    <td>Dumbbell Reverse Lunge</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Incline Barbell Bench</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Face Pull</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Treadmill Run</td>
    <td>1</td>
    <td>10-min</td>
  </tr>
</table>
`;

const FourWeight = `
<h1 align="center">4 Day Weights Focus</h1>
<h2 align="center">Day 1</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bench press</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Cable Triceps Pushdown</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>DB Overhead Press</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Seated Cable Row</td>
      <td>4</td>
      <td>10-15</td>
    </tr>
    <tr>
      <td>EZ Bar Biceps Curl</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Machine Leg Press</td>
      <td>4</td>
      <td>10-15</td>
    </tr>
    <tr>
      <td>Weighted Glute Bridge</td>
      <td>3</td>
      <td>8-12</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 2</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Barbell Back Squat</td>
    <td>4</td>
    <td>10-15</td>
  </tr>
  <tr>
    <td>Machine Leg Curl</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Lat Pulldown</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Chinup</td>
    <td>3</td>
    <td>As many possible</td>
  </tr>
  <tr>
    <td>Incline Dumbbell Bench</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Dumbbell Kickback</td>
    <td>3</td>
    <td>8-10</td>
  </tr>
  <tr>
    <td>Dumbbell Lateral Raises</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
</table>

<h2 align="center">Day 3</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Military Press</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Machine Fly</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Barbell Bent-over Rowing</td>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td>Barbell Upright Row</td>
      <td>3</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td>Wrist Curl</td>
      <td>3</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td>Hack Squat</td>
      <td>4</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td>Calf Raises</td>
      <td>3</td>
      <td>8-10</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 4</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Deadlift</td>
    <td>3</td>
    <td>4-5</td>
  </tr>
  <tr>
    <td>Cable Curl</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Single-arm Dumbbell Row</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Incline Barbell Bench</td>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Skull Crusher</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Face Pull</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Shoulder Shrug</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
</table>
`;

const FiveCardio = `
<h1 align="center">5 Day Cardio Focus</h1>
<h2 align="center">Day 1</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps/Duration</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Treadmill Run</td>
      <td>1</td>
      <td>15-min</td>
    </tr>
    <tr>
      <td>Jump Squat</td>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Burpees</td>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Mountain Climbing</td>
      <td>2</td>
      <td>10/each side</td>
    </tr>
    <tr>
      <td>High knees</td>
      <td>2</td>
      <td>20-sec</td>
    </tr>
    <tr>
      <td>Barbell Back Squats</td>
      <td>4</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Incline Bench Press</td>
      <td>4</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>One-arm Dumbbell Row</td>
      <td>3</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td>Bicycling</td>
      <td>1</td>
      <td>10-min</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 2</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Treadmill Run</td>
      <td>1</td>
      <td>10-min</td>
    </tr>
    <tr>
      <td>High Knees</td>
      <td>2</td>
      <td>20-sec</td>
    </tr>
    <tr>
      <td>Jumping Jack</td>
      <td>2</td>
      <td>15</td>
    </tr>
    <tr>
      <td>Jump Squat</td>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td>Deadlift</td>
      <td>3</td>
      <td>4-8</td>
    </tr>
    <tr>
      <td>Military Press</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td>Leg Press</td>
      <td>3</td>
      <td>10-12</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 3</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Treadmill Run</td>
    <td>1</td>
    <td>10-min</td>
  </tr>
  <tr>
    <td>Burpees</td>
    <td>2</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Mountain Climbing</td>
    <td>2</td>
    <td>10/each side</td>
  </tr>
  <tr>
    <td>Reverse Crunches</td>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td>Lying Leg Raises</td>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td>Heel Touch Crunches</td>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td>Side Plank</td>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td>Farmer’s Walk</td>
    <td>3</td>
    <td>long as possible</td>
  </tr>
  <tr>
    <td>Dumbbell lateral Raises</td>
    <td>3</td>
    <td>6-8</td>
  </tr>
  <tr>
    <td>Bent-over Barbell Row</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Bicycling</td>
    <td>1</td>
    <td>10-min</td>
  </tr>
</table>

<h2 align="center">Day 4</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Treadmill Run</td>
    <td>1</td>
    <td>10-min</td>
  </tr>
  <tr>
    <td>Step-up</td>
    <td>2</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Battle Rope</td>
    <td>2</td>
    <td>15-sec</td>
  </tr>
  <tr>
    <td>Dumbbell Lateral Raise</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Cable Facepull</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Bicep Curls</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Bicycling</td>
    <td>1</td>
    <td>10-min</td>
  </tr>
</table>

<h2 align="center">Day 5</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Treadmill Run</td>
    <td>1</td>
    <td>5-min</td>
  </tr>
  <tr>
    <td>Burpees</td>
    <td>2</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Lunges</td>
    <td>2</td>
    <td>10/each side</td>
  </tr>
  <tr>
    <td>Bench Press</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Military Press</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Barbell Bent-Over Row</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Lat Pulldown</td>
    <td>3</td>
    <td>10</td>
  </tr>
</table>
`;

const FiveWeight = `
<h1 align="center">5 Day Weights Focus</h1>
<h2 align="center">Day 1</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Bench Press</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Incline Bench Press</td>
    <td>3</td>
    <td>10-12</td>
  </tr>
  <tr>
    <td>Machine Fly</td>
    <td>3</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Parallel Bar Dips</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>One-arm Lateral Raise</td>
    <td>3</td>
    <td>10/each side</td>
  </tr>
  <tr>
    <td>Rope Pushdown</td>
    <td>2</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Tricep Extension</td>
    <td>2</td>
    <td>10/each side</td>
  </tr>
</table>

<h2 align="center">Day 2</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Barbell Back Squat</td>
      <td>3</td>
      <td>15, 12, 10</td>
    </tr>
    <tr>
      <td>Leg Press</td>
      <td>3</td>
      <td>12, 10, 8</td>
    </tr>
    <tr>
      <td>Leg Extension</td>
      <td>3</td>
      <td>12, 10, 8</td>
    </tr>
    <tr>
      <td>Calf Raise</td>
      <td>3</td>
      <td>15, 12, 10</td>
    </tr>
    <tr>
      <td>Mountain Climbers</td>
      <td>1</td>
      <td>30 seconds</td>
    </tr>
    <tr>
      <td>Heel Touch Crunches</td>
      <td>1</td>
      <td>20 seconds</td>
    </tr>
    <tr>
      <td>Bicycle Crunches</td>
      <td>1</td>
      <td>20 seconds</td>
    </tr>
    <tr>
      <td>Lying Leg Raise</td>
      <td>1</td>
      <td>20 seconds</td>
    </tr>
    <tr>
      <td>Russian Twist</td>
      <td>1</td>
      <td>20 seconds</td>
    </tr>
  </tbody>
</table>

<h2 align="center">Day 3</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Pullup</td>
    <td>3</td>
    <td>Max # Possible</td>
  </tr>
  <tr>
    <td>Lat Pulldown</td>
    <td>4</td>
    <td>12, 10, 8, 6</td>
  </tr>
  <tr>
    <td>Seated Cable Rowing</td>
    <td>4</td>
    <td>12, 10, 8, 6</td>
  </tr>
  <tr>
    <td>Bent-over Barbell Row</td>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td>Cable Pulley Face pull</td>
    <td>3</td>
    <td>10-12</td>
  </tr>
  <tr>
    <td>Barbell Curl</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Concentration Curl</td>
    <td>2</td>
    <td>10</td>
  </tr>
</table>

<h2 align="center">Day 4</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Incline Bench Press</td>
    <td>3</td>
    <td>12</td>
  </tr>
  <tr>
    <td>High to Low Cable Fly</td>
    <td>3</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Dumbbell Lunges</td>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td>Dumbbell Step Up</td>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Romanian Deadlift</td>
    <td>3</td>
    <td>8, 6, 4</td>
  </tr>
</table>

<h2 align="center">Day 5</h2>
<table align="center">
  <thead>
    <tr>
      <th>Workout</th>
      <th>Sets</th>
      <th>Reps</th>
    </tr>
  </thead>
  <tr>
    <td>Arnold Press</td>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td>Dumbbell Bent-Over Raise</td>
    <td>3</td>
    <td>10, 8, 6</td>
  </tr>
  <tr>
    <td>Lat Pulldown</td>
    <td>3</td>
    <td>10, 8, 6</td>
  </tr>
  <tr>
    <td>T-Bar Row</td>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td>One-arm Dumbbell Row</td>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td>Shoulder Shrug</td>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
</table>
`;

export { DisplayTable, ThreeCardio, ThreeWeight, FourCardio, FourWeight, FiveCardio, FiveWeight };
