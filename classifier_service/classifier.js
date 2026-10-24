import { classify as llmClassify } from "./llm/api.js";
import { classify as knnClassify, init as knnInit } from "./knn/api.js";
import cors from "cors";
// const dogExample = "https://images.theconversation.com/files/625049/original/file-20241010-15-95v3ha.jpg?ixlib=rb-4.1.0&rect=12%2C96%2C2671%2C1335&q=45&auto=format&w=668&h=324&fit=crop";
// //os 5 dos 5 vizinhos mais proximos
// console.log(await classify(dogExample, 5));

import express from "express"

const app = express();
const port = 3000;

await knnInit();

//mandamos o nosso app parsear em json 
app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173"
}));

app.get("/", (req,res) => {
        res.send("Hello World")
});

//como vai minha requisição
// {
//     //aqui vai falar se e llm ou knn
//     method: "knn",
//     imgPath: "",
//     k
// }

app.post("/classify", async (req,res) => {
    const method = req.body["method"];
    const imgPath = req.body["imgPath"]
    console.log(`New classification request using ${method}!`)
    
    let result = null
        if(method == "llm"){
            result = await llmClassify(imgPath)

        }else if(method == "knn"){
            const k = req.body["k"] ? req.body["k"] : 5;
            result = await knnClassify(imgPath, k)

        }else{
            result = res.status(400).send({"error": "no method fund"})
        }

        res.send({result})


});

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`);
})