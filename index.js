import express from "express";


const app = express();



app.get("/", (req,res)=> {
    res.send("Bem vindo")
})

app.listen(8080,() =>{
    console.log("Servidon on")
})