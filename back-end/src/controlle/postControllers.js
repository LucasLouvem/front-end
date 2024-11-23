import routes from "../routes/postRoutes.js";
import { getAllPosts } from "../models/postModel.js";

export async function postList(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);   
}