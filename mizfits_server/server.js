import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
// import session from "express-session";
// import cookieParser from 'cookie-parser';
// DO NOT REMOVE ABOVE IMPORTS, these are to be added
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js"
import { register } from "./controllers/authController.js";
import { login } from "./controllers/authController.js";
import { createPost } from "./controllers/postController.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Workout from "./models/workout.js";
import Track from "./models/Track.js"
import postsRoutes from "./routes/postsRoutes.js";


//import Post from "./models/Post.js";
//import { users } from "./data/seedData.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("/", postsRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Mizfit API!" });
});




/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/posts", verifyToken, createPost);

/* TOKEN VERIFICATION */



/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postsRoutes);
app.use("/workouts", workoutRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    console.log('Connected to database')
  })
  .catch((error) => console.log(`${error} did not connect`));


/* MIDDLEWARE FUNCTIONS FOR API HANDLING */
app.get('/api/users', (req, res) => {
  User.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: 'fetched data',
      users: documents,
    });
  });
});

app.get(`/api/user/:id`, verifyToken, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.get('/api/workouts', async (req, res) => {
  try {
    console.log('Got a request for /api/workouts');
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/api/tracks', async (req, res) => {
  try {
    console.log('Got a request to create a new track');
    const { title, type, time, distance, sets, reps, weight, description, date } = req.body;

    //Retrieve __id from User collection
    const userId = req.body.user;

    //Create new "Track", associate with userID
    const newTrack = new Track({
      title: title,
      type: type,
      time: time,
      distance: distance,
      sets: sets,
      reps: reps,
      weight: weight,
      description: description,
      date: date,
      user: userId,
    });

    await newTrack.save();
    res.status(200).json(newTrack);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


 /* Some weird stuff happening here, it's adding exactly one day somewhere and I can't figure out where */

app.get("/api/tracks/user/:userId", verifyToken, async (req, res) => {
  try {
    const date = new Date(req.query.date);
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));
    const tracks = await Track.find({
      user: req.params.userId,
      date: { $gte: startOfDay, $lt: endOfDay },
    });
    res.json(tracks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});


/* COOKIE CONFIGURATION */
// Cookie configuration to be added, currently causing web console warnings, nothing site breaking, but could pose potential security flaw
