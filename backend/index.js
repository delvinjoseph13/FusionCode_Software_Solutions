import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import router from "./routes/eventRoute.js";

dotenv.config()

const app=express();
app.use(cors())
app.use(express.json())

app.use('/api',router)

mongoose.connect(process.env.MOGODB_URL);
const db=mongoose.connection;
db.on("open",()=>{
    console.log("Successfully connected to db")
})

app.listen(5000,()=>{
    console.log(`Server is running 5000`)
})