import { getAllPosts, create } from "../models/postModel.js";
import fs from "fs";

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

export async function postUpload(req, res) {
    const newPost = {
        descricao: "",
        imagem: req.file.originalname,
        alt: ""
    };
    try {
        const postCreated = await create(newPost);
        const archiveUpdate = `uploads/${postCreated.insertedId}.png`
        fs.renameSync(req.file.path, archiveUpdate)
        res.status(200).json(postCreated);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}