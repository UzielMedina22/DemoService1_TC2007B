import express from "express";
import {
    createPost,
    getAllPosts,
    updatePostByID
} from "../controllers/postController.js"

const postRoutes = express.Router();

postRoutes.post("/", createPost)
postRoutes.get("/", getAllPosts)
postRoutes.put("/", updatePostByID)

export default postRoutes;