import React from "react";

const ThreeCardio = `
<h1 align="center">3 Days</h1>
<h1 align="center">Cardio Focused</h1>
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
                <td><a href="/Workouts/Treadmill">Treadmill</td></a>
                <td>1</td>
                <td>10-min</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Dumbbell Lateral Raises">Dumbbell Lateral Raises</td></a>
                <td>3</td>
                <td>8, 6, 6</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Barbell Upright Row">Barbell Upright Row</td></a>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Clean and Press">Clean and Press</td></a>
                <td>3</td>
                <td>10, 8, 6</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Barbell Hip Thrust">Barbell Hip Thrust</td></a>
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
                <tr>
                  <td><a href="/Workouts/Bicycling">Bicycling</td></a>
                  <td>1</td>
                  <td>5-10 min</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Deadlift">Deadlift</td></a>
                <td>4</td>
                <td>6, 4, 3, 2</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Lat Pulldown">Lat Pulldown</td></a>
                <td>3</td>
                <td>15, 12, 10</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Military Press">Military Press</td></a>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Face Pull">Face Pull</td></a>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Dumbbell Lunges">Dumbbell Lunges</td></a>
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
                <td><a href="/Workouts/Mountain Climbers">Mountain Climbers</td></a>
                <td>2</td>
                <td>30-sec</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Heel Touch Crunches">Heel Touch Crunches</td></a>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Bicycle Crunches">Bicycle Crunches</td></a>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Lying Leg Raise">Lying Leg Raise</td></a>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Russian Twist">Russian Twist</td></a>
                <td>2</td>
                <td>20-sec</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Barbell Back Squat">Barbell Back Squat</td></a>
                <td>3</td>
                <td>15, 12, 10</td>
              </tr>
                <td><a href="/Workouts/Single-arm Dumbbell Row">Single-arm Dumbbell Row</td></a>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Dumbbell Pullover">Dumbbell Pullover</td></a>
                <td>3</td>
                <td>10, 8, 8</td>
              </tr>
              <tr>
                <td><a href="/Workouts/Incline Dumbbell Press">Incline Dumbbell Press</td></a>
                <td>3</td>
                <td>12, 10, 8</td>
              </tr>
            </tbody>
          </table>
          </ThemeProvider>
`;

const ThreeWeight = `
<h1 align="center">3 Days</h1>
<h1 align="center">Weights Focused</h1>
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
      <td><a href="/Workouts/Bench Press">Bench Press</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Incline Dumbbell Press">Incline Dumbbell Press</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Machine Fly">Machine Fly</td></a>
      <td>2</td>
      <td>12-15</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Dumbbell Lateral Raises">Dumbbell Lateral Raises</td></a>
      <td>2</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Rope Pushdown">Rope Pushdown</td></a>
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
      <td><a href="/Workouts/Dumbbell Front Squat">Dumbbell Front Squat</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Machine Leg Press">Machine Leg Press</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Dumbbell Lunges">Dumbbell Lunges</td></a>
      <td>2</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Machine Leg Curl">Machine Leg Curl</td></a>
      <td>2</td>
      <td>12-15</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Calf Raises">Calf Raises</td></a>
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
      <td><a href="/Workouts/Lat Pulldown">Lat Pulldown</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Seated Cable Row">Seated Cable Row</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Single-arm Dumbbell Row">Single-arm Dumbbell Row</td></a>
      <td>2</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Reverse Pec Fly">Reverse Pec Fly</td></a>
      <td>3</td>
      <td>12-15</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Barbell Curl">Barbell Curl</td></a>
      <td>3</td>
      <td>12-15</td>
    </tr>
  </tbody>
</table>
`;

const FourCardio = `
<h1 align="center">4 Days</h1>
<h1 align="center">Cardio Focused</h1>
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
      <td><a href="/Workouts/Treadmill">Treadmill</td></a>
      <td>1</td>
      <td>10-min</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Bench Press">Bench Press</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Dumbbell Lunges">Dumbbell Lunges</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Dumbbell Overhead Press">Dumbbell Overhead Press</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Seated Cable Row">Seated Cable Row</td></a>
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
      <td><a href="/Workouts/Machine Leg Press">Machine Leg Press</td></a>
      <td>3</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Lat Pulldown">Lat Pulldown</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Incline Dumbbell Press">Incline Dumbbell Press</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Dumbbell Lateral Raises">Dumbbell Lateral Raises</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Bicycling">Bicycling</td></a>
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
    <td><a href="/Workouts/Treadmill">Treadmill</td></a>
    <td>1</td>
    <td>10-min</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Military Press">Military Press</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Machine Fly">Machine Fly</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Barbell Bent-Over Rowing">Barbell Bent-Over Rowing</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Barbell Upright Row">Barbell Upright Row</td></a>
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
    <td><a href="/Workouts/Bicycling">Bicycling</td></a>
    <td>1</td>
    <td>5-10 min</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Deadlift">Deadlift</td></a>
    <td>3</td>
    <td>4-5</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Reverse Lunge">Dumbbell Reverse Lunge</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Incline Barbell Bench">Incline Barbell Bench</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Face Pull">Face Pull</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Treadmill">Treadmill</td></a>
    <td>1</td>
    <td>10-min</td>
  </tr>
</table>
`;

