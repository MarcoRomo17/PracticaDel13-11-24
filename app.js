import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js";


dotenv.config()
mongoose.connect(process.env.url_BD)
.then(()=>{
    console.log("Funciona la base de datos")
})
.catch((error)=>{
    console.log( " No funciona, ya salio ", error)
})

const app = express();
app.use(cors());
app.listen(4000,()=>{
    console.log("Se escucha el servidor")
})

test();