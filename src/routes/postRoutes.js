import express from "express";
import {
    createPost,
    getAllPosts
} from "../controllers/postController"

const postRoutes = express.Router();

postRoutes.post("/", createPost)
postRoutes.get("/", getAllPosts)

export default postRoutes;