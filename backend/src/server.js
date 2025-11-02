import express from "express";
import { ENV } from "./lib/env";

const app = express();

const PORT = ENV.PORT;

app.get("/",(req,res) => {
    res.status(201).json({message: "Welcome to node project where i dont know if i completed or not!"});
});

app.listen(PORT, ()=>{
    console.log(`Port is listening to ${PORT}`);
});