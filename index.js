import express from "express";
import bodyParser from "body-parser";


const app = express();

//View engine
app.set("view engine", "ejs");

//Static files
app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req,res)=> {
    res.send("Bem vindo")
})

app.listen(8080,() =>{
    console.log("Servidon on")
})