import express from "express";
import bodyParser from "body-parser";
import connection from "./database/database.js";

import CategoriesController from "./categories/CategoriesController.js";
import ArticlesController from "./articles/ArticlesController.js";

import Article from "./articles/Article.js";
import Category from "./categories/Category.js";






const app = express();

//View engine
app.set("view engine", "ejs");

//Static files
app.use(express.static("public"));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database connection
connection.authenticate()
    .then(() =>{
        console.log("Conexão feita com sucesso");
    })
    .catch(error =>{
        console.log(error);
    });



//Rotas - Controllers    

app.use("/", CategoriesController);
app.use("/", ArticlesController);





app.get('/', (req,res)=> {
    res.send("views/index.ejs")
})

app.listen(8080,() =>{
    console.log("Servidon on")
})