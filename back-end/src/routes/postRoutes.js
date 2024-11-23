import express from "express";
import { postAdd, postList } from "../controlle/postControllers.js";

const routes = (app) =>{

    app.use(express.json());
    
    app.get("/posts", postList);
    
    app.post("/posts", postAdd);
}

export default routes
