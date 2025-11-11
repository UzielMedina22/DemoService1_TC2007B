import express from "express";
import {
    createPost,
    getAllPosts,
    updatePost,
    deletePost
} from "../controllers/postController.js"

const postRoutes = express.Router();

postRoutes.post("/", createPost)
postRoutes.get("/", getAllPosts)
postRoutes.patch("/:id", updatePost)
postRoutes.delete("/:id", updatePost)

export default postRoutes;