const FourWeight = `
<h1 align="center">4 Days</h1>
<h1 align="center">Weights Focused</h1>
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
      <td><a href="/Workouts/Bench Press">Bench Press</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Rope Pushdown">Rope Pushdown</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Dumbbell Overhead Press">Dumbbell Overhead Press</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Seated Cable Row">Seated Cable Row</td></a>
      <td>4</td>
      <td>10-15</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Bicep Curl">Bicep Curl</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Machine Leg Press">Machine Leg Press</td></a>
      <td>4</td>
      <td>10-15</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Weighted Glute Bridge">Weighted Glute Bridge</td></a>
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
    <td><a href="/Workouts/Barbell Back Squat">Barbell Back Squat</td></a>
    <td>4</td>
    <td>10-15</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Machine Leg Curl">Machine Leg Curl</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Lat Pulldown">Lat Pulldown</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Chinup">Chinup</td></a>
    <td>3</td>
    <td>As many possible</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Incline Dumbbell Press">Incline Dumbbell Press</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Kickback">Dumbbell Kickback</td></a>
    <td>3</td>
    <td>8-10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Lateral Raises">Dumbbell Lateral Raises</td></a>
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
      <td><a href="/Workouts/Military Press">Military Press</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Machine Fly">Machine Fly</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Barbell Bent-Over Rowing">Barbell Bent-Over Rowing</td></a>
      <td>4</td>
      <td>8-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Barbell Upright Row">Barbell Upright Row</td></a>
      <td>3</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Wrist Curl">Wrist Curl</td></a>
      <td>3</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Hack Squat">Hack Squat</td></a>
      <td>4</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Calf Raises">Calf Raises</td></a>
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
    <td><a href="/Workouts/Deadlift">Deadlift</td></a>
    <td>3</td>
    <td>4-5</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Cable Curl">Cable Curl</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Single-arm Dumbbell Row">Single-arm Dumbbell Row</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Incline Barbell Bench">Incline Barbell Bench</td></a>
    <td>4</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Skull Crusher">Skull Crusher</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Face Pull">Face Pull</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Shoulder Shrug">Shoulder Shrug</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
</table>
`;

const FiveCardio = `
<h1 align="center">5 Days</h1>
<h1 align="center">Cardio Focused</h1>
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
      <td><a href="/Workouts/Treadmill">Treadmill</td></a>
      <td>1</td>
      <td>15-min</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Jump Squat">Jump Squat</td></a>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Burpees">Burpees</td></a>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Mountain Climbers">Mountain Climbers</td></a>
      <td>2</td>
      <td>10/each side</td>
    </tr>
    <tr>
      <td><a href="/Workouts/High Knees">High Knees</td></a>
      <td>2</td>
      <td>20-sec</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Barbell Back Squat">Barbell Back Squat</td></a>
      <td>4</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Incline Barbell Bench">Incline Barbell Bench</td></a>
      <td>4</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Single-arm Dumbbell Row">Single-arm Dumbbell Row</td></a>
      <td>3</td>
      <td>8-10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Bicycling">Bicycling</td></a>
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
      <td><a href="/Workouts/Treadmill">Treadmill</td></a>
      <td>1</td>
      <td>10-min</td>
    </tr>
    <tr>
      <td><a href="/Workouts/High Knees">High Knees</td></a>
      <td>2</td>
      <td>20-sec</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Jumping Jack">Jumping Jack</td></a>
      <td>2</td>
      <td>15</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Jump Squat">Jump Squat</td></a>
      <td>2</td>
      <td>10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Deadlift">Deadlift</td></a>
      <td>3</td>
      <td>4-8</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Military Press">Military Press</td></a>
      <td>3</td>
      <td>10-12</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Machine Leg Press">Machine Leg Press</td></a>
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
    <td><a href="/Workouts/Treadmill">Treadmill</td></a>
    <td>1</td>
    <td>10-min</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Burpees">Burpees</td></a>
    <td>2</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Mountain Climbers">Mountain Climbers</td></a>
    <td>2</td>
    <td>10/each side</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Reverse Crunches">Reverse Crunches</td></a>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Lying Leg Raise">Lying Leg Raise</td></a>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Heel Touch Crunches">Heel Touch Crunches</td></a>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Side Plank">Side Plank</td></a>
    <td>2</td>
    <td>20-sec</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Farmer’s Walk">Farmer’s Walk</td></a>
    <td>3</td>
    <td>As long as possible</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Lateral Raises">Dumbbell Lateral Raises</td></a>
    <td>3</td>
    <td>6-8</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Barbell Bent-Over Rowing">Barbell Bent-Over Rowing</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Bicycling">Bicycling</td></a>
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
    <td><a href="/Workouts/Treadmill">Treadmill</td></a>
    <td>1</td>
    <td>10-min</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Step-up">Step-up</td></a>
    <td>2</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Battle Rope">Battle Rope</td></a>
    <td>2</td>
    <td>15-sec</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Lateral Raises">Dumbbell Lateral Raises</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Cable Facepull">Cable Facepull</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Bicep Curl">Bicep Curl</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Bicycling">Bicycling</td></a>
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
    <td><a href="/Workouts/Treadmill">Treadmill</td></a>
    <td>1</td>
    <td>5-min</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Burpees">Burpees</td></a>
    <td>2</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Lunges">Lunges</td></a>
    <td>2</td>
    <td>10/each side</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Bench Press">Bench Press</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Military Press">Military Press</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Barbell Bent-Over Rowing">Barbell Bent-Over Rowing</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Lat Pulldown">Lat Pulldown</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
</table>
`;

