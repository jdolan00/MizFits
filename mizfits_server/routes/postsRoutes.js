import express from "express";
import { createPost, getAllPosts } from "../controllers/postController.js";
import { verifyToken } from "../middleware/auth.js"; // Add this import

const router = express.Router();

router.post("/auth/posts", verifyToken, createPost);
router.get("/", getAllPosts);

export default router;
