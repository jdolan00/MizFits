// models/Post.js
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  content: String,
  firstName: String,
  lastName: String,
  email: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
