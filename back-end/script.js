import express from 'express';
import connectDatabase from './src/mongo.js';

await connectDatabase(process.env.CONNECT_DB)

const app = express()
const posts = [
    {
        id: 1,
        description: "foto",
        image: "https://placecats.com/300/200?fit=contain&position=top"
    },
    {
        id: 2,
        description: "foto3",
        image: "https://placecats.com/300/200?fit=contain&position=top"
    }
]

app.listen(3000,() => {
    console.log("Servidor Online!");
});

app.get("/", (req, res)=>{
    res.status(200).send("<h1>Bom Dia</h1><img src='https://placecats.com/300/200?fit=contain&position=top'>")
});

function locateId(id){
    return posts.findIndex((posts) => {
        return posts.id === Number(id);
    });

}

app.get("/:id", (req,res) =>{
    const index = locateId(req.params.id)
    res.status(200).json(posts[index])
});