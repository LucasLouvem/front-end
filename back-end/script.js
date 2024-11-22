import express from 'express';

const app = express()

app.listen(3000,() => {
    console.log("Servidor Online!");
});

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Bem Vindo</h1>")
});