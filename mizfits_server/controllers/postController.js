import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
  const content = req.body.content;
  const newPost = new Post({ content });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
