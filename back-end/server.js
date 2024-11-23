// Importa o módulo express para criar o servidor
import express from 'express';

// Importa as rotas definidas em 'postRoutes.js' que serão usadas no servidor
import routes from './src/routes/postRoutes.js';

// Cria uma instância do servidor Express
const app = express();

// Chama a função de rotas passando o aplicativo Express, onde as rotas serão registradas
routes(app);

// Configura o servidor para ouvir na porta 3000 e imprime uma mensagem quando estiver online
app.listen(3000, () => {
    console.log("Servidor Online!"); // Mensagem que será exibida no console quando o servidor estiver rodando
});
