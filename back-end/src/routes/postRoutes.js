import express from "express";
import { postList } from "../controlle/postControllers.js";

const routes = (app) =>{
    
    app.get("/", (req, res)=>{
        res.status(200).send("<h1>Bom Dia</h1><img src='https://placecats.com/300/200?fit=contain&position=top'>")
    });
    
    app.get("/:id", postList);
}

export default routes
