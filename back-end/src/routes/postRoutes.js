// Importa os módulos necessários
import express from "express"; // Framework para criar e gerenciar o servidor HTTP
import multer from "multer"; // Middleware para lidar com upload de arquivos
import { postAdd, postList, postUpload } from "../controlle/postControllers.js"; // Funções controladoras específicas para lidar com requisições

// Configuração do armazenamento do multer
const storage = multer.diskStorage({
    // Define o destino onde os arquivos serão armazenados
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Pasta 'uploads' será usada para salvar os arquivos
    },
    // Define o nome do arquivo armazenado
    filename: function(req, file, cb) {
        cb(null, file.originalname); // Usa o nome original do arquivo
    }
});

// Cria uma instância de multer com configurações personalizadas
const upload = multer({ 
    dest: "./uploads", // Diretório padrão de armazenamento
    storage // Usa o armazenamento configurado acima
});

// Configuração das rotas da aplicação
const routes = (app) => {

    // Middleware para habilitar o parsing de JSON no corpo das requisições
    app.use(express.json());

    // Rota para listar posts, associada ao controlador `postList`
    app.get("/posts", postList);

    // Rota para adicionar um novo post, associada ao controlador `postAdd`
    app.post("/posts", postAdd);

    // Rota para upload de arquivo, aceita um arquivo com o nome "imagem"
    app.post("/upload", upload.single("imagem"), postUpload);
}

// Exporta o módulo de rotas para uso em outros arquivos
export default routes;
