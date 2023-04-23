import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/usersRoutes.js";
import postRoutes from "./routes/postsRoutes.js";
import { register } from "./controllers/authController.js";
import { createPost } from "./controllers/postController.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
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

// Create a new user document
// const newUser = new User({
//   firstName: 'John',
//   lastName: 'Smith',
//   email: 'john@example.com',
//   password: 'password123'
// });

// // Save the user document to the database
// newUser.save()
//   .then(() => {
//     console.log('User saved');
//   })
//   .catch((error) => {
//     console.error(error);
//   }); 


// const firstName = form.querySelector('#first-name').value;
//   const lastName = form.querySelector('#last-name').value;
//   const email = form.querySelector('#email').value;
//   const password = form.querySelector('#password').value;

//   // Create new user object with user input
//   const newUser = new User({
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     password: password
//   });

//   // Save the user document to the database
//   newUser.save()
//     .then((user) => {
//       console.log(`User ${user.firstName} ${user.lastName} saved`);
//       form.reset(); // Clear the form inputs
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });


app.post("/auth/register", register);
app.post("/posts", verifyToken, createPost);


/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* MONGOOSE SETUP */
//.connect("mongodb+srv://MizFitsUser:Mizzoufitness2023@cluster0.ialsaod.mongodb.net/sample_MizFit",
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    console.log('Connected to database')
    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

  app.get('/api/users',(req,res,next)=>{
    User.find().then(documents=>{
      console.log(documents)
      res.status(200).json({
        message:"fetched data",
        users:documents

      })

    })
    next()
    })
