// Importa funções específicas do modelo `postModel` para lidar com os dados
import { getAllPosts, createNewPost } from "../models/postModel.js";
// Importa o módulo `fs` para manipular o sistema de arquivos
import fs from "fs";

// Controlador para listar todos os posts
export async function postList(req, res) {
    // Obtém todos os posts chamando a função `getAllPosts` do modelo
    const posts = await getAllPosts();
    // Retorna os posts como resposta com o status 200 (OK)
    res.status(200).json(posts);   
}

// Controlador para adicionar um novo post
export async function postAdd(req, res) {
    const newPost = req.body; // Obtém os dados do corpo da requisição
    try {
        // Cria um novo post chamando a função `create` do modelo
        const postCreated = await createNewPost(newPost);
        // Retorna o post criado com o status 200 (OK)
        res.status(200).json(postCreated);
    } catch (error) {
        // Em caso de erro, registra a mensagem no console
        console.error(error.message);
        // Retorna uma mensagem de erro com o status 500 (Erro interno do servidor)
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

// Controlador para upload de arquivos e criação de post relacionado
export async function postUpload(req, res) {
    // Cria um novo post com informações padrão
    const newPost = {
        descricao: "", // Descrição vazia por padrão
        imagem: req.file.originalname, // Nome original do arquivo carregado
        alt: "" // Texto alternativo vazio por padrão
    };
    try {
        // Cria um novo post chamando a função `create` do modelo
        const postCreated = await create(newPost);
        // Renomeia o arquivo carregado para incluir o ID do post criado
        const archiveUpdate = `uploads/${postCreated.insertedId}.png`;
        fs.renameSync(req.file.path, archiveUpdate); // Atualiza o nome do arquivo no sistema de arquivos
        // Retorna o post criado com o status 200 (OK)
        res.status(200).json(postCreated);
    } catch (error) {
        // Em caso de erro, registra a mensagem no console
        console.error(error.message);
        // Retorna uma mensagem de erro com o status 500 (Erro interno do servidor)
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function postUpdate(req, res) {
    const id = req.params.id; 
    const urlImage = `http://localhost:3000/${id}.png`
    const update = {
        imagem: urlImage,
        descricao: req.body.descricao,
        alt: req.body.alt
    }
    try {
        
        const postUpdating = await create(newPost);
        
        res.status(200).json(postCreated);
    } catch (error) {
        
        console.error(error.message);
        
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}