import express from "express";
import multer from "multer";
import { postAdd, postList, postUpload } from "../controlle/postControllers.js";

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'uploads/');
    },
    filename: function (req,file, cb){
        cb(null,file.originalname)
    }
});

const upload = multer({ dest: "./uploads", storage})

const routes = (app) =>{

    app.use(express.json());
    
    app.get("/posts", postList);
    
    app.post("/posts", postAdd);

    app.post("/upload", upload.single("imagem"), postUpload);
}

export default routes