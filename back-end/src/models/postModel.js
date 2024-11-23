import { postAdd } from '../controlle/postControllers.js';
import connectDatabase from '../mongo.js';
const connecting = await connectDatabase(process.env.CONNECT_DB)

export async function getAllPosts(){
    const db = connecting.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.find().toArray()
}

export async function create(newPost){
    const db = connecting.db("imersao-instabytes");
    const collection = db.collection("posts");
    return collection.insertOne(newPost);
}