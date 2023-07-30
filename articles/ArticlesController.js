import express from 'express';

const router = express.Router();

router.get("/articles",(req,res)=>{
    res.send("Rota de artigos")
});

router.get("/admin/articles/new",(req,res)=>{
    res.send("ROTA PARA CRIAR NOVO ARTIGO")
});

export default router;