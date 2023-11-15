import express, { Request, Response } from "express";

const app = express();

app.post("/", lidarComRequisicao );

function lidarComRequisicao(req: Request,  res: Response) {
    res.status(401).send("Olá, mundo!");
}
//function appIniciado() {
    //console.log("Aplicação inicada!");

//const appIniciado = () => {
    //console.log("Aplicação inicada!");
//}
//}

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});