const FiveWeight = `
<h1 align="center">5 Days</h1>
<h1 align="center">Weights Focused</h1>
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
    <td><a href="/Workouts/Bench Press">Bench Press</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Incline Barbell Bench">Incline Barbell Bench</td></a>
    <td>3</td>
    <td>10-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Machine Fly">Machine Fly</td></a>
    <td>3</td>
    <td>12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Parallel Bar Dips">Parallel Bar Dips</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/One-arm Lateral Raise">One-arm Lateral Raise</td></a>
    <td>3</td>
    <td>10/each side</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Rope Pushdown">Rope Pushdown</td></a>
    <td>2</td>
    <td>15</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Tricep Extension">Tricep Extension</td></a>
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
      <td><a href="/Workouts/Barbell Back Squat">Barbell Back Squat</td></a>
      <td>3</td>
      <td>15, 12, 10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Machine Leg Press">Machine Leg Press</td></a>
      <td>3</td>
      <td>12, 10, 8</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Leg Extension">Leg Extension</td></a>
      <td>3</td>
      <td>12, 10, 8</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Calf Raises">Calf Raises</td></a>
      <td>3</td>
      <td>15, 12, 10</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Mountain Climbers">Mountain Climbers</td></a>
      <td>1</td>
      <td>30 seconds</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Heel Touch Crunches">Heel Touch Crunches</td></a>
      <td>1</td>
      <td>20 seconds</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Bicycle Crunches">Bicycle Crunches</td></a>
      <td>1</td>
      <td>20 seconds</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Lying Leg Raise">Lying Leg Raise</td></a>
      <td>1</td>
      <td>20 seconds</td>
    </tr>
    <tr>
      <td><a href="/Workouts/Russian Twist">Russian Twist</td></a>
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
    <td><a href="/Workouts/Pullup">Pullup</td></a>
    <td>3</td>
    <td>Max # Possible</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Lat Pulldown">Lat Pulldown</td></a>
    <td>4</td>
    <td>12, 10, 8, 6</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Seated Cable Row">Seated Cable Row</td></a>
    <td>4</td>
    <td>12, 10, 8, 6</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Barbell Bent-Over Rowing">Barbell Bent-Over Rowing</td></a>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Face Pull">Face Pull</td></a>
    <td>3</td>
    <td>10-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Barbell Curl">Barbell Curl</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Concentration Curl">Concentration Curl</td></a>
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
    <td><a href="/Workouts/Incline Barbell Bench">Incline Barbell Bench</td></a>
    <td>3</td>
    <td>12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/High to Low Cable Fly">High to Low Cable Fly</td></a>
    <td>3</td>
    <td>12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Lunges">Dumbbell Lunges</td></a>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Step Up">Dumbbell Step Up</td></a>
    <td>3</td>
    <td>10</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Romanian Deadlift">Romanian Deadlift</td></a>
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
    <td><a href="/Workouts/Arnold Press">Arnold Press</td></a>
    <td>3</td>
    <td>8-12</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Dumbbell Bent-Over Raise">Dumbbell Bent-Over Raise</td></a>
    <td>3</td>
    <td>10, 8, 6</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Lat Pulldown">Lat Pulldown</td></a>
    <td>3</td>
    <td>10, 8, 6</td>
  </tr>
  <tr>
    <td><a href="/Workouts/T-Bar Row">T-Bar Row</td></a>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Single-arm Dumbbell Row">Single-arm Dumbbell Row</td></a>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
  <tr>
    <td><a href="/Workouts/Shoulder Shrug">Shoulder Shrug</td></a>
    <td>3</td>
    <td>12, 10, 8</td>
  </tr>
</table>
`;

export {
  ThreeCardio,
  ThreeWeight,
  FourCardio,
  FourWeight,
  FiveCardio,
  FiveWeight,
};
