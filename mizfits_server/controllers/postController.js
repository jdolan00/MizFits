import mongoose from 'mongoose';
import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  const { content } = req.body;
  const userId = req.userId;

  console.log('User ID:', userId); // Add this line

  try {
    const user = await User.findById(userId);

    console.log('User:', user); // Add this line

    const newId = new mongoose.Types.ObjectId();

    const newPost = new Post({
      _id: newId,
      content: content,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error in createPost:', error); // Update this line
    res.status(500).json({ message: "Error creating post" });
  }
};


export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
