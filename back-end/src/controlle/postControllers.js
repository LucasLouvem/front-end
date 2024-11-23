import routes from "../routes/postRoutes.js";
import { getAllPosts, create } from "../models/postModel.js";

export async function postList(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);   
}

export async function postAdd(req, res) {
    const newPost = req.body;
    try {
        const postCreated = await create(newPost);
        res.status(200).json(postCreated);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}