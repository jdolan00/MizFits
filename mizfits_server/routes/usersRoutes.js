import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
  } from "../controllers/userController.js";
import {verifyToken} from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// updat
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
