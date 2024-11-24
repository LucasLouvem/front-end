// Importa a função `postAdd` do controlador de posts
import { ObjectId } from 'mongodb';
import { postAdd } from '../controlle/postControllers.js';
// Importa a função para conectar ao banco de dados MongoDB
import connectDatabase from '../mongo.js';

// Conecta ao banco de dados utilizando a string de conexão fornecida
const connecting = await connectDatabase(process.env.CONNECT_DB); // `process.env.CONNECT_DB` deve conter a string de conexão ao MongoDB

// Função para obter todos os posts
export async function getAllPosts() {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = connecting.db("imersao-instabytes");
    // Seleciona a coleção "posts"
    const collection = db.collection("posts");
    // Busca todos os documentos na coleção e retorna como um array
    return collection.find().toArray();
}

// Função para criar um novo post
export async function createNewPost(newPost) {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = connecting.db("imersao-instabytes");
    // Seleciona a coleção "posts"
    const collection = db.collection("posts");
    // Insere o novo post na coleção e retorna o resultado da operação
    return collection.insertOne(newPost);
}

export async function postUpdating(id, newPost) {
    const db = connecting.db("imersao-instabytes");
    
    const collection = db.collection("posts");

    const objID = ObjectId.createFromHexString(id); 
    
    return collection.updateOne({_id: new ObjectId(objID)}, {$set: newPost});
}
